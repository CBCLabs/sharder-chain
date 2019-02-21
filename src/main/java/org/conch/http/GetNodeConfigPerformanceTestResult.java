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

import com.alibaba.fastjson.JSON;
import org.conch.Conch;
import org.conch.mq.Message;
import org.conch.mq.MessageManager;
import org.conch.util.Https;
import org.conch.util.IpUtil;
import org.json.simple.JSONStreamAware;

import javax.servlet.http.HttpServletRequest;

/**
 * 引导节点发起的性能测试请求
 *
 * @author CloudSen
 */
public final class GetNodeConfigPerformanceTestResult extends APIServlet.APIRequestHandler {

    static final GetNodeConfigPerformanceTestResult INSTANCE = new GetNodeConfigPerformanceTestResult();
    private static final String TEST_SUCCESS = "性能测试成功";
    private static final String TEST_FAILED = "性能测试失败";

    private GetNodeConfigPerformanceTestResult() {
        super(new APITag[]{APITag.TEST}, "time");
    }

    @Override
    protected JSONStreamAware processRequest(HttpServletRequest request) {

        if (!IpUtil.matchHost(request, Conch.getSharderFoundationURL())) {
            String msg = "Exception: Not valid host! ONLY " + Conch.getSharderFoundationURL() + " can do this operation!";
            System.out.println(msg);
            return ResultUtil.error500(msg);
        }

        // get message from request
        String postParams = Https.getPostData(request);
        Message message = JSON.parseObject(postParams, Message.class);

        // add this message to message queue
        boolean result = MessageManager.addMessage(message);

        // return response immediately
        if (result) {
            return ResultUtil.ok(TEST_SUCCESS);
        } else {
            return ResultUtil.failed(TEST_FAILED);
        }
    }

}
