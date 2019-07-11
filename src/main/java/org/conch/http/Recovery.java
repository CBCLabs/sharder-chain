/*
 *  Copyright © 2017-2018 Sharder Foundation.
 *
 *  This program is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU General Public License
 *  version 2 as published by the Free Software Foundation.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, you can visit it at:
 *  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt
 *
 *  This software uses third party libraries and open-source programs,
 *  distributed under licenses described in 3RD-PARTY-LICENSES.
 *
 */

package org.conch.http;

import com.google.common.collect.Maps;
import org.conch.Conch;
import org.conch.account.Account;
import org.conch.common.ConchException;
import org.conch.mint.pool.SharderPoolProcessor;
import org.conch.util.FileUtil;
import org.json.simple.JSONObject;
import org.json.simple.JSONStreamAware;

import javax.servlet.http.HttpServletRequest;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * @author jangbubai
 * @date  2019-07-11 updated by Ben: support the type 
 */
public final class Recovery extends APIServlet.APIRequestHandler {

    static final Recovery INSTANCE = new Recovery();
    
    private static final String TYPE_RESET = "reset";
    private static final String TYPE_FACTORY_RESET = "factoryReset";
    
    private static final List<String> RESET_PARAMS = Arrays.asList(
            "sharder.adminPassword",
            "sharder.disableAdminPassword",
            "sharder.useNATService",
            "sharder.myAddress",
            "sharder.siteAccount",
            "sharder.NATClientKey",
            "sharder.NATServicePort",
            "sharder.NATServiceAddress",
            "sharder.HubBind",
            "sharder.HubBindAddress",
            "sharder.HubBindPassPhrase"
    );
    private static final HashMap<String, String> RESET_MAP;

    static {
        RESET_MAP = new HashMap<>(16);
        RESET_PARAMS.forEach(param -> RESET_MAP.put(param, ""));
    }

    private Recovery() {
        super(new APITag[]{APITag.DEBUG}, "restart");
    }

    @Override
    @SuppressWarnings("unchecked")
    protected JSONStreamAware processRequest(HttpServletRequest req) {
        JSONObject response = new JSONObject();
        String type = Conch.getStringProperty("type");
        boolean restart = "true".equalsIgnoreCase(req.getParameter("restart"));

        try {
            
            if(TYPE_RESET.equalsIgnoreCase(type)){
                reset();
            }else if(TYPE_FACTORY_RESET.equalsIgnoreCase(type)){
                factoryReset();
            }else{
                reset();
            }

        } catch (ConchException.NotValidException e) {
            response.put("done", false);
            response.put("failedReason", e.getMessage());
            return response;
        } catch (RuntimeException | FileNotFoundException e) {
            response.put("done", false);
            JSONData.putException(response, e);
            return response;
        } 

        if (restart) {
            new Thread(() -> Conch.restartApplication(null)).start();
        }
        
        response.put("done", true);
        return response;
    }
    
    
    private void resetProperties(boolean fullReset) throws RuntimeException, FileNotFoundException{
        try {
            Conch.pause();

            // reset user define properties file
            HashMap<String, String> paramMap = Maps.newHashMap();
            if(fullReset){
                paramMap.putAll(RESET_MAP);
            }
            
            // delete the local db
            paramMap.put(ForceConverge.PROPERTY_MANUAL_RESET, "true");
            Conch.storePropertiesToFile(paramMap);

            // delete log files
            FileUtil.clearAllLogs();

        } catch (RuntimeException | FileNotFoundException e) {
           throw e;
        } finally {
            Conch.unpause();
        }
    }
    
    /**
     * - rollback the blockchain to the height 0 or the last check point
     */
    private void reset() throws FileNotFoundException {
        resetProperties(false);
    }

    /**
     * - rollback the blockchain to the height 0 or the last check point
     * - reset the hub to the factory state (need initialize the hub)
     */
    private void factoryReset() throws ConchException.NotValidException, FileNotFoundException {
        // working pool check
        long creatorId = Account.rsAccountToId(Conch.getStringProperty("sharder.HubBindAddress"));
        if (SharderPoolProcessor.whetherCreatorHasWorkingMinePool(creatorId)) {
            throw new ConchException.NotValidException("Current user has created a working pool, failed to reset the hub");
        }

        resetProperties(true);
    }

    @Override
    protected final boolean requirePost() {
        return true;
    }

    @Override
    protected boolean requirePassword() {
        return true;
    }

    @Override
    protected boolean allowRequiredBlockParameters() {
        return false;
    }

    @Override
    protected boolean requireBlockchain() {
        return false;
    }
}
