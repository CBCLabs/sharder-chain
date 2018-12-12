import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {

    login: {
        'login_tip1':"请用您的测试网络账户登录-不是您的真实账户!",
        'login_tip2':"警告:您已连接到测试网络,不要使用您的真实密钥!",
        'language':"语言",
        'login':"登录",
        'secret_login':"密钥登录",
        'account_login':"账户登录",
        'login_placeholder':"请输入账户密钥",
        'sharder_account':"Sharder账户",
        'register_tip':"没有账户? 创建账户",
        'welcome_tip':"欢迎来到豆匣链",
        'init_hub':"初始化HUB",
    },
    hubsetting: {
        'enable_nat_traversal':"启动内网穿透服务:",
        'sharder_account':"Sharder官网账户:",
        'sharder_account_password':"Sharder官网密码:",
        'nat_traversal_address':"穿透服务地址:",
        'nat_traversal_port':"穿透服务端口:",
        'nat_traversal_clent_privateKey':"穿透服务客户端秘钥:",
        'public_ip_address':"公网地址:",
        'token_address':"关联SS地址:",
        'enable_auto_mining':"是否开启挖矿:",
        'set_mnemonic_phrase':"绑定助记词:",
        'set_password':"初始化管理员密码:",
        'confirm_password':"确认管理员密码:",
        'confirm_restart':"确认后重启",
        'current_version':"当前版本：",
        'discover_new_version':"发现新版本:",
        'update':"点击更新",
        'reset':"重置Hub",
        'restart':"重启Hub",
        'title':"Hub设置",
        'reset_mnemonic_phrase':"改绑助记词",
        'reset_password':"重设管理员密码",
        'cancel':"取消",
    },
    register:{
        'register_title':"已为您生成账户密钥",
        'register_tip1':"请写下来或记住这12单词。该密钥用于访问您的 豆匣 账户。",
        'register_tip2':"注意：永远不要透露您的密钥。如果失去它您将无法访问您的账户！",
        'cancel':"取消",
        'next_step':"下一步",
    },
    account:{
        'account_title':"账户总览",
        'account_info':"账户详情",
        'assets':"资产：",
        'transfer':"转账",
        'send_message':"发送消息",
        'hub_setting':"HUB设置",
        'income_and_expenditure_details':"收支明细",
        'payout':"支出",
        'income':"收入",
    },
    transaction:{
        'transaction_record':"交易记录",
        'transaction_time':"交易时间",
        'block_height':"区块高度",
        'transaction_type':"交易类型",
        'transaction_amount':"金额",
        'transaction_fee':"手续费",
        'transaction_account':"交易账户",
        'transaction_confirm_quantity':"确认数量",
        'operating':"操作",
        'transaction_type_all':"全部",
        'transaction_type_payment':"普通支付",
        'transaction_type_information':"任意信息",
        'transaction_type_account':"账户信息",
        'transaction_type_storage_service':"存储服务",
        'transaction_type_block_reward':"出块奖励",
        'self':"您",
        'view_details':"查看详情",
    },
    sendMessage:{
        'sendMessage_title':"发送信息",
        'receiver':"接收者",
        'receiver_publickey':"接收者公钥",
        'infomation':"信息",
        'encrypted_information':"加密信息",
        'message_tip':"请输入信息内容",
        'file':"文件",
        'file_tip':"请选择文件",
        'browse':"浏览",
        'delete':"删除",
        'fee':"手续费",
        'calculate':"计算",
        'secret_key':"秘钥",
        'send_message':"发送信息",
    },
    transfer:{
        'transfer_title':"转账",
        'receiver':"接收者",
        'receiver_public_key':"接收者公钥",
        'amount':"数额",
        'fee':"手续费",
        'calculate':"计算",
        'enable_add_info':"添加一条信息",
        'encrypted_information':"加密信息",
        'message_tip':"请输入信息内容",
        'secret_key':"秘钥",
        'transfer_send':"发送",
    },
    account_info:{
        'account_information':"账户详情",
        'account_address':"账户地址:",
        'account_name':"账户名：",
        'account_name_not_set':"未设置",
        'account_set_name':"确认",
        'account_balance':"账户余额：",
        'account_available_balance':"可用余额：",
        'account_mining_balance':"挖矿余额：",
        'public_key':"公钥",
    },
    header:{
        'version':"版本：",
        'account':"账户",
        'network':"网络",
        'mining':"矿池",
        'observation_mode':"观察模式",
        'secret_mode':"秘钥模式",
        'forging_error_new_account':"您不能挖矿，因为您的帐户还没有公钥。请完成一次交易或则使用密钥重新登录。",
        'forging_error_effective_balance':"您的有效余额不足，不能挖矿。需要满足:有效余额经过10个区块确认并且至少达到1000SS。",
        'forging_error_no_admin_password':"无法确定挖矿状态，请指定管理员密码",
        'forging_error_exceeds_account_volume':"不能拥有多个账户在同一节点挖矿,请使用关联账户重新登陆",
        'no_forging':"未挖矿",
        'started_forging':"已启动",
        'exit':"退出",
        'start_forging':"开启挖矿",
        'admin_password':"管理密码",
        'starting_forging':"开启",
        'search':"搜索",
        'search_open':"输入账户ID/交易ID/区块ID进行搜索",
        'open_console':"打开控制台。日志记录开始......",
    },
    network:{
        'network_title':"网络总览",
        'block_height':"区块高度",
        'block_newest_time':"生成时间：",
        'block_avg_transaction_volume':"区块平均交易量",
        'block_peers_volume':"节点数量",
        'miner_info':"旷工信息",
        'miner_volume':"旷工数量",
        'total_trading_volume':"总交易量",
        'transfer_transaction':"转账交易",
        'coinbase_transaction':"CoinBase交易",
        'store_transaction':"存储交易",
        'alias_modification':"别名修改",
        'peers_info':"节点信息",
        'peers_detail':"节点详情",
        'block_list':"区块列表",
        'block_list_height':"高度",
        'block_list_time':"出块时间",
        'block_list_amount':"金额",
        'block_list_fee':"手续费",
        'block_list_transaction':"交易数",
        'block_list_generator':"出块者",
        'block_list_operating':"操作",
        'view_details':"查看详情",
    },
    peers:{
        'return_network':"返回网络",
        'total_peers':"节点数量",
        'active_hub':"HUB运行数",
        'active_peers':"活跃节点数",
        'peer_list':"节点列表",
        'peer_address':"节点地址",
        'download':"已下载",
        'upload':"已上传",
        'application':"应用程序",
        'platform':"平台",
        'server':"服务",
        'operating':"操作",
        'link':"连接",
        'blacklist':"黑名单",
        'join_blacklist':"加入黑名单",
        'join_blacklist_tip1':"是否将节点\"",
        'join_blacklist_tip2':"\"添加到黑名单？",
        'admin_password':"管理密码",
        'join':"添加",
        'link_peer':"连接节点",
        'peer_name':"节点名称：",
        'peer':"节点：",
        'communication_port':"通讯端口",
        'version':"版本",
        'latest_update':"最后更新",
        'status':"状态",
        'shared_address':"共享地址",
        'published_address':"公布的地址",
    },
    password_modal:{
        'title':"输入管理员密码",
        'admin_password':"管理密码",
        'open':"开启",
        'secret_password':"输入私钥",
        'input_tip':"请输入私钥：",
    },
    dialog:{
        'account_info_title1':"账户：",
        'account_info_title2':" 信息",
        'account_info_name':"账户命名：",
        'account_info_available_asset':"可用资金：",
        'account_info_alias':"别名：",
        'account_info_total_transaction':"所有交易",
        'account_info_transaction_time':"交易时间",
        'account_info_transaction_type':"交易类型",
        'account_info_amount':"数量",
        'account_info_fee':"手续费",
        'account_info_account':"账户",
        'account_info_operating':"操作",
        'account_info_payment':"普通支付",
        'account_info_information':"任意信息",
        'account_info_account_info':"账户信息",
        'account_info_data_storage':"数据存储",
        'account_info_view_detail':"查看详情",

        'account_transaction_detail':"交易详情",
        'account_transaction_return':"返回账户信息",
        'account_transaction_signature':"签名",
        'account_transaction_transaction_serial_number':"交易序列号",
        'account_transaction_type':"类型",
        'account_transaction_signatureHash':"哈希签名",
        'account_transaction_sender':"发送者",
        'account_transaction_amount':"数额",
        'account_transaction_recipient':"接收者",
        'account_transaction_own':"您",
        'account_transaction_block_timestamp':"区块时间戳",
        'account_transaction_timestamp':"时间戳",
        'account_transaction_sender_public_key':"发送者公钥",
        'account_transaction_confirm':"确认",
        'account_transaction_fullHash':"类型完整哈希：",
        'account_transaction_version':"版本：",
        'account_transaction_block_height':"区块高度",

        'block_info_title1':"区块：",
        'block_info_title2':" 信息",
        'block_info_all_transaction':"所有交易",
        'block_info_all_block_detail':"区块详情",
        'block_info_time':"时间",
        'block_info_type':"类型",
        'block_info_amount':"数量",
        'block_info_previous_block_hash':"上一个区块哈希",
        'block_info_payload_length':"载荷长度",
        'block_info_total_amount':"总数",
        'block_info_generation_signature':"矿工签名",
        'block_info_generation_public_key':"矿工公钥",
        'block_info_transcation_amount':"交易数量",
        'block_info_block_signature':"区块签名",
        'block_info_total_fee':"总手续费",
        'block_info_cumulative_difficulty':"挖矿难度",
        'block_info_mining':"矿工",
        'block_info_previous_block':"上一个区块",
        'block_info_next_block':"下一个区块",

    },
    notification:{
        'update_success':"更新成功",
        'restart_success':"请稍后再次打开页面",
        'hubsetting_no_sharder_account':"请输入Sharder账号获取HUB配置信息",
        'hubsetting_sharder_account_no_permission':"请联系管理员获取Hub设置",
        'hubsetting_account_address_error_format':"关联SS地址格式错误！",
        'hubsetting_no_mnemonic_word':"开启矿池必须填写助记词！",
        'hubsetting_inconsistent_password':"密码不一致！",
        'new_account_warning':"您有一个全新的帐户，请先给它充值。",
        'null_information_warning':"请检查是否还有未填的信息",
        'sendmessage_null_account':"请输入接收者账户ID",
        'sendmessage_account_error_format':"接收者账户格式错误",
        'sendmessage_null_account_public':"请输入接收者账户公钥",
        'sendmessage_null_secret_key':"必须输入您的秘钥来加密此信息",
        'transfer_amount_error':"请正确输入您要转账的值",
        'transfer_balance_insufficient':"您的余额不足",
        'transfer_null_secret_key':"必须输入密钥。",
        'transfer_null_public_key':"请输入接收者公钥。",
        'sendmessage_success':"您的消息已发送",
        'transfer_success':"SS 已发送",
        'clipboard_success':"已复制到剪切板",
        'modify_success':"修改成功",
        'clipboard_error':"复制失败",
        'file_exceeds_max_limit':"文件最大支持5M",
        'account_is_self':"这是您的账户",
        'unknown_account':"接收者帐户是未知帐户，意味着它没有转入或转出的交易记录。您可以通过提供接收者的公钥来增加安全性。",
        'search_no_null_error':"搜索框不能为空",
        'join_blacklist_success1':"已将'",
        'join_blacklist_success2':"'加入黑名单",
        'join_blacklist_error':"'加入黑名单失败",
        'join_link_peer_success1':"已与'",
        'join_link_peer_success2':"'连接成功",
        'join_link_peer_error':"连接失败",
        'API_service':"API服务",
        'core_service':"核心服务",
        'business_API':"商业API",
        'Storage_service':"存储服务",
        'search_null_info_error':"未找到任何信息，请再次查询。",
        'login_no_input_error':"请输入账号或私钥",
    },
    enter:{
        'enter_tip':"您的密钥非常重要！为确保您已保存它, 请填写上一步生生成的密钥：",
        'enter_cancel':"取消",
        'enter_client':"进入客户端",
    },
    ...zhLocale
};

export default cn;
