import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {
    login: {
        'incorrect_key': "您输入的密钥不正确，请再试一次 ！",
        'no_found_account': "无法找到您的帐户地址",
        'login_tip1': "请用您的测试网络账户登录-不是您的真实账户!",
        'login_tip2': "警告:您已连接到测试网络,不要使用您的真实密钥!",
        'language': "语言",
        'login': "登录",
        'secret_login': "密钥登录",
        'account_login': "账户登录",
        'login_placeholder': "请输入账户密钥",
        'sharder_account': "SHARDER账户",
        'register_tip': "没有账户? 创建账户",
        'welcome_tip': "欢迎来到SHARDER",
        'init_hub': "初始化HUB",
        'use_nat_server': "使用穿透服务",
        'config_nat_server': "配置穿透服务",
    },
    hubsetting: {
        'register_nat_server': "申请穿透服务",
        'enable_nat_traversal': "启动内网穿透服务",
        'has_public_address': '我有公网',
        'sharder_account': "SHARDER官网账户",
        'sharder_account_password': "SHARDER账户密码",
        'nat_traversal_address': "穿透服务地址",
        'nat_traversal_port': "穿透服务端口",
        'nat_traversal_clent_privateKey': "穿透服务客户端秘钥",
        'public_ip_address': "公网地址",
        'token_address': "关联SS地址",
        'enable_auto_mining': "是否开启挖矿",
        'set_mnemonic_phrase': "绑定密钥",
        'set_password': "设置管理员密码",
        'confirm_password': "确认管理员密码:",
        'confirm_restart': "确认后重启",
        'current_version': "当前版本",
        'discover_new_version': "发现新版本",
        'update': "点击更新",
        'reset': "重置Hub",
        'restart': "重启Hub",
        'title': "Hub设置",
        'reset_mnemonic_phrase': "改绑密钥",
        'reset_password': "重设管理员密码",
        'cancel': "取消",
        'update_hub_setting_success': "成功更新穿透服务配置信息",
        'register_status': "申请状态",
        'register_status_invalid': "无效",
        'register_status_pending': "申请中",
        'register_status_approval': "有效",
    },
    register: {
        'register_title': "已为您生成账户密钥",
        'register_tip1': "请写下来或记住这12个单词，该密钥用于访问您的SHARDER账户。",
        'register_tip2': "注意：永远不要透露您的密钥，如果丢失您将无法访问您的账户！",
        'cancel': "取消",
        'next_step': "下一步",
    },
    account: {
        'download_interrupt': "区块链下载中断，没有连接",
        'block_fully_downloaded': "区块还未完整下载",
        'remaining_blocks': "个剩余区块",
        'downloading_blockchain': "正在下载区块链",
        'please_init_hub': "请先初始化Hub",
        'block_number': "区块编号",
        'poc_trading': "PoC交易",
        'synchronization_block': "当前正在同步区块链，请稍后再试",
        'account_title': "账户总览",
        'account_info': "账户详情",
        'assets': "资产 ",
        'transfer': "转账",
        'send_message': "发送消息",
        'hub_setting': "HUB设置",
        'income_and_expenditure_details': "收支明细",
        'payout': "支出",
        'income': "收入",
    },
    transaction: {
        'transaction_record': "交易记录",
        'transaction_time': "交易时间",
        'block_height': "区块高度",
        'transaction_type': "交易类型",
        'transaction_amount': "金额",
        'transaction_fee': "手续费",
        'transaction_account': "交易账户",
        'transaction_confirm_quantity': "确认数量",
        'operating': "操作",
        'transaction_type_all': "全部",
        'transaction_type_payment': "普通转账",
        'transaction_type_information': "普通信息",
        'transaction_type_account': "账户信息",
        'transaction_type_storage_service': "存储服务",
        'transaction_type_forge_pool': "矿池交易",
        'transaction_type_system_reward': "系统奖励",
        'transaction_type_block_reward': "出块奖励",
        'transaction_type_genesis_reward': "创世交易",
        'transaction_type_poc': "PoC交易",
        'self': "您",
        'view_details': "查看详情",
    },
    sendMessage: {
        'sendMessage_title': "发送信息",
        'receiver': "接收者",
        'receiver_publickey': "接收者公钥",
        'infomation': "信息",
        'encrypted_information': "加密信息",
        'message_tip': "请输入信息内容",
        'file': "文件",
        'file_tip': "请选择文件",
        'browse': "浏览文件",
        'delete': "删除",
        'fee': "手续费",
        'calculate': "计算",
        'calc_short': "计算",
        'secret_key': "秘钥",
        'send_message': "信息",
    },
    transfer: {
        'transfer_title': "转账",
        'receiver': "接收者",
        'receiver_public_key': "接收者公钥",
        'amount': "数额",
        'fee': "手续费",
        'calculate': "计算",
        'calc_short': "计算",
        'enable_add_info': "添加信息",
        'encrypted_information': "加密信息",
        'message_tip': "请输入信息内容",
        'secret_key': "秘钥",
        'transfer_send': "发送",
    },
    account_info: {
        'account_information': "账户详情",
        'accountID': "账户ID",
        'account_address': "账户地址",
        'account_name': "账户名",
        'account_name_not_set': "未设置",
        'account_set_name': "确认",
        'account_balance': "账户余额",
        'account_available_balance': "可用余额",
        'account_mining_balance': "挖矿余额",
        'public_key': "公钥",
    },
    header: {
        'version': "版本",
        'account': "账户",
        'network': "网络",
        'mining': "矿池",
        'observation_mode': "观察模式",
        'secret_mode': "秘钥模式",
        'forging_error_new_account': "您不能挖矿，因为您的帐户还没有公钥。请完成一次交易或则使用密钥重新登录。",
        'forging_error_effective_balance': "您的有效余额不足，不能挖矿！",
        'forging_error_no_admin_password': "无法确定挖矿状态，请指定管理员密码",
        'forging_error_exceeds_account_volume': "不能拥有多个账户在同一节点挖矿,请使用关联账户重新登陆",
        'no_forging': "未挖矿",
        'started_forging': "已启动",
        'exit': "退出",
        'start_forging': "开启挖矿",
        'admin_password': "管理密码",
        'starting_forging': "开启",
        'search': "搜索",
        'search_open': "输入账户ID/交易ID/区块ID进行搜索",
        'open_console': "打开控制台。日志记录开始......",
        'console': "控制台",
    },
    network: {
        'mining_time': "挖矿时间",
        'poc_score': "算力 (PoC)",
        'poc_score_ss': "SS抵押得分",
        'poc_score_node_type': "节点类型得分",
        'poc_score_server': '开启服务得分',
        'poc_score_hardware': '硬件得分',
        'poc_score_network': '网络得分',
        'poc_score_performance': '交易性能得分',
        'poc_score_online_rate': '在线率得分',
        'poc_score_block_missing': '出块错过扣分',
        'poc_score_bc': '分叉收敛得分',
        'miners_roll': "矿工名单",
        'miners_list': "矿工列表",
        'no_connection': "无连接",
        'in_connection': "已连接",
        'disconnect': "断开连接",
        'network_title': "网络总览",
        'block_height': "区块高度",
        'block_newest_time': "生成时间 ",
        'block_avg_transaction_volume': "区块平均交易数",
        'block_peers_volume': "节点数量",
        'miner_info': "交易概况",
        'miner_volume': "矿工数量",
        'total_trading_volume': "交易总数",
        'transfer_transaction': "转账交易数",
        'coinbase_transaction': "矿池交易数",
        'store_transaction': "存储交易数",
        'alias_modification': "账户修改数",
        'system_reward': "系统奖励数",
        'peers_info': "节点概况",
        'peers_add': "添加节点",
        'peers_detail': "节点详情",
        'block_list': "区块列表",
        'block_list_height': "高度",
        'block_list_time': "出块时间",
        'block_list_amount': "金额",
        'block_list_fee': "手续费",
        'block_list_transaction': "交易数",
        'block_list_generator': "出块者",
        'block_list_operating': "操作",
        'view_details': "查看详情",
    },
    peers: {
        'tag_node': "标记节点",
        'stores_modifiable_messages': "存储过期的可修改消息",
        'api_service': "API服务",
        'api_ssl_service': "API SSL服务",
        'enable_cors_api': "跨域API服务",
        'commercial_api_services': "商业API服务",
        'offline_data_storage': "链下存储",
        'agent_mining': "代理挖矿服务",
        'nat_server': "Nat服务",
        'certificate_services': "证明服务",
        'return_network': "返回网络",
        'total_peers': "节点数量",
        'active_hub': "HUB运行数",
        'active_peers': "活跃节点数",
        'peer_list': "节点列表",
        'peer_address': "节点地址",
        'download': "已下载",
        'upload': "已上传",
        'application': "应用程序",
        'platform': "平台",
        'server': "服务",
        'operating': "操作",
        'link': "连接",
        'blacklist': "黑名单",
        'join_blacklist': "加入黑名单",
        'join_blacklist_tip1': "是否将节点 \"",
        'join_blacklist_tip2': "\" 添加到黑名单？",
        'admin_password': "管理密码",
        'join': "添加",
        'link_peer': "连接节点",
        'peer_name': "节点信息",
        'peer': "节点",
        'communication_port': "通讯端口",
        'version': "版本",
        'latest_update': "最后更新",
        'status': "状态",
        'shared_address': "共享地址",
        'published_address': "公布的地址",
    },
    mining: {
        attribute: {
            'exceeding_total': "超出矿池总上限",
            'pool_destruction': "矿池已销毁",
            'join_number_info': "投入数量必须大于1",
            'join_success': "加入成功",
            'delete_success': "删除成功",
            'not_join': "未加入",
            'return_previous': "返回上一页",
            'pool_number': "矿池编号:",
            'mining_probability': "挖矿几率:",
            'pool_details': "矿池详情",
            'mining': "挖矿中",
            'mining_current_number1': "当前第",
            'mining_current_number2': "块矿产",
            'income': "收益",
            'self_info': "我的信息",
            'join_time': "加入时间",
            'investing_diamonds': "投入SS",
            'gain_profit': "获得收益",
            'remaining_mining_time': "剩余挖矿时间",
            'exit_pool': "退出矿池",
            'destroy_pool': "删除矿池",
            'creator': "创建者:",
            'participating_users': "参与用户:",
            'capacity': "容量:",
            'pool_income': "矿池收益:",
            'reward_distribution': "奖励分配:",
            'close': "关闭",
            'currently_available': "当前可用:",
            'pool_capacity': "矿池容量:",
            'cancel': "取消",
            'confirm': "确定",
            'exit_pool_tip': "退出就无法继续挖矿获得收益",
            'destroy_pool_tip': "删除就无法继续挖矿获得收益",
            'join_pool_tip': "请输入投入数量",
        },
        binding_account: {
            'title': "共识矿场说明",
            'subtitle1': "共识矿场是基于SHARDER开发的DAPP。提供基于TSS的PoC矿池，可以通过\"矿池\"获得\"TSS\"。",
            'subtitle2': "用户可创建\"矿池\"或则将TSS投入矿池挖矿，享受TSS分红。",
            'description': "SS说明:",
            'description_tip1': "砖石与钱包的TSS (Sharder测试网络Token) 为1:1对应关系.在进入应用前需要你在当前钱包创建TSS地址.",
            'description_tip2': "如果你是矿机用户，请在钱包导入你的矿机挖矿的TSS地址，用于管理挖矿资产及获得对应TSS。",
            'description_tip3': "普通用户请先创建TSS地址,以便获得空投砖石",
            'description_tip4': "应用内的TSS可兑换为可流通的SS(ERC-20)",
            'tss_description': "TSS说明:",
            'tss_description_tip': "为了更好的测试SHARDER网络的运行情况,提高社区用户的活跃度同时推广SHARDER,\n" +
                "TSS(Testnet SS)。本钱包将支持创建和管理TSS地址。\n" +
                "TSS不具备流通性,目的只做为测试及与共识矿场钻石产生兑换关系所用.",
            'tss_acquisition': "TSS获取",
            'tss_acquisition_tip1': "请根据SHARDER官网说明完成SS(ERC-20)的锁仓，以便按照1:1的比例获取TSS。",
            'tss_acquisition_tip2': "未持有SS(ERC-20)的用户也可能会收到TSS，以SHARDER官网的活动为准。",
            'tss_acquisition_tip3': "进入应用完成应用任务或参与矿池挖矿获得TSS.",
            'bind_btn': "绑定豆匣账户进入应用",
            'bind_btn_tip1': "创建矿池权限也可以通过活动获得,请留意SHARDER官网信息!",
            'bind_btn_tip2': "sharder.org",
            'bind_address': "绑定地址",
            'bind_address_tip': "检查到你的钱包持有TSS地址如下,请选择挖矿地址",
            'address': "地址: ",
            'tss_volume': "TSS 数量: ",
            'binding_immediately': "立即绑定",
            'binding': "绑定中...",
            'bind_success': "绑定成功",
            'bing_error': "绑定失败",
        },
        binding_validation: {
            'bind_phone': "绑定手机",
            'bind_phone_tip': "绑定手机后即可领取砖石奖励",
            'phone_number': "手机号码",
            'area_code': "区号",
            'phone_input_tip': "请输入你的手机号码",
            'next_step': "下一步",
            'bind_email': "绑定邮箱",
            'bind_email_tip': "绑定邮箱后即可领取砖石奖励",
            'email_number': "邮箱号码",
            'email_number_tip': "请输入你的邮箱",
            'verification_title': "请输入验证码",
            'verification_tip1': "验证码已发送到: ",
            'verification_tip2': "请注意查收",
            'verification_tip3': "请输入6位验证码",
            'resend_verification': "重新发送验证码",
            'receive_award': "领取奖励",
            'receive_success_title': "领取成功",
            'receive_success_tip': "恭喜你,",
            'receive_success_tip2': " SS",
        },
        create_history: {
            'create_time': "创建时间",
            'mining_time': "挖矿时长",
            'mining_time_tip': "块矿产(约12小时)",
            'mining_income': "矿池收益",
            'diamond': "钻石",
            'end_time': "结束时间",
            'reward_distribution': "奖励分配",
            'join_people': "加入人数",
            'pool_diamond': "矿池SS",
            'max': "(最大值)",
            'close': "关闭",
        },
        diamond_exchange: {
            'diamond_exchange_title': "SS兑换",
            'diamond_exchange_subtitle': "SS限时开发兑换中,数量有限先到先得",
            'remaining': "剩余:",
            'description': "说明:",
            'not_open': "暂未开放",
            'not_open_tip': "更多兑换即将开启!",
        },
        free_collar_drill: {
            'free_collar_title': "免费领SS",
            'free_collar_subtitle': "免费领取TSS,走向致富之路",
            'collar': "立即领取",
            'daily_login': "每日登陆",
            'registration_gift': "注册赠送",
            'received': "已领取",
        },
        index: {
            'pool_no_permissions': "您还未拥有创建矿池的权限",
            'creating_success': "创建成功",
            'sharder_mining': "豆匣矿池",
            'free_collar': "免费领SS",
            'ss_exchange': "SS兑换",
            'net_mining': "全网挖矿: ",
            'net_mining_number': "第{number}块",
            'my_assets': "我的资产: ",
            'my_income': "我的收益: ",
            'view_ranking': "查看排行",
            'net_income': "全网收益",
            'mining_description': "豆匣矿池说明",
            'join_friends': "邀请好友得奖励",
            'rule_description': "规则说明",
            'my_pool': "我的矿池",
            'create_pool': "创建矿池",
            'mineral': "矿产: ",
            'blocker': "出块者: ",
            'reward': "奖励: ",
            'pool_list': "矿池列表",
            'sort': "排名",
            'pool': "矿池",
            'pool_income': "矿池收益:",
            'Income_distribution': "收益分配:",
            'remaining_mining': "剩余挖矿:",
            'unit_block': "块",
            'welfare_title1': "请扫描二维码下载cAmp钱包,",
            'welfare_title2': "进入\"豆匣矿场\"应用免费领取",
            'reward_title': "TSS为SHARDER测试网络中的原生加密数字货币，为了回馈参与测试网络的社区成员开放SS兑换功能，数量有限先到先得。",
            'remaining': "剩余:",
            'reward_instruction': "说明:兑换成功后请联系官方管理员领取",
            'miner_name': "矿工名称",
            'miner_name_not_defined': "未设置",
            'tss_address': "TSS地址",
            'free_collar_drill': "免费领钻",
            'join_friend': "邀请好友",
            'diamond_exchange': "钻石兑换",
            'about_us': "关于我们",
            'follow_us': "关注我们",
            'webside': "www.oxwallet.org",
            'set_name': "名称设置",
            'set_name_tip': "请输入名称",
            'tss_address_tile': "TSS地址说明",
            'tss_address_subtitle1': "TSS地址为豆匣测试网络的账户地址,共识矿场是基于SHARDER开发的DAPP,此地址同时也是你共识矿场应用内的账户.",
            'tss_address_subtitle2': "TSS不具备价格流通.目前只能作为测试及与矿场砖石产生兑换关系所用,与钻石为一一对应关系。",
            'mining_ranking': "挖矿排行",
            'account': "账户",
            'ss_volume': "SS数量",
            'unit_ming': "名",
            'pool_properties': "矿池属性",
            'pool_volume': "矿池数量",
            'current_account': "当前账户",
            'pool_capacity': "矿池容量",
            'mining_time': "挖矿时长",
            'mining_setting': "矿池设定",
            'invest_ss': "投入SS:",
            'invest_tip': "请输入投入矿池SS数量, 最低20000SS",
            'invest_ss_tip': "创建矿池时投入的SS也将参与挖矿并获得收益分配",
            'income_distribution': "收益分配:",
            'income_distribution_tip': "将按照设置的百分比从矿池收入 (挖矿奖励等) 中提取并分配给其余矿池的参与者.",
            'create_now': "立即创建",
            'mine': "矿场",
            'personal_center': "个人中心",
            'mining_sort_default': "默认排序",
            'mining_sort_capacity': "矿池容量",
            'mining_sort_distribution': "奖励分配",
            'mining_sort_time': "剩余时间",
            'mining_no_pit_moment': "暂时没有任何矿池",
        },
        invite_friends: {
            'title': "共识矿场",
            'subtitle1': "每邀请好友下载钱包并进入应用获得钻石奖励",
            'subtitle2': "每邀请一位注册获得200钻石奖励 (最高8000)",
            'invite_code': "你的邀请码",
            'copy_invite_code': "复制邀请码",
            'invited': "已邀请",
            'earn_rewards': "获得奖励",
            'qr_tip1': "扫码立即下载CAMP钱包",
            'qr_tip2': "本活动最终解释权归CAMP钱包所有",
            'unit_ren': "人",
        },
        my_assets: {
            'whether': "到底了...",
            'click_load': "点击加载",
            'total_asset': "总资产(砖石)",
            'available_asset': "可用资产",
            'frozen_assets': "冻结资产(挖矿中)",
            'asset_record': "资产记录",
            'mining_reward': "挖矿奖励",
            'ss_storage_rebate': "SS存储返利",
        },
        my_mining: {
            'i_join': "我加入的",
            'i_create': "我创建的",
            'no_more': "没有更多",
            'history_create_record': "历史创建记录",
        },
        rule_description: {
            'rule_title': "矿池规则",
            'rule_subtitle': "豆匣矿池规则说明",
            'sharder_pool': "豆匣矿池",
            'sharder_pool_tip1': "\"豆匣矿池\"是SHARDER研发的PoC矿池应用，采用PoC共识争夺出块权。拥有豆匣矿机的矿工可以创建矿池，普通用户可以投入TSS参与其中。",
            'sharder_pool_tip2': "矿池创建者最高可以获得30%的矿池收益，创建矿池至少需要抵押2万TSS，矿池的生命周期为15天，加入矿池至少需要投入1万TSS。",
            'ss': "TSS",
            'ss_tip1': "\"TSS\"为SHARDER测试网络的原生数币，需要对当前流通的SS(ERC20)完成锁仓，按照1:1空投TSS。",
            'ss_tip2': "空投的TSS无法再兑换为SS(ERC20)，挖矿获得的TSS则可以按照2:1的方式兑换为SS(ERC20)。",
            'poc': "PoC共识",
            'poc_tip1': "运行了SHARDER客户端的节点都可以参与挖矿权的争夺，挖矿权由PoC共识决定，PoC权重表也是一种上链交易。PoC权重表可由所有SHARDER社区的节点投票调整。",
            'poc_tip2': "测试网络运行PoC权重表可以在创世区块中查看，每个矿工都根据权重表计算其PoC算力。",
            'reward_distribution': "奖励分配",
            'reward_distribution_tip1': "经测算从1亿系统奖励中解锁 11,700,000 SS(ERC20)用于测试网的奖励。",
            'reward_distribution_tip2': "第一阶段测试(2019.Q2前)，Hub节点可获得出块奖励的90%，普通节点和基金会节点可获得出块奖励的10%。",
        }
    },
    sso: {
        'missing_asset_param': "参数'asset'没有设置",
        'invalid_asset_param': "参数'asset' __asset__ 已失效, 请制定一个存在的资产ID",
        'error_asset_or_account_id_required': "必须填写资产帐户或帐户 ID 。",
        'error_asset_or_account_id_invalid': "无效的资产或帐户 ID。",
        'account_no_assets': "该帐户没有资产。",
        'no_asset_found': "未找到资产。",
        'error_asset_already_bookmarked': "资产已在书签列表中。",
        'success_asset_bookmarked': "资产添加成功。",
        'asset_exchange_duplicates_warning': "警告： 在资产交易中存在1个相同名称的资产。请确保您的选择是正确的。确认账户和资产 ID。",
        'error_invalid_input': "无效的输入。",
        'error_amount_price_required': "请填写数量和价格。",
        'buy_order_description': "以每个资产 __nxt__ SS 购买 __quantity__ __asset_name__。",
        'buy_order_description_help': "每购买一个整体资产，您将要支付 __nxt__ SS，当购买所有时，总量为__total_nxt__ SS。",
        'sell_order_description': "以每个资产 __nxt__ SS 出售 __quantity__ __asset_name__。",
        'sell_order_description_help': "每出售一个整体资产，您将会收到 __nxt__ SS，当出售所有时，总量为__total_nxt__ SS。",
        'success_buy_order_asset': "买单已提交。",
        'error_order_asset': "出现未知错误 ！该订单可能已经通过或未能通过。",
        'error_description_required': "必须输入描述。",
        'error_whole_quantity': "数量必须是整数。",
        'error_group_name': "群组名称只能使用字母数字字符。",
        'success_group_name_update': "组名更新成功。",
        'success_asset_group_removal': "资产从群组中成功删除。",
        'error_owned_asset_no_removal': "不能删除资产 （您自己的）。",
        'success_asset_bookmark_removal': "资产已从书签中成功删除。",
        'success_asset_group_add': "资产已成功添加到群组。",
        'transfer': "转移",
        'delete_shares': "删除股份",
        'available_qty': "__qty__ 可用",
        'total_lowercase': "总计",
        'error_not_specified': "__name__ 未指定。",
        'error_max_asset_transfer_warning': "指定数量大于 __qty__。您确定要继续吗？再次单击提交按钮确认。",
        'error_incorrect_quantity_plus': "错误的数量： __err__",
        'error_asset_not_found': "未找到资产。",
        'success_cancel_sell_order': "卖单已取消。",
        'success_cancel_buy_order': "买单已取消。",
        'no_asset_selected_for_approval': "未选择资产",
        'account_has_no_assets': "帐户没有资产",
        'no_connection': "没有连接",
        'no_current_approval_requests': "目前没有批准请求",
        'please_select_asset_for_approval': "请选择一种资产",
        'send_nxt': "发送SS",
        'message': "信息",
        'delete': "删除",
        'error_contact_name_required': "必须输入联系人名称。",
        'error_account_id_required': "必须填写帐户 ID 。",
        'error_contact_name_alpha': "联系人名称必须包含字母字符。",
        'error_email_address': "电子邮件地址不正确。",
        'error_account_id': "无效的帐户 ID 。",
        'error_contact_name_exists': "该名称的联系人已经存在。",
        'error_contact_account_id_exists': "此帐户 ID 的联系人已存在。",
        'success_contact_add': "联系人添加成功。",
        'error_contact': "无效的联系人。",
        'error_contact_exists': "此帐户 ID 的联系人已经存在。",
        'success_contact_update': "联系人更新成功。",
        'success_contact_delete': "成功删除联系人。",
        'error_no_contacts_available': "没有联系人",
        'error_generate_public_key_no_password': "没有用户密钥无法生成公钥。",
        'error_decryption_passphrase_required': "需要输入您的密钥来解密此信息。",
        'error_account_id_not_specified': "未指定的帐户 ID。",
        'error_message_decryption': "无法解密该信息。",
        'error_passphrase_required': "必须输入密钥。",
        'error_signing_passphrase_required': "需要你的密钥为这些信息进行签名",
        'error_signature_verification_client': "无法验证签名（客户端）。",
        'message_empty': "信息是空白的。",
        'error_could_not_decrypt_var': "不能解密 __var__。",
        'error_could_not_decrypt': "无法解密。",
        'binary_data': "二进制数据",
        'shared_key': "分享密钥",
        'error_encrypted_note_not_found': "未找到加密备注",
        'error_passphrase_or_shared_key_required': "请输入密钥或则分享密钥",
        'error_incorrect_passphrase': "不正确的密钥。",
        'error_could_not_decrypt_message': "无法解密信息",
        'error_decryption_unknown': "解密过程中出现未知错误。",
        'encrypted_file_upload_not_supported': "此浏览器不支持加密文件上载",
        'error_encryption_browser_support': "您的浏览器不支持客户端加密。正在中止。",
        'no_available_remote_nodes': "沒有可用的全节点",
        'download': "下载",
        'generator_timing_accuracy_warning': "以下信息有30秒以上的延迟，使用桌面版客户端能获取更精确的信息。",
        'error_blockchain_downloading': "请等待，直到区块链下载完毕。",
        'success_asset_exchange_change_group_name': "已成功更改群组名称。",
        'success_asset_exchange_group': "",
        'success_add_contact': "联系人创建成功 ！",
        'success_update_contact': "联系人已更新成功 ！",
        'success_delete_contact': "成功删除联系人！",
        'success_send_message': "",
        'success_decrypt_messages': "信息已解密 ！",
        'success_start_forging': "挖矿已启动。",
        'success_stop_forging': "挖矿已停止。",
        'success_generate_token': "",
        'success_send_money': "SS 已发送。",
        'success_set_alias': "",
        'success_add_asset_bookmark': "资产已添加！",
        'success_sell_alias': "您的别名销售报价已创建成功！",
        'error_start_forging': "无法开始挖矿，未知错误。",
        'error_stop_forging': "您未开始挖矿。",
        'error_generate_token': "无法生成令牌。",
        'error_validate_token': "无法验证令牌",
        'error_form_blockchain_rescanning': "正在重新扫描区块链。请一分钟后尝试再次提交。",
        'error_not_a_number': "__field__ 应为数字。",
        'error_max_value': "__field__： 最大值是 __max__。",
        'error_min_value': "__field__: 最小值是 __min__。",
        'error_invalid_field': "__field__ 是无效的。",
        'error_numeric_ids_not_allowed': "不允许数字账户 ID 。",
        'info_merchant_message_required': "接收者账户要求您提供特殊格式的信息。",
        'error_merchant_message_': "错误_商家_信息_",
        'error_merchant_message_numeric_range_length': "信息应该是数字，长度在 __minLength__ 和 __maxLength__ 个字符之间。",
        'error_merchant_message_numeric_min_length': "信息应该是数字，最小长度为__minLength__ 个字符。",
        'error_merchant_message_numeric_length': "信息应该是数字，长度为 __length__ 个字符。",
        'error_merchant_message_alphanumeric_range_length': "信息应该是字母和数字，长度在 __minLength__ 和 __maxLength__ 个字符之间。",
        'error_merchant_message_alphanumeric_min_length': "信息应该是字母和数字，最小长度为__minLength__ 个字符。",
        'error_merchant_message_alphanumeric_length': "信息应该是字母和数字，长度为 __length__ 个字符。",
        'error_merchant_message_custom_range_length': "信息格式不正确，长度应该在 __minLength__ 和 __maxLength__ 个字符之间。",
        'error_merchant_message_custom_min_length': "信息格式不正确，最小长度应该为 __minLength__ 个字符。",
        'error_merchant_message_custom_length': "信息格式不正确，长度应该为 __length__ 个字符。",
        'error_merchant_message_numeric': "信息应该是数字。",
        'error_merchant_message_alphanumeric': "信息应该是字母和数字。",
        'error_merchant_message_custom': "信息格式不正确。",
        'amount': "数额",
        'fee': "手续费",
        'error_max_amount_warning': "您的数量高于 __nxt__ SS。你确定要继续吗？请再次单击提交按钮以确认。",
        'error_max_fee_warning': "您的手续费高于 __nxt__ SS。您确定要继续吗？请再次单击提交按钮以确认。",
        'error_decimal_positions_warning': "警告: 使用少于 2 位或超过 6 位的小数点可能会降低你的 __entity__ 的可用性",
        'error_unknown': "出现未知错误！",
        'success_clipboard_copy': "已经拷贝到剪贴板",
        'error_server_connect': "无法连接到全节点 __url__",
        'mobile_client': "移动客户端",
        'light_client': "轻客户端",
        'roaming_client': "漫游客户端",
        'previous': "上一个",
        'next': "下一步",
        'page': "页面",
        'does_not_exist': "不存在",
        'value': "价值",
        'must_be_true_or_false': "必须是'true'或'false'",
        'for': "为",
        'modal': "模块",
        'connected': "已连接",
        'not_connected': "未连接",
        'set_account_info': "设置帐户",
        'status_new_account': "欢迎来到您的新 豆匣 帐户。您的帐户 ID 是 __account_id__ - 当您第一次为账户充值时，您可以通过提供公钥来增加安全性，公钥是 __public_key__",
        'status_blockchain_rescanning': "正在重新扫描区块链。请等待完成。",
        'status_new_account_no_pk_v2': "欢迎来到您的新 豆匣 帐户。您的帐户 ID 是 __account_id__ - 当第一次为账户充值时，您也可以通过提供公钥来增加安全性。使用密钥登陆以确定您的公钥。",
        'public_key_not_announced_warning': "警告: 您的帐户公钥 __public_key__ 尚未公布到区块链中。这意味着它不会像其它账户一样受到保护。您必须进行一个发出的交易来解决该问题。",
        'no_public_key_warning': "警告：您的帐户没有公钥！你的账户安全保护级别较低。您必须完成一次转出交易来生成公钥。",
        'public_key_actions': "（设置帐户信息，发送一条信息，购买一个别名，发送 SS，...）",
        'next_lessee_status': "接下来的租约期限从区块 __start__ 到区块 __end__，承租方帐户是 __account__",
        'leased_out': "已授权",
        'balance_is_leased_out': "您的豆匣权力在接下来的 __blocks__ 区块 （直到区块 __end__）授权给帐户 __account__",
        'balance_leased_out_help': "请记住： 本授权将在当前授权结束后生效。",
        'leased_soon': "将要授权",
        'balance_will_be_leased_out': "您的豆匣权力将会授权给帐户 __account__ __blocks__ 区块 （区块范围 __start__ 至 __end__）",
        'balance_leasing_help': "请记住： 一旦提交不能取消。",
        'x_lessor': "__x__位授权者",
        'x_lessor_lease': "__x__ 位参与者已经将其豆匣权力授权到您的账户。",
        'you_received_assets': "您收到 1个 __name__ 资产。",
        'you_received_assets_plural': "您收到 __count__ 个 __name__ 资产。",
        'you_sold_assets': "您出售、 转移或删除 1 __name__ 资产。",
        'you_sold_assets_plural': "您出售、 转移或删除 __count__ __name__ 资产。",
        'multiple_assets_differences': "多个不同的资产已经被出售或购买。",
        'last_num_blocks': "最新 __blocks__",
        'percent_complete': "__percent__ %完成",
        'blocks_left': "__numBlocks__ 个剩余区块",
        'fork_warning': "警告：您很有可能处于分叉 （你已经挖矿了最近的10个区块） 。",
        'fork_warning_base_target': "警告: 你可能处于一个分支 (最新的区块高度比你本地的要高很多)",
        'error_search_no_results': "未找到任何信息，请再次查询。",
        'error_search_invalid': "输入无效。只能通过 ID 来搜索。",
        'cannot_find_remote_nodes': "沒有可用的全节点，退出手机客户端",
        'generating_passphrase_wait': "生成您的密钥。请稍候",
        'error_word_list': "无法加载单词列表...",
        'error_passphrase_length': "密钥必须多于 35 个字符。",
        'error_passphrase_strength': "由于您的密钥长度少于50个字符，因此它必须包含数字和大写字母。",
        'error_passphrase_match': "密钥不匹配。",
        'switched_to_account': "切换账户 __account__",
        'nrs_update_available': "新的 COS 发布了。建议您更新。",
        'passphrase_not_specified': "沒有指定密钥",
        'signed_transaction_json': "已签名的交易 JSON",
        'unsigned_transaction_json': "未签名的交易 JSON",
        'select_file_to_upload': "选择上传的文件",
        'sign_transaction': "签名交易",
        'broadcast': "广播",
        'parse_transaction': "解析交易",
        'calculate_full_hash': "计算完整哈希",
        'error_passphrase_incorrect': "不正确的密钥。",
        'success_valid_token': "令牌是有效的，属于帐户 __account_link__。它生成于 __timestamp__ 。",
        'error_invalid_token': "该令牌无效。它属于帐户 __account_link__。它生成于 __timestamp__ 。",
        'data_required_field': "数据是必填內容。",
        'generated_token_is': "生成的令牌是",
        'notifications_mark_as_read': "标记为所有已读",
        'app_title': "豆匣客户端",
        'no_notifications': "目前没有通知",
        'error_fee_exceeds_max_account_control_fee': "已超过 __maxFee__ SS 的最大手续费限制",
        'error_finish_height_out_of_account_control_interval': "完成高度不在账户控制的允许范围 [__min__..__max__]",
        'error_new_account': "您有一个全新的帐户，请先给它充值。",
        'error_invalid_referenced_transaction_hash': "无效的参考交易哈希。",
        'error_no_file_chosen': "未选择文件",
        'error_bytes_validation_server': "无法验证服务器返回的未签名的字节。",
        'info_referenced_transaction_hash': "由于您使用了一个参考交易哈希，将抵押100个 SS 直到交易确认或过期。",
        'error_request_timeout': "请求已超时。警告：这并不意味着请求没通过。请等待一些区块后再查看您的请求是否已处理。",
        'use_browser_default': "默认使用路蓝旗",
        'votes': "投票",
        'percentage': "比例",
        'finish_height': "完成高度",
        'approved': "批准",
        'none': "无",
        'accounts': "帐户",
        'asset': "资产",
        'currency': "货币",
        'alias_sale_cancellation': "别名出售取消",
        'alias_transfer': "别名转移",
        'confirmations': "__x__ 确认",
        'unconfirmed_transaction': "未确认的交易",
        'approve': "批准",
        'all_types': "所有类型",
        'account_ledger_message': "只显示最近的 __blocks__ 个区块生成的账户明细",
        'show_type_menu': "显示所有类型",
        'hide_type_menu': "隐藏类型菜单",
        'error_fraction_decimals': "分数最多只能有 __decimals__ 位小数。",
        'error_invalid_input_numbers': "无效的输入。只接受数字和点。",
        'temporarily_disconnected': "连接暂时中断",
        'coinbase': "CoinBase",
        'you': "您",
        'genesis': "创世块",
        'error_invalid_ordinary_payment': "无效普通转账。",
        'error_missing_alias_name': "缺少别名名称。",
        'error_alias_transfer_genesis': "不允许将别名转移到创世账户。",
        'error_ask_order_filled': "卖单已成交。",
        'error_bid_order_filled': "买单已成交。",
        'error_encrypted_text_messages_only': "只允许文本加密信息。",
        'error_missing_feedback_message': "缺少反馈消息。",
        'error_public_text_messages_only': "只允许文本公开信息。",
        'error_purchase_delivery': "购买不存在或未交付。",
        'error_purchase_refund': "购买不存在或未交付或已经退款。",
        'error_recipient_no_public_key_announcement': "接收者账户没有公钥，必须附加公钥公告。",
        'error_transaction_not_signed': "交易尚未签名。",
        'error_transaction_already_signed': "交易已经签名。",
        'error_public_key_announcement_no_recipient': "没有接收者无法给交易附加公钥公告。",
        'error_public_key_different_account_id': "已公布的公钥与接收者账户 ID 不匹配。",
        'error_public_key_already_announced': "该帐户已经公布公钥。",
        'error_alias_owned_by_other_account': "别名已由别的账户拥有。",
        'error_invalid_alias_sell_price': "别名售价无效。",
        'error_alias_not_yet_registered': "别名尚未注册。",
        'error_alias_not_from_sender': "别名不属于发送者。",
        'error_alias_not_from_recipient': "别名被非接收者的账户所拥有。",
        'error_alias_not_for_sale': "别名未在出售。",
        'error_invalid_alias_name': "别名名称无效。",
        'error_invalid_alias_uri_length': "URI 的长度无效。",
        'error_invalid_ask_order': "卖单无效。",
        'error_invalid_bid_order': "买单无效。",
        'error_dgs_price_quantity_changed': "商品价格或数量发生了变化。",
        'error_invalid_dgs_price_change': "数字商品价格变化无效。",
        'error_invalid_dgs_refund': "数字商品退款无效。",
        'error_purchase_not_exist_or_delivered': "购买不存在，或已交付。",
        'error_dgs_not_listed': "商品未列出或已经从列表中删除。",
        'error_dgs_delivery_deadline_expired': "豆匣权力授权无效： 未找到接收者账户或未公布公钥。",
        'error_invalid_balance_leasing_no_public_key': "",
        'error_invalid_balance_leasing': "豆匣权力授权无效。",
        'error_wrong_buyer_for_alias': "别名的错误购买者。",
        'error_post_only': "只能使用回帖接受该请求。",
        'error_incorrect_request': "错误的请求。",
        'error_incorrect_name': "不正确的 __name__。__reason__",
        'error_unknown_name': "未知的 __name__。",
        'error_not_forging': "帐户未在挖矿。",
        'error_not_enough_assets': "没有足够的资产。",
        'error_not_enough_funds': "余额不足",
        'error_not_allowed': "不允许。",
        'error_goods_not_delivered_yet': "商品还没有交付。",
        'error_feedback_already_sent': "反馈已发送",
        'error_refund_already_sent': "退款已发送",
        'error_purchase_already_delivered': "购买已经交付",
        'error_decryption_failed': "解密失败",
        'error_no_attached_message': "未找到附加信息。",
        'error_recipient_no_public_key': "接收者账户没有公钥。",
        'error_feature_not_available': "功能不可用。",
        'error_fractions': "不允许小数。",
        'error_decimals': "小数点后只允许1位数字。",
        'error_comma_not_allowed': "不允许使用逗号，可以使用点来代替。",
        'cancelled': "已取消",
        'phased': "分期",
        'unconfirmed': "未确认",
        'confirmed': "已确认",
    },
    password_modal: {
        'title': "输入管理员密码",
        'admin_password': "管理密码",
        'open': "开启",
        'secret_password': "输入私钥",
        'input_tip': "请输入私钥",
    },
    dialog: {
        'account_info_title1': "账户",
        'account_info_title2': " 信息",
        'account_info_name': "账户名",
        'account_info_available_asset': "可用资金",
        'account_info_alias': "别名",
        'account_info_total_transaction': "所有交易",
        'account_info_transaction_time': "交易时间",
        'account_info_transaction_type': "交易类型",
        'account_info_amount': "数量",
        'account_info_fee': "手续费",
        'account_info_account': "账户",
        'account_info_operating': "操作",
        'account_info_payment': "普通转账",
        'account_info_information': "普通信息",
        'account_info_account_info': "账户信息",
        'account_info_block_reward': "系统奖励",
        'account_info_data_storage': "数据存储",
        'account_info_forge_pool': "矿池交易",
        'account_info_poc': "PoC交易",
        'account_info_view_detail': "查看详情",
        'account_transaction_detail': "交易详情",
        'account_transaction_return': "返回账户信息",
        'account_transaction_signature': "签名",
        'account_transaction_transaction_serial_number': "交易序列号",
        'account_transaction_type': "类型",
        'account_transaction_signatureHash': "哈希签名",
        'account_transaction_sender': "发送者",
        'account_transaction_amount': "数额",
        'account_transaction_recipient': "接收者",
        'account_transaction_own': "您",
        'account_transaction_block_timestamp': "区块时间戳",
        'account_transaction_timestamp': "时间戳",
        'account_transaction_sender_public_key': "发送者公钥",
        'account_transaction_confirm': "确认",
        'account_transaction_fullHash': "类型完整哈希",
        'account_transaction_version': "版本",
        'account_transaction_block_height': "区块高度",
        'block_info_title1': "区块 ",
        'block_info_title2': " 信息",
        'block_info_all_transaction': "所有交易",
        'block_info_all_block_detail': "区块详情",
        'block_info_time': "时间",
        'block_info_type': "类型",
        'block_info_amount': "数量",
        'block_info_previous_block_hash': "上一个区块哈希",
        'block_info_payload_length': "载荷长度",
        'block_info_total_amount': "总数",
        'block_info_generation_signature': "矿工签名",
        'block_info_generation_public_key': "矿工公钥",
        'block_info_transcation_amount': "交易数量",
        'block_info_block_signature': "区块签名",
        'block_info_total_fee': "总手续费",
        'block_info_cumulative_difficulty': "挖矿难度",
        'block_info_mining': "矿工",
        'block_info_previous_block': "上一个区块",
        'block_info_next_block': "下一个区块",
    },
    notification: {
        'update_success': "更新成功",
        'restart_success': "请稍后再次打开页面",
        'hubsetting_no_sharder_account': "请输入Sharder账号获取HUB配置信息",
        'hubsetting_sharder_account_no_permission': "请联系管理员获取Hub设置",
        'hubsetting_account_address_error_format': "关联SS地址格式错误！",
        'hubsetting_no_mnemonic_word': "开启矿池必须填写助记词！",
        'hubsetting_inconsistent_password': "两次输入的管理员密码不一致！",
        'new_account_warning': "您有一个全新的帐户，请先给它充值。",
        'null_information_warning': "请检查是否还有未填的信息",
        'sendmessage_null_account': "请输入接收者账户ID",
        'sendmessage_account_error_format': "接收者账户格式错误",
        'sendmessage_null_account_public': "请输入接收者账户公钥",
        'sendmessage_null_secret_key': "必须输入您的秘钥来加密此信息",
        'transfer_amount_error': "请正确输入您要转账的值",
        'transfer_balance_insufficient': "您的余额不足",
        'transfer_null_secret_key': "必须输入密钥。",
        'transfer_null_public_key': "请输入接收者公钥。",
        'sendmessage_success': "您的消息已发送",
        'transfer_success': "SS 已发送",
        'clipboard_success': "已复制到剪切板",
        'modify_success': "修改成功",
        'clipboard_error': "复制失败",
        'file_exceeds_max_limit': "文件最大支持5M",
        'account_is_self': "这是您的账户",
        'unknown_account': "接收者帐户是未知帐户，意味着它没有转入或转出的交易记录。您可以通过提供接收者的公钥来增加安全性。",
        'search_no_null_error': "搜索框不能为空",
        'join_blacklist_success1': "已将'",
        'join_blacklist_success2': "'加入黑名单",
        'join_blacklist_error': "'加入黑名单失败",
        'join_link_peer_success1': "已与'",
        'join_link_peer_success2': "'连接成功",
        'join_link_peer_error': "连接失败",
        'API_service': "API服务",
        'core_service': "核心服务",
        'business_API': "商业API",
        'Storage_service': "存储服务",
        'search_null_info_error': "未找到任何信息，请再次查询。",
        'login_no_input_error': "请输入账号或私钥",
        'insufficient_permissions': "权限不足",
        'success_to_register_nat': "NAT服务申请成功，请等待审核",
    },
    enter: {
        'enter_tip': "您的密钥非常重要！为确保您已保存它, 请填写上一步生生成的密钥",
        'enter_cancel': "取消",
        'enter_client': "进入客户端",
    },
    restart: {
        'restarting': "正在重启，稍后自动刷新，请稍等......",
    },
    rules: {
        mustRequired: '此项必填',
        onlyNonNegativeInteger: '只能输入非负整数',
        onlyInteger: '只能输入整数',
        plz_input_admin_pwd: '请输入管理员密码',
        plz_input_admin_pwd_again: '请再次输入管理员密码',
        inconsistent_admin_password: "两次输入的管理员密码不一致！",
    },
    reward:{
        "exchange_success":"兑换成功",
        "exchange_error":"兑换失败",
        "transfer_failed":"转账失败",
        "sharder_binding_acconut":"请去官网绑定该地址",
        "binding_account":"绑定账户",
        "no_binding_account":"没绑定账户",
        "immediately_binding":"立刻绑定",
        "exchange":"兑换",
        "exchange_sharder_account":"兑换到Sharder账户:  {account}"
    }, 
    poc: {
        'block_reward_tips_phase1': "开放测试网络第一阶段(2019.Q2前) 90%的挖矿奖励分配给Hub矿工，剩余10%的挖矿奖励分配给其余矿工。",
        'creator': "创建者",
        'block': "生效区块",
        'tx': "交易",
        'weight': "权重占比(%)",
        'template_version': "版本号 ",
        'uptime': "在线率",
        'normal_node': "普通节点",
        'box_node': "Box节点",
        'hub_node': "Hub节点",
        'community_node': "社区节点",
        'sharder_node': "基金会节点",
        'fork_convergence_speed': "分叉收敛惩罚表(扣分)",
        'amount_of_loss_blocks': "出块错过数惩罚表(扣分)",
        'network_score': "网络分数",
        'hardware_score': "硬件分数",
        'tx_performance_score': "交易处理性能分数",
        'role_score': "开启服务分数",
        'node_type_score': "节点类型分数",
        'item_high': "高",
        'item_med': "中",
        'item_low': "低",
        'item_very_low': "极差",
        'item_fast': "Fast",
        'item_slow': "慢",
        'hard_fork': "硬分叉",
        'role_miner': "矿工",
        'role_watcher': "观察者",
        'role_traversal': "穿透者",
        'role_storer': "存储者",
        'role_prover': "证明者",
        'weight_role': "开启服务",
        'weight_node_type': "节点类型",
        'weight_ss_held': "SS抵押量",
        'weight_hardware_config': "硬件配置",
        'weight_network_config': "网络配置",
        'weight_tx_performance': "交易处理性能"
        
    },
    ...zhLocale
};

export default cn;
