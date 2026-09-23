/* =========================================================================
 * 场景数据源（由 add_scenario.py / build_data.py / apply_records.py 自动生成）
 * ========================================================================= */

const SCENARIOS = [
  {
    "name": "美客多 AI 运营 20个Skill",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "美客多"
    ],
    "platforms": [
      "美客多"
    ],
    "overview": "通过美客多_跨境AI工作台，实现SKILL+RPA+AI的运行",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/DXK9dOXEboUTi2xf1eKcTEbPn6e"
  },
  {
    "name": "1688商品首图一键生成跨境套图，AI工作流提升P图效率90%",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "套图",
      "1688"
    ],
    "platforms": [
      "1688"
    ],
    "overview": "影刀RPA结合AI工作流，可以自动从1688等平台批量获取商品图片和基础信息，然后通过AI自动生成符合亚马逊等跨境平台规范的9张套图，包括白底主图、场景使用图、卖点展示图、细节特写图、对比图、教程图、清洁维护图、材质安全图和包装展示图。",
    "value": [],
    "steps": [
      "获取1688商品信息",
      "AI生成英文文案",
      "生成统一设计稿",
      "批量制作9张不同类型产品图",
      "自动输出完整套图"
    ],
    "link": "https://ying-dao.feishu.cn/docx/DMnYdTj0iokjB7xTtdKcOsiynKb"
  },
  {
    "name": "1688自动比价询价，高效筛选优质供应商",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "采购",
      "供应商",
      "1688"
    ],
    "platforms": [
      "1688"
    ],
    "overview": "影刀RPA机器人能够模拟采购员在1688平台进行商品搜索、筛选和询价的全过程，实现采购流程的自动化、智能化。",
    "value": [],
    "steps": [
      "自动读取采购需求：机器人自动读取Excel或指定文件夹中的商品图片/关键词列表。",
      "智能搜索与排序：自动打开1688平台，通过以图搜图或关键词搜索商品，并按价格升序排序。",
      "精准筛选供应商：根据预设规则（如优先选择牛头商家、成立年限、历史销量等），自动从搜索结果中筛选出前20个不重复的优质商家。",
      "批量发送询价：自动打开与筛选出商家的沟通窗口，根据预设的话术模板，将包含指定商品数量等信息的询价消息批量发送出去，启动价格谈判。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/TgLQdGLHmoTi4rxutChcrxcUnAg"
  },
  {
    "name": "1688采购跟单与ERP入库自动化，实现全链路无人值守高效补货",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "物流",
      "采购",
      "1688",
      "ERP"
    ],
    "platforms": [
      "1688",
      "ERP"
    ],
    "overview": "影刀RPA可以代替人工自动登录1688等采购平台，实时监控订单发货状态，一旦监测到发货，自动提取物流信息及商品详情，并登录ERP系统自动创建采购到货单，实现全流程闭环。",
    "value": [
      "全链路自动化：实现从发货监控到ERP入库的无人值守，不受订单量波动影响，始终保持高效处理。"
    ],
    "steps": [
      "读取采购订单列表",
      "循环登录1688/淘宝平台",
      "抓取订单发货状态",
      "提取物流及商品明细",
      "登录ERP系统",
      "自动填写信息创建到货单",
      "结果通知/异常预警"
    ],
    "link": "https://ying-dao.feishu.cn/docx/QXvpdczwEofBa3xBPu4cyPqUnmd"
  },
  {
    "name": "询盘系统搭建_AI做对话",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商"
    ],
    "platforms": [],
    "overview": "面向「跨境电商」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "- 核心询盘：原始字段",
      "3 轮递进式提问（每轮问题基于前序数据生成）",
      "客服回复采集",
      "AI 校验核心信息；",
      "- 并行监控：同步记录提问 / 回复时间",
      "比对间隔",
      "更新流程状态。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/ImaCdujDLo5ehgx0LYdcASbCnAh"
  },
  {
    "name": "标题采集&AI改写标题_小系统_（适用于美客多/TEMU）",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "TEMU",
      "美客多"
    ],
    "platforms": [
      "TEMU",
      "美客多"
    ],
    "overview": "面向「跨境电商」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/B6IQdPKQ0ooaHKx6KS6cqCEfnyb"
  },
  {
    "name": "AI生图（批量版）1688 商品首图一键生成跨境套图_对外",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "图片生成",
      "生图",
      "套图",
      "1688"
    ],
    "platforms": [
      "1688"
    ],
    "overview": "图片生成 10分钟搞定电商全套商品图自动生成",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Gw6xdjNdZosJG7xJlSvcYK0RnTg"
  },
  {
    "name": "AI生图（图片批量优化）_跨境精铺",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "生图"
    ],
    "platforms": [],
    "overview": "面向「跨境电商」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/WN2admjdMozCIRxWJzzcwnPXn7d"
  },
  {
    "name": "TEMU店铺退件自动登记，100+店铺数据处理效率提升",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "TEMU"
    ],
    "platforms": [
      "TEMU"
    ],
    "overview": "影刀RPA可以代替人工自动执行TEMU平台退货数据的采集、登记和库存调度全流程操作。系统根据预设的时间规则，自动登录各个TEMU店铺后台，批量采集退货明细数据，并自动录入到指定仓库系统中，同时联动马帮ERP完成库存调度，确保数据的实时性…",
    "value": [
      "实现100+店铺退货数据的自动化采集和处理"
    ],
    "steps": [
      "定时触发",
      "批量登录TEMU店铺后台",
      "采集退货明细数据",
      "数据清洗整理",
      "自动录入仓库系统",
      "联动马帮ERP调度库存",
      "生成汇总报告"
    ],
    "link": "https://ying-dao.feishu.cn/docx/VB0jdTbLGo64JdxP7ekcNJh4nAd"
  },
  {
    "name": "Temu调价自动拒绝，守护利润底线实现7x24小时智能风控",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替人工自动执行调价处理的完整流程：定时登录Temu后台，自动抓取调价商品列表，连接ERP系统获取成本数据进行比对，按照预设的商业规则（如售价≥成本+预设利润率）自动判断接受或拒绝调价，并实时记录处理日志生成报告。系统还可…",
    "value": [],
    "steps": [
      "定时启动",
      "登录Temu后台",
      "抓取调价通知列表",
      "连接ERP获取成本数据",
      "多维度规则判断",
      "自动接受/拒绝调价",
      "记录日志生成报告"
    ],
    "link": "https://ying-dao.feishu.cn/docx/L4CddJIrAoDa1RxslW7czDNan6f"
  },
  {
    "name": "TikTok 800家店铺订单数据自动获取，释放90%以上人力成本",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替人工自动执行TikTok店铺数据获取流程，通过AdsPower指纹浏览器批量登录各店铺后台，自动导出订单数据、结算数据和GMV数据，并处理登录状态失效、代理失败、页面加载超时等异常情况。",
    "value": [],
    "steps": [
      "获取店铺列表",
      "批量启动AdsPower浏览器",
      "自动登录店铺后台",
      "导出订单数据",
      "导出结算数据",
      "获取GMV数据",
      "异常处理重试",
      "数据汇总归档"
    ],
    "link": "https://ying-dao.feishu.cn/docx/CLpKd1Y2Fo0vyqxMXPMcRBj5nbb"
  },
  {
    "name": "TikTok跨境电商全链路自动化，释放1名运营人员，日订单量稳定数千单",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替人工自动执行TikTok平台的全链路运营操作，包括秒杀活动管理、订单自动回传、退货登记及库存调拨、分销订单拦截、分销协作表维护、海外仓发货等核心业务环节，实现TikTok跨境电商运营的全流程自动化。",
    "value": [],
    "steps": [
      "秒杀活动监控",
      "订单自动回传",
      "库存实时调拨",
      "分销订单智能拦截",
      "协作表自动更新",
      "海外仓发货自动化"
    ],
    "link": "https://ying-dao.feishu.cn/docx/EYgMdjV8LokJugxkIJXckA1fn2e"
  },
  {
    "name": "Tk达人-AI决策_4个应用",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "视频"
    ],
    "platforms": [],
    "overview": "一句话：从海量 TikTok 达人的发现入库，到每日数据监控，到视频内容 AI 分析，再到可视化决策看板——四个环节全自动化，人力成本打一折，决策效率翻十倍。",
    "value": [],
    "steps": [
      "达人发现 — 关键词搜索，自动入库"
    ],
    "link": "https://ying-dao.feishu.cn/docx/DjH9d00ZWoV4SqxEWC6c21ainrg"
  },
  {
    "name": "【跨境】【核心观点&分享PPT】2025影刀AI自动化峰会·深圳",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商"
    ],
    "platforms": [],
    "overview": "本次峰会围绕“AI自动化重构跨境出海效率”展开，400+跨境卖家参与，核心聚焦四大维度：",
    "value": [],
    "steps": [
      "工具价值：RPA+AI从“替代人工”到“释放人效”，回归“让工具成为工具，让你成为你”的本质；",
      "落地路径：从0到1搭建自动化体系的方法论（SOP标准化、场景优先级、组织协同）；",
      "组织赋能：通过人才密度、氛围营造、机制保障，让自动化从“项目化”走向“生态化”；"
    ],
    "link": "https://ying-dao.feishu.cn/docx/QqfcdVgjMoFrflxnzZackPMEnwc"
  },
  {
    "name": "亚马逊100+店铺绩效巡店自动化，实现24小时无人值守风险管控",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA可以代替人工自动执行亚马逊店铺绩效巡检工作。机器人每天定时启动，自动循环登录紫鸟浏览器进入各个店铺后台，对后台所有板块进行逐一点击查询，记录各项状态指标，检查是否存在24小时待回复消息等风险项，并将巡检结果自动整理归档。",
    "value": [],
    "steps": [
      "定时启动",
      "循环登录紫鸟浏览器",
      "进入店铺后台",
      "逐一点击各板块",
      "查询记录状态",
      "检查待回复消息",
      "风险预警",
      "结果归档"
    ],
    "link": "https://ying-dao.feishu.cn/docx/S47EdOQN0oL2XUxdKMZc3kNCnTh"
  },
  {
    "name": "亚马逊卖点分析自动化：1小时处理2000+商品，构建精细化运营标签体系",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "数据提取",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA结合AI大模型能力，可代替人工自动完成从数据提取、分析到标签化的全过程，为海量商品构建结构化的标签体系。",
    "value": [],
    "steps": [
      "获取商品数据表格",
      "循环读取每行商品信息",
      "调用AI分析并提取通用属性",
      "将属性数据结构化",
      "再次调用AI归纳总结所有属性",
      "自动回填标签到表格"
    ],
    "link": "https://ying-dao.feishu.cn/docx/AQjndB1WnoVnQNxEFQlcEv52nQu"
  },
  {
    "name": "亚马逊商品_卖点分析&ai标签_对外",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "面向「跨境电商」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/JHbRdhBpmog8Lgx2Nx4cfjvsnHc"
  },
  {
    "name": "亚马逊多店铺账户异常自动巡检，60+店铺7×24小时无人值守监控",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "识别",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA结合紫鸟浏览器可以自动执行登录亚马逊店铺、访问店铺主页、检测异常弹窗、智能识别账户状态、记录异常信息并通知相关负责人的全流程操作。系统支持飞书、企业微信、钉钉三种主流办公平台的消息通知，实现7×24小时无人值守监控。",
    "value": [],
    "steps": [
      "读取店铺配置",
      "循环登录各店铺",
      "访问店铺主页",
      "自动识别异常状态",
      "记录异常信息",
      "智能通知相关负责人",
      "生成巡检报告"
    ],
    "link": "https://ying-dao.feishu.cn/docx/G7dnduzFhoEIw6xw6fjcbq5WnLe"
  },
  {
    "name": "亚马逊爆款视频文案自动复刻，实现跨境电商内容策略快速迭代",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "文案",
      "视频",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA可以自动化处理亚马逊爆款视频的获取和分析流程，结合AI工作流实现文案的智能复刻和优化。",
    "value": [],
    "steps": [
      "访问bestseller页面",
      "解析视频链接",
      "格式转换下载",
      "AI视频分析",
      "文案提取优化",
      "生成新文案"
    ],
    "link": "https://ying-dao.feishu.cn/docx/U3kJdffmsobKSrx7Hqmchvgrndb"
  },
  {
    "name": "亚马逊竞品BSR排名自动抓取，每日节省1-2小时数据采集时间",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "竞品",
      "识别",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA可以代替人工自动执行竞品BSR排名的采集和整理工作。系统每日自动打开Excel文件读取竞品链接列表，循环访问每个竞品页面，智能定位BSR排名位置并提取大小类目排名数据，自动识别和提取文本中的数字信息（包括整数、小数及带千分符的…",
    "value": [],
    "steps": [
      "读取竞品链接列表",
      "循环打开竞品页面",
      "定位BSR排名元素",
      "智能提取排名数字",
      "数据回写Excel",
      "生成汇总报告"
    ],
    "link": "https://ying-dao.feishu.cn/docx/RMg9dqHVPoYeHUxnoAQcnMRznue"
  },
  {
    "name": "亚马逊自动批量邀评，提升效率80%以上",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA可以代替人工自动执行亚马逊邀评的完整流程：自动导入拟邀评名单，通过ASIN匹配每个邀评客户信息，按照邀评名单逐个进行邀评操作，确保每个符合条件的订单都能及时收到邀评邀请。",
    "value": [
      "通过影刀RPA实现自动批量邀评，大幅减少人工操作"
    ],
    "steps": [
      "导入邀评名单",
      "ASIN匹配客户信息",
      "自动登录亚马逊后台",
      "逐个发送邀评邀请",
      "记录邀评状态"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Ut9BdYEgYolYmixfWkFcZPTan6c"
  },
  {
    "name": "亚马逊选品新思路：自动化采集BSR全量类目树，高效锁定蓝海赛道",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "选品",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA可以模拟人工浏览和点击网页的操作，通过“递归”的逻辑，智能地、完整地采集亚马逊BSR所有层级的类目及其链接，为后续的商品信息采集和分析提供全面的数据基础。",
    "value": [],
    "steps": [
      "启动与初始化：打开亚马逊Bestseller首页，准备一个用于记录已采集类目的列表。",
      "递归采集：自动遍历首页的所有父类目，点击进入，并记录类目名称与链接。",
      "智能判断：如果当前类目下存在子类目，机器人会自动进入子类目页面，并重复第2步的操作（即调用自身流程），直到抵达最末端的“叶子类目”。",
      "循环执行：当一个分支的类目采集完毕后，机器人会自动返回上一层，继续采集其他未访问的类目，直至所有类目采集完毕。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/JIrsdfrKPotLj8xPJrNcf4AenZd"
  },
  {
    "name": "小众平台商品刊登自动化，轻松解决无ERP支持的上架难题",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "上架",
      "刊登",
      "ERP"
    ],
    "platforms": [
      "ERP"
    ],
    "overview": "影刀RPA机器人能够模拟人工操作，自动完成在各类小众电商平台上的商品刊登流程。机器人会根据预先配置好的Excel商品信息表，自动登录平台后台，并精准地将商品编号、描述、分类、关键词、颜色、价格等数十个字段信息，一一填写或勾选到对应的位置…",
    "value": [
      "效率倍增：影刀RPA机器人7x24小时自动执行，上架速度提升数倍，将运营人员从重复劳动中解放出来。"
    ],
    "steps": [
      "读取Excel商品信息",
      "自动登录平台后台",
      "循环读取单个商品数据",
      "自动填写/勾选各字段信息",
      "自动上传图片",
      "判断并处理复杂属性",
      "提交商品并返回上架结果"
    ],
    "link": "https://ying-dao.feishu.cn/docx/JkqrdUwnYoCrU2xZ16XcjVLznHc"
  },
  {
    "name": "怡怡家居：告别人工核单、熬夜盯评论，用AI自动化打赢跨境电商效率战",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "评论分析",
      "财务"
    ],
    "platforms": [],
    "overview": "深圳市怡怡家居科技有限公司作为专注全球市场的一站式家居贸易商，在业务高速增长中面临运营细节管控、跨境报关合规、用户评论分析等多重效率挑战。通过与影刀RPA合作，怡怡家居在亚马逊运营、财务关务及数据管理三大核心领域实现了自动化突破，将员工…",
    "value": [],
    "steps": [
      "月均12天",
      "4小时"
    ],
    "link": "https://ying-dao.feishu.cn/docx/DQrzdRayvo53fqxZL8sclNrUnQh"
  },
  {
    "name": "海外库存库龄跟踪自动化",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "物流"
    ],
    "platforms": [],
    "overview": "某智能家居跨境客户利用影刀RPA，实现库存、库龄以及销售跟踪等多个物流管理流程中的自动化，10000条数据的采集筛选零人工，跨境库存管理效率提升80%。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/E14odaOe1oMKIyxgz8ycfIKDnCc"
  },
  {
    "name": "跨境电商PS详情页多语言自动替换，每月节省设计师2人天",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "翻译"
    ],
    "platforms": [],
    "overview": "- 基于固定模板的多语言批量替换：对于有固定模板的产品图，只需维护一套PSD模板+Excel表，影刀RPA机器人即可调用 AI 自动完成多国语言的翻译，然后自动操作Photoshop，将Excel中的多国语言内容批量替换进去，并自动导出…",
    "value": [
      "效率飙升：通过极简的RPA指令（仅需约28行代码）实现全自动替换，每月为每位设计师节省2个人天。"
    ],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/A5mTdbei1oTvv8xHYyocKLA9nxu"
  },
  {
    "name": "跨境电商商品信息自动采集上架，实现数倍效率提升",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "上架"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI能力，可以自动执行完整的商品信息采集和上架流程：",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Lo3FdoP9ooH6ztxGAdhcOHx3nzd"
  },
  {
    "name": "跨境电商选品自动化：实现亚马逊新品数据采集效率提升10倍",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "选品",
      "亚马逊"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "影刀RPA机器人能够模拟运营人员进行一系列的选品操作，将从数据采集、数据处理到专利查询的全流程自动化，实现7x24小时无人值守执行，极大地提升了选品工作的效率和覆盖面。",
    "value": [],
    "steps": [
      "自动采集新品数据：机器人自动登录亚马逊，根据预设的类目清单，逐层进入各级新品榜单，并利用卖家精灵插件一键导出多达百款商品的详细数据。",
      "智能清洗与处理：机器人会自动对下载的Excel数据进行深度处理，包括但不限于：根据评分数、留评率等关键指标筛选商品；调用翻译API将外文信息转为中文；自动添加自定义列、填充计算公式（如预估ACOS），完成数据标准化。",
      "获取类目清单",
      "循环打开亚马逊新品榜",
      "采集二级类目链接",
      "循环利用卖家精灵导出商品数据",
      "自动清洗和处理Excel表格",
      "批量下载主图",
      "自动登录专利网站并以图搜图",
      "结果截图并回填表格"
    ],
    "link": "https://ying-dao.feishu.cn/docx/VU59d3jJ5oTZOAx0GTecBUW8nwg"
  },
  {
    "name": "跨境电商选品评论分析自动化，每月效率提升12倍",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "评论分析",
      "选品",
      "翻译"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI能力，可实现从评论数据采集、翻译、分析到报告生成的全流程自动化，为选品决策提供高效、精准的数据洞察。",
    "value": [],
    "steps": [
      "获取类目链接",
      "循环打开商品页面",
      "自动下载商品评论",
      "AI翻译并提取关键词",
      "AI进行词频分类与统计",
      "自动生成分析报告"
    ],
    "link": "https://ying-dao.feishu.cn/docx/SN0rd6BZsoYTOpxylAUcEm5DnFc"
  },
  {
    "name": "跨境财务AI工作台&Skill",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "财务",
      "税务",
      "广告",
      "识别"
    ],
    "platforms": [],
    "overview": "该能力包可用于跨境财务分析、SKU 利润诊断、广告后利润判断、库存现金流分析、费用异常识别、税务资料整理和经营决策辅助。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/OabPdIKJ2ojpYix6UjscyZObn2g"
  },
  {
    "name": "跨境选品解决方案",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "选品"
    ],
    "platforms": [],
    "overview": "欢迎前往影刀RPA官网了解更多行业案例",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/AoF7d2gJYocLIAxzaWNc8uejnmb"
  },
  {
    "name": "跨境：国际物流面单自动化导出",
    "type": "RPA",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "物流"
    ],
    "platforms": [],
    "overview": "在国际物流业务中，面单处理是连接货物发运与后续跟踪的关键环节。随着跨境电商和国际贸易的快速发展，物流企业每日需要处理大量的快递面单，这些面单不仅承载着货物的基本信息，还需要与子单追踪号、业务员信息等多维度数据进行关联，形成完整的物流管理…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/J6UrdgdzZoT8fUxL6VUciK8mnGg"
  },
  {
    "name": "ai定制方案_国内电商知识库（对内）",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "培训",
      "知识库"
    ],
    "platforms": [],
    "overview": "通过影刀2期给【大型消费电子企业】定制的线下培训+实操（RPA+AI），",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/UonIdTnnYoAjLExabG6cEaN9npf"
  },
  {
    "name": "1 电商部门_用ai总结《多平台经营周报_底表字段》",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "报表"
    ],
    "platforms": [],
    "overview": "请你作为一名精通电商数据与商业智能（BI）的分析专家。我将提供多个电商平台（如淘宝、京东、拼多多、抖音等）的后台经营周报表格（描述或示例）。请你为我设计一份方案，将这些异构数据整合为一份统一的、可用于可视化分析的BI底表。",
    "value": [],
    "steps": [
      "逻辑：多个电商平台的经营周报f件+提示词",
      "发给AI",
      "得到总表字段+映射关系+字段格式转换说明"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Y8sYdVpuxo8fd2xq2ovcqg0JnVc"
  },
  {
    "name": "国内电商_让IT学会AI设计数据（对外）",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "报表"
    ],
    "platforms": [],
    "overview": "请你作为一名精通电商数据与商业智能（BI）的分析专家。我将提供多个电商平台（如淘宝、京东、拼多多、抖音等）的后台经营周报表格（描述或示例）。请你为我设计一份方案，将这些异构数据整合为一份统一的、可用于可视化分析的BI底表。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/FFPFdGxsMoM71Hx07GIcmhPInff"
  },
  {
    "name": "AI自动化产品图片精修，单张处理仅需3分钟，人力成本降低80%",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "绘图"
    ],
    "platforms": [],
    "overview": "影刀RPA结合先进的AI绘图模型（如Flux-dev），可以代替人工自动执行图片上传、AI参数配置及精修结果下载的全流程。RPA机器人自动获取待处理的低分辨率或原始产品图，调用云端AI算力平台进行高清修复、光影优化和细节还原，最后将处理…",
    "value": [],
    "steps": [
      "获取待处理图片",
      "RPA自动上传至AI云平台",
      "配置AI模型参数(Flux/UltraSharp)",
      "触发AI精修任务",
      "循环等待任务完成",
      "自动下载并归档精修图"
    ],
    "link": "https://ying-dao.feishu.cn/docx/XPLcdY3EfoyHdAxFL75c5AhvnOf"
  },
  {
    "name": "AI自动化批量绘图与修图，实现电商设计效率指数级提升",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "生产",
      "营销",
      "修图",
      "绘图"
    ],
    "platforms": [],
    "overview": "在“降本增效”的市场大环境下，视觉内容的生产效率直接影响电商及内容行业的转化率。企业需要大量的营销图片，包括产品场景图、白底图、模特试穿图等。传统拍摄和修图方式不仅周期长，而且场地租赁、模特聘请及后期制作成本高昂。随着AI技术的发展，企…",
    "value": [],
    "steps": [
      "批量文生场景图：根据商品特性自动生成提示词，批量生成户外、室内等高质量场景图，提供设计灵感或直接用于营销。",
      "自动产品图精修：自动识别产品主体，批量去除背景、修复畸变、调整光影，快速生成标准的白底产品图。",
      "智能印花/背景替换：基于“图生图”技术，将新的花型图案无缝替换到模特衣服上（保留褶皱光影），或将产品自动融入新背景中，无需重复拍摄。",
      "风格化重绘（洗图）：保持产品细节不变，自动更换模特相貌、姿态或图片风格，规避版权风险并快速裂变素材。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/PTiydoWClo0yTWxSOl0c4lSlnYZ"
  },
  {
    "name": "AI自动批量消除图片杂物，处理效率提升3倍助力电商测品",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "直播"
    ],
    "platforms": [],
    "overview": "面向「国内电商/直播」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [
      "通过影刀RPA+AI工作流，实现了图片处理的全自动化。"
    ],
    "steps": [
      "获取图片列表",
      "自动上传至AI云平台",
      "发送消除指令(Prompt)",
      "等待AI重绘修复",
      "自动下载结果图",
      "归档/上传ERP"
    ],
    "link": "https://ying-dao.feishu.cn/docx/ZCJ8d2mJEoHT6Dxgk6mcS9fanNb"
  },
  {
    "name": "MCN抖音养号自动化，4倍效率提升舆情监控能力",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "舆情",
      "抖音"
    ],
    "platforms": [
      "抖音"
    ],
    "overview": "影刀RPA可以代替人工自动执行抖音养号的完整流程，通过被动浏览和主动搜索两种方式模拟真实用户行为：",
    "value": [],
    "steps": [
      "启动应用",
      "选择养号模式（被动浏览/主动搜索）",
      "自动浏览/搜索内容",
      "智能识别匹配内容",
      "模拟用户行为（观看、点赞、收藏）",
      "循环执行"
    ],
    "link": "https://ying-dao.feishu.cn/docx/T5qpdYkBropxUEx0wt2cUznAnAW"
  },
  {
    "name": "RPA+AI智能客服，实现千牛全托管自动回复，3分钟人工响应率提升至98%",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "客服",
      "智能客服"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI应用，可以自动登录千牛商家后台，循环读取对话列表和聊天记录，智能判断是否需要回复。系统能够基于上下文语境理解客户问题，调用AI应用进行智能回复，对于话术库中没有的问题或客户主动请求时自动转接人工客服。整个流程还包括系统…",
    "value": [],
    "steps": [
      "登录千牛后台",
      "循环读取对话列表",
      "获取聊天记录",
      "判断回复需求",
      "AI智能回复/转人工",
      "处理系统弹窗"
    ],
    "link": "https://ying-dao.feishu.cn/docx/OXVMdEGrKo00qGxPjhZc0bRpnt2"
  },
  {
    "name": "“仅退款”全面落地后的3个月，哪些电商商家扛住了风波呢？",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商"
    ],
    "platforms": [],
    "overview": "影刀作为电商领域数字化转型的重要推动者，一直为电商企业提供高效的数字化解决方案，在“仅退款”的政策全面落地的几个月以来，影刀的电商客户也遇到了诸多风险挑战，但在影刀RPA+AI的能力加持下都轻松化解。经过实践，我们整理出主流平台的仅退款…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Wxhbdo6kMoVJd2xuJ4ZcJ7yTnLb"
  },
  {
    "name": "东阳光：RPA+AI实现财务、研发、销售流程数字化重构，打造智能敏捷组织",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "财务",
      "数据库"
    ],
    "platforms": [],
    "overview": "作为中国民营企业500强，东阳光通过与影刀RPA合作，成功推动财务、研发、销售等核心部门的数字化转型，构建“人类决策+机器执行”的敏捷型组织。在财务领域，实现了银行回单自动下载解析与凭证匹配；在研发领域，解决了高价值数据库资源共享难题；…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Q13UdEzXMoNApLx1Ph1c96H3nfb"
  },
  {
    "name": "京东到家产品自动上架，批量维护即时零售渠道",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "零售",
      "上架",
      "京东"
    ],
    "platforms": [
      "京东"
    ],
    "overview": "影刀RPA可以代替人工自动执行京东到家平台的产品上架流程。系统能够自动登录京东秒送商家中心，根据预设的产品信息表格批量填写产品基本信息、销售信息和SKU详情，自动上传按编号命名的产品图片和详情页内容，完成产品上架后可循环处理下一个商品，…",
    "value": [],
    "steps": [
      "准备产品资料",
      "登录商家中心",
      "填写基本信息",
      "配置销售属性",
      "批量上传图片",
      "添加详情页",
      "完成上架",
      "循环下一商品"
    ],
    "link": "https://ying-dao.feishu.cn/docx/AHF9dRDRDoKURtxZIxBcERFanhh"
  },
  {
    "name": "京东电商日报自动取数，每日释放人力2小时",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "报表",
      "取数",
      "京东"
    ],
    "platforms": [
      "京东"
    ],
    "overview": "影刀RPA可以代替人工自动执行京东后台数据采集和处理工作。机器人每日定时登录京东商智、搜索快车等后台系统，自动提取真实销售额、供货价、产品成本、补单金额、各渠道推广费、入仓费用等全部资金进出数据，并自动集成到统一的日报表中。通过自动化的…",
    "value": [
      "全程无需人工干预，每日自动完成数据采集和处理"
    ],
    "steps": [
      "定时启动",
      "登录京东后台系统",
      "循环提取各项数据",
      "数据整合处理",
      "生成日报表",
      "自动归档"
    ],
    "link": "https://ying-dao.feishu.cn/docx/CBPNddwg8ofXdgxqQamcZj6ynac"
  },
  {
    "name": "京麦订单管理自动化，实现商品信息秒级抓取与归档",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商"
    ],
    "platforms": [],
    "overview": "影刀RPA机器人能够模拟人工登录京麦后台，并根据预设的商品标题或其他检索条件，自动执行一系列订单信息抓取任务。机器人可以代替人工自动执行以下操作：",
    "value": [],
    "steps": [
      "自动登录：机器人自动打开并登录京麦后台。",
      "定向检索：进入订单管理页面，根据Excel表格中提供的商品标题，自动输入并进行检索。",
      "获取待查商品列表",
      "自动登录京麦后台",
      "循环输入商品标题检索",
      "遍历订单列表",
      "抓取指定订单信息",
      "写入本地Excel表格",
      "完成并导出报表"
    ],
    "link": "https://ying-dao.feishu.cn/docx/IhTqdrSWyo2DyjxyfiMc0IqMncf"
  },
  {
    "name": "千牛自动化打通影刀RPA，实现电商订单全流程无人值守处理",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商"
    ],
    "platforms": [],
    "overview": "影刀RPA通过与千牛自动化板块的深度集成，可以自动监听千牛推送到群聊的各类业务消息，并根据消息内容自动触发相应的业务处理流程。",
    "value": [],
    "steps": [
      "邮件触发方式：利用千牛推送到邮箱的通知，通过影刀邮件触发功能自动启动业务流程",
      "接口查询方式：通过飞书群聊接口主动查询千牛推送的消息记录，实现自动化数据获取",
      "千牛业务状态变化",
      "自动推送消息到群聊/邮箱",
      "影刀RPA自动监听获取",
      "解析消息内容",
      "自动执行对应业务流程",
      "完成任务处理"
    ],
    "link": "https://ying-dao.feishu.cn/docx/VKv2d5EPvoBawBxidwfc0ADYnme"
  },
  {
    "name": "商品图片自动转线稿，效率提升5倍",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI大模型能力，可以自动连接云端算力平台（如RunningHub），代替人工执行图片上传、参数配置及结果下载的全流程。RPA机器人读取待处理的商品图片，自动调用配置好的AI工作流（Flux/CLIP模型），将图片转换为高质…",
    "value": [
      "影刀RPA自动执行，单张图片处理时间缩短至 1-2分钟，效率提升 500%。"
    ],
    "steps": [
      "读取商品图片",
      "自动上传至AI云平台",
      "调用线稿提取工作流",
      "等待AI生成",
      "自动下载并归档线稿图"
    ],
    "link": "https://ying-dao.feishu.cn/docx/BhIvdnSgqoqohixrhdvcFJFFn5c"
  },
  {
    "name": "妈妈的背包：母婴领域深耕者如何用RPA+AI实现全渠道智能运营",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "母婴",
      "内容生成",
      "发布"
    ],
    "platforms": [],
    "overview": "“将影刀RPA与AI大模型结合，我们实现了内容生成、编辑及发布一体式自动化功能，极大提升了运营效率。”",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/UX6Pdtbyyor2iXxlwxhcRtpBnNb"
  },
  {
    "name": "客服聊天记录自动化获取，多平台质检提效90%",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "客服",
      "质检",
      "报表"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替人工自动执行多平台客服聊天记录获取流程，包括创建标准化Excel表格、设置日期参数获取前一天数据、循环登录各平台客服后台、自动设置时间筛选条件、批量获取会话列表、逐个提取聊天内容并进行结构化整理、最终生成统一格式报表并…",
    "value": [],
    "steps": [
      "初始化参数（昨天日期）",
      "循环各平台",
      "打开平台客服后台",
      "设置时间筛选",
      "获取会话列表",
      "逐个提取聊天内容",
      "数据写入Excel",
      "数据汇总和报表生成",
      "发送结果到指定邮箱/群"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Ci5nd7cjso33u9xSzkec2M6gnLb"
  },
  {
    "name": "影刀+飞书｜采集抖音视频数据到多维表格：课程介绍+前期准备",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "视频",
      "抖音",
      "飞书"
    ],
    "platforms": [
      "抖音",
      "飞书"
    ],
    "overview": "影刀RPA是一款机器人流程自动化软件，能模拟人工进行鼠标点击、键盘输入、读取信息等操作，实现电脑和手机上各种软件的自动化，包括浏览器、Excel、微信、ERP或你日常使用的其他应用程序。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/LjhwdJESWohA9OxDmI1ctDWSnxg"
  },
  {
    "name": "影刀AI Power【电商】场景解决方案",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "公众号",
      "视频"
    ],
    "platforms": [],
    "overview": "欢迎关注影刀RPA公众号、视频号，更多精彩内容等着你",
    "value": [],
    "steps": [
      "影刀RPA：影刀RPA是一款自动化软件，能模拟人工进行鼠标点击、键盘输入、读取信息等操作，可以实现任何桌面软件、Web程序的自动化，包括ERP、浏览器、CRM、微信、钉钉或你日常使用的任何其他应用程序。旨在帮助人们将一切重复有规则地工作实现自动化。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/BWCpdEkpuoJGshxUcE9cQx3RnCg"
  },
  {
    "name": "快手小店巡店退款自动化，释放运营人员重复操作负担",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "售后",
      "识别",
      "快手"
    ],
    "platforms": [
      "快手"
    ],
    "overview": "影刀RPA可以代替人工自动执行快手小店的巡店退款全流程操作。系统会自动进入店铺列表页面，逐一访问每个店铺的售后工作台，识别\"退货待卖家收货后退款\"的订单，并根据预设条件（运输中状态且非异常状态）自动执行同意退货操作。整个过程无需人工干预…",
    "value": [
      "实现快手小店巡店退款的全自动化处理"
    ],
    "steps": [
      "进入店铺列表页面",
      "循环进入各店铺售后工作台",
      "识别退货待卖家收货后退款订单",
      "判断订单状态（运输中且非异常）",
      "自动同意退货操作",
      "处理下一个店铺"
    ],
    "link": "https://ying-dao.feishu.cn/docx/KVuydJjRco7kiTxRid2cqNhAnib"
  },
  {
    "name": "抖音直播伴侣自动化，解放主播双手提升直播效率",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "直播",
      "抖音"
    ],
    "platforms": [
      "抖音"
    ],
    "overview": "影刀RPA可以代替人工自动执行直播间的各项操作任务：自动监控商品库存状态，当商品售罄时自动添加新库存；根据预设规则自动设置秒杀活动的投放时间、库存数量、限购单数等参数；实时监控直播间评论，自动发送预设的快捷回复内容；根据主播讲解进度自动…",
    "value": [],
    "steps": [
      "监控直播状态",
      "检测商品库存",
      "自动添加库存/设置秒杀",
      "监控观众评论",
      "自动快捷回复",
      "根据讲解进度切换商品状态"
    ],
    "link": "https://ying-dao.feishu.cn/docx/SagkdFRn9oaTvWx5BPmc18GGnqd"
  },
  {
    "name": "服装/家居印花提取，实现单图处理仅需1-2分钟，效率提升5倍",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "绘图"
    ],
    "platforms": [],
    "overview": "影刀RPA结合先进的AI绘图能力（如Flux-Kontext模型），可代替人工自动执行印花提取的全流程。RPA机器人自动获取待处理的产品图片，上传至云端AI算力平台，通过定制的AI工作流自动消除布料褶皱、去除透视变形并提取纯净的印花图案…",
    "value": [],
    "steps": [
      "获取产品原图",
      "上传至AI算力平台",
      "调用AI工作流(去除褶皱/纹理重绘)",
      "等待任务完成",
      "下载并归档印花素材"
    ],
    "link": "https://ying-dao.feishu.cn/docx/J5WcdxoNVosfI7xnuEwcEhIHnZg"
  },
  {
    "name": "果麦文化：告别数据搬运工，5倍运营提效，出版业的AI员工已上线",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "出版",
      "财务",
      "营销"
    ],
    "platforms": [],
    "overview": "作为国内“互联网+出版”领军企业的果麦文化，通过与影刀RPA合作，成功在销售、营销、财务、研发及产品部全面实现自动化转型。面对日均处理上万SKU的电商运营挑战和海量新媒体数据处理需求，果麦文化借助影刀RPA不仅实现了5-8倍效率提升，还…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Aq0idVmo5oz2VTxWyQjcpd8Lnkc"
  },
  {
    "name": "班牛工单自动化处理，实现70%工单自动化率，效率超3人工作量",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "工单"
    ],
    "platforms": [],
    "overview": "影刀RPA可以与班牛工单系统深度集成，实现工单的全自动化处理。当业务人员在班牛创建工单时，系统自动触发影刀RPA执行相应的业务处理，并自动更新工单状态。",
    "value": [],
    "steps": [
      "业务人员创建工单",
      "班牛触发webhook通知",
      "飞书机器人接收消息",
      "影刀RPA自动处理业务",
      "自动更新工单状态",
      "必要时自动添加备注或买家留言"
    ],
    "link": "https://ying-dao.feishu.cn/docx/K9CPdMsuEo8K1Vxx5rPcb82En7c"
  },
  {
    "name": "电商主图AI自动换背景，缩短60%上架准备时间",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "直播",
      "上架"
    ],
    "platforms": [],
    "overview": "面向「国内电商/直播」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "读取产品原图",
      "RPA调用AI工作流",
      "生成深度图/扩展图片",
      "AI智能替换背景/光影融合",
      "循环生成多版本图片",
      "结果自动保存"
    ],
    "link": "https://ying-dao.feishu.cn/docx/EXncdWkDMoXAigxC1I8covDSnYe"
  },
  {
    "name": "电商图片查重自动化，AI精准识别重复率高达93.9%",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "识别"
    ],
    "platforms": [],
    "overview": "影刀RPA机器人能够模拟人工进行全流程的图片查重与侵权监控，结合AI大模型的精准识别能力，实现高效、准确的自动化图片比对。",
    "value": [],
    "steps": [
      "获取待查重图片",
      "自动提取图片参数/调用AI模型",
      "与图库/专利图进行比对",
      "判断相似度",
      "输出查重/侵权报告",
      "自动归档与预警"
    ],
    "link": "https://ying-dao.feishu.cn/docx/VTfzdssIJohWeex6FehcCLEcnpg"
  },
  {
    "name": "订单拆包物流通知",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "物流",
      "客服"
    ],
    "platforms": [],
    "overview": "“订单拆包物流通知是客服部门日常高频场景，尤其是在大促期间，面对激增的订单量，需要处理指数级增长的需求，单靠人力已经无法负荷。通过搭建RPA应用，机器人可完成自动拆包和通知，减少客诉和咨询，轻松让客服效率提升100%。”",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Q6UrdkATHorgJoxPGJecX9jAnhc"
  },
  {
    "name": "豆包验证码自动识别，月运行776次提升内容分析效率",
    "type": "RPA+AI",
    "industry": "电商",
    "tags": [
      "电商",
      "识别",
      "验证码"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI平台可以自动识别并处理豆包验证码弹窗。AI平台负责分析九宫格验证码图片，返回需要点击的位置编号（1-9），RPA接收到位置信息后自动循环点击对应区域，完成验证码验证，确保内容分析流程的连续性。",
    "value": [
      "通过AI+RPA组合实现验证码自动识别和处理"
    ],
    "steps": [
      "检测验证码弹窗",
      "AI识别九宫格内容",
      "返回点击位置[1-9]",
      "RPA循环点击对应位置",
      "验证通过继续分析"
    ],
    "link": "https://ying-dao.feishu.cn/docx/T6rCd8U5ooUnFYx6ny7cQbhPnSc"
  },
  {
    "name": "供应商AI评估：1688供应分析&实力打分",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "供应商",
      "营销",
      "1688"
    ],
    "platforms": [
      "1688"
    ],
    "overview": "面向「内容/营销」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "文本分析仅基于文字类输入信息（如工厂简介、产品文案、销量评价文本、参数说明等）完成打分；图片分析仅基于图片类输入信息（如产品图、详情页图、视频截图等）完成打分，两者互不混淆；"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Q4BgdD7eMoiOGGx6JF3c0Rwbnsg"
  },
  {
    "name": "2 采购部门_用ai总结《采购&多部门_字段匹配》",
    "type": "RPA",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "采购"
    ],
    "platforms": [],
    "overview": "请你作为一名资深的数据流程顾问与RPA方案设计师。我将提供多个来自采购业务环节的原始表格（描述或示例）。请你严格遵循以下框架进行分析，并输出一份可直接用于开发自动化流程（如影刀RPA）的解决方案。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Tv4KdCnUAoaAuQxtUZocZ04InQc"
  },
  {
    "name": "AI生图（设计师系统）_替换主体+小系统_对外",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "生图"
    ],
    "platforms": [],
    "overview": "- RPA实现：自动采集图片",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/P26qd6zljo2nSDxnuaFcLqrFnWg"
  },
  {
    "name": "AI评论分析_汇总_对外",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "评论分析",
      "营销"
    ],
    "platforms": [],
    "overview": "面向「内容/营销」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/RN7NdbioWo24UAxW1l6cBFGNnnh"
  },
  {
    "name": "医药｜AI自动化方案合集（持续更新｜0126）",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "医药"
    ],
    "platforms": [],
    "overview": "复用率最高自动化案例",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/OHvzd6I5HohUtQx5AK8cJ03gnDe"
  },
  {
    "name": "千人千面评价维护",
    "type": "RPA",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "评价"
    ],
    "platforms": [],
    "overview": "商家利用影刀RPA自动从店铺后台提取待回复订单，并且利用NLP初步对评论进行分类打标，清洗好的评论再交由GPT兜底分析并生成相应的回复。再由RPA机器人自动筛选并匹配相应的后台订单号，进行中差评的自动回复。",
    "value": [],
    "steps": [
      "促进销售增长和提供个性化推荐：正面评价可以提高产品的曝光度和销售转化率，同时通过分析客户的评价和反馈，运营可以提供更个性化的产品推荐。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Nf8XdRSj4oRLD8xZ2FGcpNRCnLh"
  },
  {
    "name": "叮咚买菜商品价格自动抓取，从2小时缩短至15分钟",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "识别"
    ],
    "platforms": [],
    "overview": "通过\"屏幕截图+AI提取信息\"的创新方式，结合Google Gemini-2.5-flash多模态大模型，能够准确识别和提取非结构化的商品信息，包括商品名称、亮点、售价、促销标签等关键数据，并直接生成标准化的Excel表格。",
    "value": [],
    "steps": [
      "影刀RPA结合AI工作流可以自动模拟人工操作流程，代替人工自动执行打开叮咚买菜APP",
      "输入搜索关键词",
      "循环浏览搜索结果页面",
      "屏幕截图",
      "AI提取商品信息（商品名称、价格、规格、促销活动等）",
      "自动写入Excel表格的完整流程。",
      "打开APP搜索",
      "循环截图商品页面",
      "AI提取商品信息",
      "数据写入Excel表格"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Xyv7dKM99oaZoGxJzpWceWELnPd"
  },
  {
    "name": "奥康AI全自动售后机器人",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "售后"
    ],
    "platforms": [],
    "overview": "作为国内知名鞋业品牌的奥康集团，通过与影刀RPA合作，打造了\"店小蜜+AI大模型+影刀RPA\"的黄金三角售后服务体系，实现从客户消息回复到具体订单处理的全流程自动化。这一创新解决方案显著提升了售后服务效率，大幅降低了人力成本和错误率，特…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/J6HZdn79moplMnxSjPCcWdj7nmb"
  },
  {
    "name": "竞品AI深度分析_对外3.0",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "竞品",
      "智能体"
    ],
    "platforms": [],
    "overview": "基于基于skill或智能体，上传数据，直接生成。",
    "value": [],
    "steps": [
      "根据产品主图AI自动进行风格化归类。",
      "自动抓取对应类目BS全部产品的评论-图片-价格-链接-核心卖点，并用飞书记录。",
      "根据类目竞品首图AI自动判断产品风格与受众。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/LF4JdfodJocadrxXe3fcU003n9g"
  },
  {
    "name": "黄金珠宝_AI生图_开箱即用 3.0 （智选定制）",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "珠宝",
      "营销",
      "生图"
    ],
    "platforms": [],
    "overview": "面向「内容/营销」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/BDrjdPCDuoIibmxSeTscN77ensg"
  },
  {
    "name": "👉【影刀AP】一句话，一分钟，AI生成数据报表",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "报表",
      "数据查询",
      "取数"
    ],
    "platforms": [],
    "overview": "业务部门想要什么数据，随时提出，当即就可拿到，无需漫长的排期等待，业务部门能够及时获取数据，及时进行分析，通过这样的方式，数据部门极大程度减少了数据查询、整理的低效工作，业务部门也能及时准确地拿到自己想要的数据，大大提高数据的流转效率和…",
    "value": [],
    "steps": [
      "❌获取数据，难：数据分散在不同的数据库里，且数据量庞大，查询数据并按需求整理到一个表格中，全程需人工处理，耗时耗力；",
      "❌数据分析，难：人工整理的数据 ，每次输出的数据指标都会出现差异，不标准的数据导致数据分析难上加难，在数据分析中如需其他数据作为补充，又得重新提需求排期，困难重重。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/ZX3OdzEwqo3UEpx4ABvcGxC7n9d"
  },
  {
    "name": "1 定制规划（需求/AI/场景延伸）",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用"
    ],
    "platforms": [],
    "overview": "- 缺上下游的自动化操作",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/IaTddNoR9oPYCHxSCrzcGz0Mngd"
  },
  {
    "name": "26版 影刀AI+RPA大赛标准SOP使用手册",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用"
    ],
    "platforms": [],
    "overview": "面向「其他」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/DjzcdZFROoaooAxcNIPceFgBnuh"
  },
  {
    "name": "26版AI+RPA赛前宣传（本页内部阅读）",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用"
    ],
    "platforms": [],
    "overview": "做好大赛前期宣传是办好一场RPA大赛的重要起点，宣传是否到位，宣传面覆盖是否够广，内容是否足够吸引人，这些都可能直接影响活动影响力和报名积极性，所以我们建议客户：",
    "value": [],
    "steps": [
      "多渠道推广：利用公司内部的多种媒介，如邮件、公告板、内部网、群聊等，全方位宣传RPA技术及大赛亮点。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/PnpfdavANoIqWQxXoQ3cmDJOnLb"
  },
  {
    "name": "商品批量上架管理",
    "type": "RPA",
    "industry": "电商",
    "tags": [
      "电商",
      "通用",
      "上架"
    ],
    "platforms": [],
    "overview": "传统拍摄操作不仅需要人工布景，还需要手动操作相机进行拍摄，拍摄完成后还需要将照片导入电脑后方可进行对应的PS处理。客户利用百度的智能拍摄套装加影刀RPA，可以实现人工摆放好商品后的自动连拍（单次18张）及图片自动导入电脑指定文件夹中。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/DGUvdslKJoyll3xwXO4c8l5Onef"
  },
  {
    "name": "图书PDF目录智能标注，效率提升600%",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "PDF",
      "识别"
    ],
    "platforms": [],
    "overview": "影刀RPA可以自动拆分PDF文件为图片格式，然后调用AI Power多模态大模型逐页识别封面、目录、章节标题等特殊页面，最后根据AI识别结果自动为指定页面添加目录书签和超链接，实现PDF图书目录的智能化标注。",
    "value": [
      "处理一本200页PDF文件仅需10分钟，效率提升600%"
    ],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/MKRNdudoAooWRPxQpThcRymanWg"
  },
  {
    "name": "影刀RPA+AI-全渠道数据分析自动化方案",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "通用",
      "数据分析"
    ],
    "platforms": [],
    "overview": "面向「其他」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/base/VTuTbX8CYahLuvs6tWZcpZKoned"
  },
  {
    "name": "核心环节_红人标签AI匹配（找到更加准确的达人）_3.0对外",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "通用"
    ],
    "platforms": [],
    "overview": "面向「其他」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/SGw7dYAkuoBvKxxVhhNcDzGpnJe"
  },
  {
    "name": "臻牧集团：携手影刀RPA+飞书重构 AI 大赛新范式，部门渗透率超90%",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用",
      "飞书"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "想要解决这些问题，臻牧并没有选择传统的自上而下的IT改革，而是发起了一场名为“智启未来·效赢增长”的AI应用实战大赛。在技术选型上，臻牧确立了“影刀RPA（执行手脚）+ 飞书（协作中枢）+AI（决策大脑）”的黄金组合：利用影刀RPA“零…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/EiOidgnzVow7vZxatnwcRywmnBk"
  },
  {
    "name": "走进 AI 现场｜看见影刀在真实企业里的落地实践",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用"
    ],
    "platforms": [],
    "overview": "这些是真实运行在企业岗位、流程和系统中的 AI 自动化实践。你可以按城市查看附近的优秀企业现场，也可以预约参访，近距离了解它们如何用影刀提升业务效率、沉淀自动化能力。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/PtyMdIlB6oSCDExo3wscSI6Anqg"
  },
  {
    "name": "运营_AI竞对对比",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用"
    ],
    "platforms": [],
    "overview": "面向「其他」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Ux4Gdjtalo1PXnxJVS7cxcb5nxS"
  },
  {
    "name": "钉钉考勤自动校对补卡，200人企业从2小时缩短至1分钟",
    "type": "RPA+AI",
    "industry": "人事",
    "tags": [
      "人事",
      "考勤",
      "钉钉"
    ],
    "platforms": [
      "钉钉"
    ],
    "overview": "影刀RPA通过\"降维处理\"的思路，将复杂的UI自动化转化为Excel数据处理问题，实现全流程自动化：",
    "value": [],
    "steps": [
      "自动导出考勤报表：RPA自动操作钉钉客户端，筛选日期并导出考勤数据",
      "数据清洗处理：自动处理合并单元格，将\"六/日\"转换为标准日期格式，生成规范化交叉表",
      "智能考勤判断：基于企业考勤规则，自动循环判断\"迟走晚到\"、\"缺卡\"、\"旷工\"等场景",
      "API自动修改：通过钉钉开放平台API自动上传修正后的考勤结果"
    ],
    "link": "https://ying-dao.feishu.cn/docx/OfHNdZQ0boNUt7x7woWchxySn9j"
  },
  {
    "name": "RPA+AP+多维表_实现评论分析及可视化展示",
    "type": "RPA",
    "industry": "客服",
    "tags": [
      "客服",
      "评论分析"
    ],
    "platforms": [],
    "overview": "面向「客服/评论分析」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "客户洞察：通过标签化和可视化，可以快速识别客户对产品或服务的正面或负面反馈，从而获得客户的真实体验和需求。",
      "情感分析：可视化分析可以帮助识别客户的情绪倾向，比如快乐、愤怒或失望，这对于提升客户服务和产品改进至关重要。",
      "市场趋势：通过分析评论的趋势，可以发现市场动态和消费者行为的变化，为市场策略的调整提供依据。",
      "产品改进：分析客户的反馈可以帮助企业发现产品或服务的不足之处，从而进行针对性的改进。",
      "风险管理：及时发现负面评论和投诉，可以快速响应，减少负面影响，提高品牌形象。",
      "竞争分析：通过比较自身与竞争对手的评论标签，可以了解市场定位和竞争优势。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/HqKIdH7m4oMWeMxonN9cT7pjnNc"
  },
  {
    "name": "RPA+AP实现千牛全托管智能客服：上下文连续问答及转人工（对外）",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "智能客服"
    ],
    "platforms": [],
    "overview": "据品牌反馈，落地这套方案后，他们只有约23%的问题需要人工回答，剩下近77%的问题都能通过AI去解决。并结合RPA实现了24小时全天候回复，有效解决了客服人手不够，回复慢的问题。",
    "value": [],
    "steps": [
      "先由AI回答话术库中已有的常见问题；话术库中没有的再转人工处理；"
    ],
    "link": "https://ying-dao.feishu.cn/docx/GN5WdZgSfohuNjxNCYscnjntnPd"
  },
  {
    "name": "应用2_评论采集&词频AI分析（精选环节）_对外",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "广告",
      "数据库"
    ],
    "platforms": [],
    "overview": "- 可拓展：采集数据录入数据库，把《评论词》、《产品卖点词》、《广告搜索词》结合，做进一步精细化运营分析",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/OF16dLsFqonLNXxzcT8c5hA2nae"
  },
  {
    "name": "影刀RPA｜客服自动化解决方案",
    "type": "RPA",
    "industry": "客服",
    "tags": [
      "客服"
    ],
    "platforms": [],
    "overview": "欢迎前往影刀RPA官网了解更多行业案例",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/S5FzdatzloiQWmxjQrRcbiSQnFd"
  },
  {
    "name": "影刀X飞书【AI舆情分析/VOC】解决方案-对内版",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "舆情",
      "评价",
      "飞书"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "舆情监控和分析是指通过监测公众对企业、品牌、产品等的评价、意见、态度等，了解市场动态和消费者需求，从而为企业决策提供数据支持和建议的过程。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/Ndjgd9Cfxo4ox7xMFKOc1yBoneO"
  },
  {
    "name": "影刀X飞书｜AI舆情分析/VOC解决方案",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "舆情",
      "评价",
      "飞书"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "舆情监控和分析是指通过监测公众对企业、品牌、产品等的评价、意见、态度等，了解市场动态和消费者需求，从而为企业决策提供数据支持和建议的过程。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/EIiddZ2XSoHB3ax0hnAc5VCjngc"
  },
  {
    "name": "征和工业：AI+RPA让财务从“账房先生”走向“智能战力伙伴”",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "财务",
      "工单"
    ],
    "platforms": [],
    "overview": "征和工业作为链传动行业上市企业，在智能财务转型中引入影刀 AI+RPA，将自动化能力落地到收款通知、工单打印、成本价格维护、完工发货等真实业务场景。通过机器人连接 ERP、OA、TMS 等系统，征和工业把原本依赖人工下载、录入、核对和流…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/TzDudQ4uloexuGx7u6jcubgMnBf"
  },
  {
    "name": "模块1.3.1：AI+RPA大赛常见话术包—邀约",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "评论分析"
    ],
    "platforms": [],
    "overview": "面向「客服/评论分析」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "不急着答应",
      "先“控预期 + 做评估”，通过询问“硬指标”让客户意识到办赛需要门槛，从而尊重我方的评估。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/ASlIdOI7zoIpTYxrQr7cNXeuneh"
  },
  {
    "name": "美团数据采集",
    "type": "RPA",
    "industry": "客服",
    "tags": [
      "客服",
      "数据库",
      "美团"
    ],
    "platforms": [
      "美团"
    ],
    "overview": "利用影刀RPA可实现每天自动采集门店运营数据，并写入数据库，完成数据的筛选和清洗后，自动展示到前端小程序上，各个门店的运营可以实时查看数据调整运营策略，解决客户问题。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/S9rWdwDXroKH5RxORkAcvffsnfg"
  },
  {
    "name": "【离散制造】采购-付款全链路自动化解决方案｜影刀RPA（对外版）",
    "type": "RPA",
    "industry": "财务",
    "tags": [
      "财务",
      "对账",
      "税务",
      "付款",
      "采购",
      "制造"
    ],
    "platforms": [],
    "overview": "核心结论： 离散制造的采购-付款链路横跨 ERP、SRM、WMS、税务、网银等 5-8 个系统，每年在人工串联上消耗超过 50+ 人天 的重复劳动。RPA 可以在不改造任何现有系统的前提下，将采购执行效率提升 70% 以上，对账准确率提…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/PIfod52bdoC31LxbspTcnD0inTc"
  },
  {
    "name": "从订单到交付：RPA 如何打通汽车零配件制造的跨系统执行链路｜影刀RPA（对外版）",
    "type": "RPA",
    "industry": "财务",
    "tags": [
      "财务",
      "汽车",
      "税务",
      "制造"
    ],
    "platforms": [],
    "overview": "如果您是 CIO：您每年在 ERP、MES、OA、税务、客户平台之间的人工串联上，至少消耗 30+ 人天的重复劳动。RPA 可以在不改造任何现有系统的前提下，把这些环节串联，执行效率提升数倍。",
    "value": [],
    "steps": [
      "这些系统各自运转良好，但业务是跨系统的。一个完整的\"订单",
      "交付\"流程，需要在 4-6 个系统间反复切换、手动录入、核对数据。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/NACAdLxTuobynLxPjX9c2AfPnfd"
  },
  {
    "name": "峰梅新能源：打通生产到交付全链路，AI自动化驱动流程效率提升20倍",
    "type": "RPA+AI",
    "industry": "财务",
    "tags": [
      "财务",
      "汽车",
      "生产"
    ],
    "platforms": [],
    "overview": "引入影刀RPA后，峰梅新能源在不改造现有系统的前提下，将高频、重复、规则明确的跨系统操作全面自动化，单场景处理时间从1小时压缩至3分钟，每月自动处理800+物料，打通了从生产到交付的全链路自动化闭环，为汽车零部件行业的数字化转型提供了可…",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/ILYUdQu4dojruexDsalcLEzcnYg"
  },
  {
    "name": "快递物流异常单自动补揽，日处理1-2万单提升95%效率",
    "type": "RPA",
    "industry": "财务",
    "tags": [
      "财务",
      "物流"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替人工自动执行异常单补揽的完整流程，通过与客户开发团队合作，开发了一套适用于沙箱环境的内网操作指令，实现了从数据获取到补揽操作的全流程自动化。",
    "value": [],
    "steps": [
      "从快递内网下载昨天出货信息",
      "筛选出无揽收记录的单号",
      "重新从内网上传",
      "导出上传失败的数据",
      "在Excel里筛选剔除昨天已经补揽过的",
      "打开手机登录业务员账号进入补揽页面",
      "循环上传揽收单号进行补揽"
    ],
    "link": "https://ying-dao.feishu.cn/docx/N5LfdlpT6oGucWxEHLvcicEbnmc"
  },
  {
    "name": "珠宝行业财务运输单自动识别核对，RPA+AI实现票据处理100%准确率",
    "type": "RPA+AI",
    "industry": "财务",
    "tags": [
      "财务",
      "珠宝",
      "识别"
    ],
    "platforms": [],
    "overview": "影刀RPA结合AI Power能力，可以自动识别和处理FERRARI运输单和FEDEX运输单的全流程操作：",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/MDEXdlt6JoEsr5xUtzJcFaFbnNb"
  },
  {
    "name": "财务审核对账岗｜影刀AI自动化",
    "type": "RPA+AI",
    "industry": "财务",
    "tags": [
      "财务",
      "对账",
      "审核",
      "报表"
    ],
    "platforms": [],
    "overview": "面向「财务/报表/对账」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/FY2SdMhsNoPsScxkRORc119dnhe"
  },
  {
    "name": "供应商AI评估：1688平台外贸采购寻源与初筛",
    "type": "AI",
    "industry": "制造业",
    "tags": [
      "制造业",
      "供应链",
      "采购",
      "供应商",
      "制造",
      "1688"
    ],
    "platforms": [
      "1688"
    ],
    "overview": "面向「制造业/供应链」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [
      "细节特征：是否有logo、特殊颜色、表面处理（如：磨砂、电镀）、包装方式。"
    ],
    "link": "https://ying-dao.feishu.cn/docx/CbZJdUJpzo9FdGxV3xictrApnae"
  },
  {
    "name": "RPA+AI【制造业】解决方案合集",
    "type": "RPA+AI",
    "industry": "制造业",
    "tags": [
      "制造业",
      "供应链",
      "制造"
    ],
    "platforms": [],
    "overview": "面向「制造业/供应链」业务场景，通过 RPA+AI 实现关键业务流程的自动化与智能化处理，帮助企业提升人效、降低成本，完整方案见落地链接。",
    "value": [],
    "steps": [],
    "link": "https://ying-dao.feishu.cn/docx/DMFidjwgsonrhpxeSKNcTsatntg"
  },
  {
    "name": "母婴行业旺店通组合装通过钉钉自动创建，降低内部沟通成本",
    "type": "RPA",
    "industry": "通用",
    "tags": [
      "通用",
      "母婴",
      "钉钉"
    ],
    "platforms": [
      "钉钉"
    ],
    "overview": "影刀RPA结合钉钉表单，可以自动化处理组合装创建流程。当运营人员在钉钉表单中提交组合装创建需求后，影刀RPA自动获取表单信息，按照固定算法生成唯一的组合装编码，然后自动登录旺店通系统，创建对应的组合装商品，并将创建结果同步回钉钉系统。",
    "value": [
      "极大降低了内部沟通成本，创建组合装流程简单高效"
    ],
    "steps": [
      "钉钉表单提交",
      "影刀RPA获取表单数据",
      "自动生成唯一编码",
      "登录旺店通系统",
      "自动创建组合装",
      "记录创建信息",
      "结果反馈"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Ew7kdjagsoQCLDxj7wecQ4vin9d"
  },
  {
    "name": "顶新集团PMI：跑通→复制→进化：从流程自动化走向AI员工",
    "type": "RPA+AI",
    "industry": "人事",
    "tags": [
      "人事",
      "通用",
      "智能体"
    ],
    "platforms": [],
    "overview": "实践方向： 流程自动化、RPA＋AI、数字员工与岗位型智能体",
    "value": [],
    "steps": [
      "核心路径： 跑通流程",
      "复制能力",
      "持续进化"
    ],
    "link": "https://ying-dao.feishu.cn/docx/S5LodeOjlo35sMx8ePSc86pqnfg"
  },
  {
    "name": "制造业员工海外出差保险自动化管理，HR工作效率提升90%",
    "type": "RPA",
    "industry": "人事",
    "tags": [
      "人事",
      "制造"
    ],
    "platforms": [],
    "overview": "影刀RPA可以代替HR自动执行OA系统数据抓取、保险记录比对、保险平台批量操作等全流程自动化处理，大幅简化HR工作流程。",
    "value": [],
    "steps": [
      "设定触发日期",
      "自动抓取OA出差流程",
      "比对历史保险记录",
      "企微提醒HR确认",
      "批量执行保险操作",
      "记录存储及结果通知"
    ],
    "link": "https://ying-dao.feishu.cn/docx/Sudzdk5sTohSaXx3ViCcyb0Bnmc"
  },
  {
    "name": "10分钟搞定电商全套商品图自动生成",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "跨境电商",
      "淘宝",
      "1688",
      "亚马逊",
      "TikTok",
      "图片生成",
      "生图",
      "修图",
      "套图"
    ],
    "platforms": [
      "淘宝",
      "1688",
      "亚马逊",
      "TikTok"
    ],
    "overview": "很多做 电商运营、跨境独立站、店铺设计 的朋友，在新品上架或大促前夕，经常会陷入这样的焦灼： 永远在等排期 ：几十个 SKU 等着上架，美工那边还压着上周的需求，催急了出来的图质量还没法看。",
    "value": [
      "直接解决电商核心上架流程痛点，效率提升100倍以上（2-4小时降至1分钟），可替代美工和拍摄预算，适用于不同规模电商场景，ROI路径清晰但缺少具体成本数据",
      "电商行业内通用性强，覆盖多平台多品类。已沉淀为标准化模板，新客户可直接使用，交付成本低。具备平台级产品能力，但跨行业复用性有限"
    ],
    "steps": [
      "跨境电商“全套图”自动生成",
      "大促/节日批量换背景",
      "服装/模特“虚拟换装”",
      "家居/家具“场景构建”",
      "标准化输入 ：不管你是什么产品，先统一处理成“干净的素材” 。",
      "流水线执行 ：机器不休息，可以同时处理 100 张图。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/903939412339372032",
    "rating": "优质",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "全链路搞定，客户评价自动打标全套解决方案",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "物流",
      "制造业",
      "电商",
      "内容营销",
      "钉钉",
      "评价分类",
      "文本分类",
      "舆情",
      "质检"
    ],
    "platforms": [
      "钉钉"
    ],
    "overview": "无论你是卖零食、美妆、服饰，还是做餐饮连锁，这些痛点都特别集中： 评价写得很随意，信息杂，人工归类又慢又不一致",
    "value": [
      "该方案深度嵌入电商、零售、餐饮等行业的核心运营流程,解决评价分类这一高频刚需痛点。",
      "方案具有极强的复用价值,跨行业通用性强,提供3个标准化工作流模板,新客户3-5天即可部署。"
    ],
    "steps": [
      "单条 vs 批量怎么选 落地时，通常就按这两句判断："
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/902106055587356672",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "47/50",
    "reuse_score": "46/50"
  },
  {
    "name": "如何让 AI 智能体完成智能线索问诊分层入库派单",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "财务",
      "人事",
      "法律",
      "制造业",
      "销售",
      "电商",
      "客服",
      "内容营销",
      "微信"
    ],
    "platforms": [
      "微信"
    ],
    "overview": "渠道一开，咨询量一上来，对话框里同时跳十几条消息。有人只问一句“价格”，有人说“我在××区能不能做”，有人直接甩一句“很急”。团队当然想把每条都接住，但接着接着就会出现几个很现实的问题： 想入库，字段又散在聊天里，靠人整理太慢",
    "value": [
      "该方案直接嵌入企业线索运营核心流程,覆盖售前、客服、BD等多个关键业务环节,具有明确的降本提效路径和极强的规模适用性。虽然缺少具体量化数据,但业务价值清晰,预算匹配度高",
      "方案具有极强的跨行业通用性和客户可复制性,已高度产品化为标准模板,交付成本低且边际成本趋近于0。可作为平台标准能力模块,具有显著的平台级价值"
    ],
    "steps": [
      "用户明确不想留联系方式：给出一条可执行的自助建议，然后结束；"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/899192369654947840",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "43/50",
    "reuse_score": "46/50"
  },
  {
    "name": "RPA+多模态AI，让单据审核成本降至\"五毛钱\"",
    "type": "AI",
    "industry": "财务",
    "tags": [
      "财务",
      "制造业",
      "审核",
      "OCR",
      "识别",
      "多模态",
      "Prompt",
      "提示词",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "这是一家全球领先的消费类聚合物软包锂离子电池供应商，业务遍及全球，服务于各大知名品牌。随着订单量的持续攀升，其财务部门面临着巨大的运营压力。 每个月，约有500张送货单需要人工审核，这项工作耗时且极易出错。财务人员需要花费大量时间在单据的海洋里翻阅、核对公章、签字等关键信息。他们迫切希望利用 R…",
    "value": [
      "该方案直接嵌入财务审核核心流程，ROI路径清晰（500张单据从半天降至瞬时，成本仅0.5元），降本提效强度极高（成本节省99%+，效率提升数十倍），高度匹配企业已有财务审核预算，适…",
      "该方案具有强跨行业通用性（所有涉及单据审核的企业），客户可复制度高（3-5天可复制），产品化潜力大（可扩展到多种单据类型），交付成本结构优秀（首单3-5人日，后续1-2人日），具有…"
    ],
    "steps": [
      "RPA批量读取 ：RPA机器人自动读取指定文件夹中的所有送货单图片文件。",
      "结构化数据返回 ：AI将识别结果以标准的JSON格式返回给RPA机器人。",
      "搭建RPA流程，调用影刀AIPower",
      "日期: 提取单据上的日期。",
      "是否盖章: 判断图片中是否存在红色的公司印章。如果存在，值为 \"true\"，否则为 \"false\"。",
      "盖章公司: 如果盖章，请识别并提取印章上的公司全称。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/835845023928467456",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "RPA获取可信数据源，生成可信的竞品调研报告",
    "type": "RPA",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "物流",
      "制造业",
      "销售",
      "跨境电商",
      "电商",
      "客服",
      "亚马逊",
      "卖家精灵",
      "数据分析"
    ],
    "platforms": [
      "亚马逊",
      "卖家精灵"
    ],
    "overview": "有了可信数据源，AI才能成为真正的生产力工具；没有数据质量保障，所有智能分析都是空中楼阁。 这是一家做跨境电商的客户，通过亚马逊、独立站、阿里国际站（B2B）等跨境平台销售自己的产品，市场主要覆盖了日本、美国、欧洲、南美等国家。他们有一个部门，负责产品开发，每个月都需要开发出一些新的产品推向市场…",
    "value": [
      "该方案嵌入跨境电商产品开发核心流程，优化已有预算项，具有明确的业务价值。但缺少量化ROI数据和具体提效指标，无法准确评估降本提效强度。方案具有良好的规模适用性和复用潜力",
      "方案具有较强的行业通用性和产品化潜力，核心逻辑可复用。新客户需要1-2周定制化开发，后续交付成本可降至2-3人日。已完成模块化抽象，但需要进一步标准化数据源接口才能实现快速复制"
    ],
    "steps": [
      "获取数据：通过搭建查询数据库的工作流获取数据，其中“专利分析”通过联网查询组件获取数据。",
      "生成报告：将所有获取的数据，给到 AI，生成调研报告。",
      "搭建 RPA，完成数据下载并清洗后，写入影刀AI Power-数据库",
      "确定每一项分析的数据维度，在数据库-AI 生成 sql 语句中生成查询语句：",
      "依次完成所有数据获取的AI工作流",
      "销售表现分析"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/831773704373735424",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "44/50",
    "reuse_score": "42/50"
  },
  {
    "name": "AI销售专家：客户背景查询、需求洞察、案例精准匹配一站式支持！",
    "type": "AI",
    "industry": "销售",
    "tags": [
      "销售",
      "财务",
      "人事",
      "客服",
      "内容营销",
      "知识库",
      "数据分析",
      "智能体",
      "工作流",
      "招聘"
    ],
    "platforms": [],
    "overview": "这是一家 B2B 龙头公司，专注为企业提供降本增效工具产品及服务。企业的成交链路往往很长，而销售人员流动性往往很大，因此遇到了以下问题： 在了解了这些问题后，使用影刀AI Power，搭建了一个销售专家智能体：能够模拟、学习并执行顶尖销售工作流的 “AI销售专家”智能体 。成为整个团队的“外置大…",
    "value": [
      "该方案直击B2B企业销售核心痛点,将顶尖销售经验数字化、规模化复制,显著降低培养成本和知识流失风险。完美匹配企业销售培训和知识管理预算,规模适用性强。",
      "该方案具有极强的跨行业通用性和产品化潜力,已形成标准化的三层架构(知识库+工作流+智能体)。客户复制成本低,交付效率高,具备平台级价值。可作为B2B销售赋能领域的标杆解决方案"
    ],
    "steps": [
      "像资深顾问一样调研客户（客户背景查询）",
      "像行业专家一样洞察需求（需求洞察）",
      "像金牌销售一样匹配方案（案例精准匹配）"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/821189942275731456",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "47/50"
  },
  {
    "name": "双智能体协作赋能用户调研，零人工实现全自动用户访谈并总结分析",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "客服",
      "内容营销",
      "数据分析",
      "报表",
      "提示词",
      "工作流",
      "RPA",
      "多智能体",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "全自动开展线上AI访谈！ 通过搭建多智能体+RPA+数据库的智能访谈系统，帮助上市公司市场部门实现超高效用户调研！ 人工投入降低90%，用户调研效率提升20倍！ 开展规模小： 调研需庞大数据支撑，但受限于场地、团队规模及成本，每周仅能组织 1-3 场线下访谈，每场 3-5 名受访者，数据积累缓慢…",
    "value": [
      "该方案深度嵌入市场营销的用户调研环节，通过智能化访谈系统实现人工成本降低90%、效率提升20倍、周期缩短75%，ROI路径清晰且降本提效强度显著，可直接优化企业现有调研预算项，具有…",
      "方案具有极强的复用价值，用户调研场景跨行业通用，核心逻辑已高度模块化并提供完整配置文件，新客户可在3-7天内完成部署，后续交付边际成本趋近于0，且双智能体协作模式可作为平台级能力被…"
    ],
    "steps": [
      "访谈大纲生成 ：使用访谈专家智能体创建不同主题的大纲，并上传至数据库。",
      "受访者信息匹配 ：将受访者按画像分类，分配大纲ID，并通过访谈专家智能体上传至数据库。",
      "线上访谈执行 ：受访者使用访谈主持人智能体进行对话，访谈纪要由智能体自动整理并上传至数据库。",
      "数据分析与结果呈现 ：利用RPA检测访谈进度，自动读取访谈纪要，生成数据报表。",
      "生成访谈大纲",
      "将访谈大纲内容与ID上传数据库"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/809241441431228416",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "各种场景下的客服咨询问答，AI 智能体全部搞定",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "医药",
      "法律",
      "物流",
      "制造业",
      "销售",
      "电商",
      "客服",
      "千牛"
    ],
    "platforms": [
      "千牛"
    ],
    "overview": "不管是对内的员工咨询，还是对外的客户服务， 智能客服 是非常常见的 AI 应用场景，使用 AI 智能客服，搞定 70%的重复问答 ！ 实现24小时全天候自动回复，并根据场景需要智能转人工",
    "value": [
      "智能客服直接嵌入企业核心业务流程，ROI路径清晰（70%问题自动化、响应率95%、处理时长10秒），显著降低人力成本，完美匹配企业已有客服预算，适用于不同规模企业，业务价值极高",
      "智能客服跨行业通用性极强，已沉淀为标准化产品，核心能力可快速复制（3-7天），交付成本结构优秀（后续2-3人日），具有平台级价值，复用价值非常高"
    ],
    "steps": [
      "将以上两个逻辑在AI智能体里面进行以下串联后，即可实现自动追问详细车型的功能",
      "陶瓷制品的智能客服，识别破损智能处理售后问题",
      "结合 RPA 的智能客服，实现千牛全托管自动化"
    ],
    "link": "https://yingdao.com/yddoc/ap/803518003336007680",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "48/50",
    "reuse_score": "47/50"
  },
  {
    "name": "告别低效的简历筛选，RPA+AI 让招聘效率起飞",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "物流",
      "销售",
      "客服",
      "飞书",
      "知识库",
      "工作流",
      "RPA",
      "招聘",
      "简历"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "简历的初筛环节工作量占据整个招聘流程 60%-70%的工作量，使用RPA+AI 完成简历初步筛选，过滤大量不匹配的简历，让 HR 有更多时间在人才的精筛上！ 使用 BOSS 直聘平台进行批量的简历筛选及打招呼，会有封号风险，规避风险的方式有：",
    "value": [
      "该方案直接嵌入招聘核心流程，ROI路径清晰（节省60%人力成本、每人每天节省4小时），降本提效强度显著（效率提升3倍），完全匹配企业已有招聘预算，适用于不同规模企业但对小微企业成本…",
      "方案跨行业通用性极强（所有企业都有招聘需求），已沉淀为3个标准化AI工作流模板，客户可复制度高（3-7天可上线），首单3-5人日后续2-3人日，具有平台级价值可被多个HR场景引用"
    ],
    "steps": [
      "不切换电脑登录 boss 账号"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/808636568165851136",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "全托管智能客服：RPA +AP，实现千牛全托管智能客服：上下文连续问答及转人工",
    "type": "RPA+AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "医药",
      "法律",
      "销售",
      "电商",
      "客服",
      "千牛",
      "智能客服",
      "工作流",
      "RPA"
    ],
    "platforms": [
      "千牛"
    ],
    "overview": "不同用户的业务流程不一样，落地效果可能有区别。本文档仅提供场景灵感参考。 本场景只处理文字输入，及文字输出单一类别。",
    "value": [
      "该方案直接嵌入电商核心客服流程，77%自动回复率显著降低人力成本，3分钟人工响应率提升至98%，24小时全天候服务解决大促扩招难题，ROI清晰且规模适用性强，完美匹配企业客服预算项",
      "方案在电商行业内通用性强，核心逻辑可复用但需轻量定制，已沉淀为AI工作流模板，交付成本结构优秀（首单5-7人日，后续2-3人日），具有平台级价值，可作为电商智能客服标准解决方案"
    ],
    "steps": [
      "希望AI能根据上下文语境理解客户的问题。",
      "先由AI回答话术库中已有的常见问题；话术库中没有的再转人工处理；",
      "希望AI能模仿客服的语气、真人的说话习惯。",
      "若客户问题涉及药品使用，希望AI能引导客户咨询专业医生，以避免法律风险【个性化需求】。",
      "登录商家后台，并进入接待中心。",
      "循环读取左侧边栏的对话列表。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803519310872166400",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "48/50",
    "reuse_score": "44/50"
  },
  {
    "name": "监控异常画面检测：利用RPA+AI 零人工成本实现摄像头异常全自动监测汇报",
    "type": "AI",
    "industry": "制造业",
    "tags": [
      "制造业",
      "客服",
      "OCR",
      "识别",
      "多模态",
      "提示词",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天要分享的案例，来自一家专为大型车辆制造监控摄像头的企业。他们的主要产品是行车监控摄像头，用于监控记录大型车辆行车过程中的状况，以协助司机用户保证车辆驾驶的安全。 为了确保监控安全效果，并提升用户产品使用体验，企业希望能够利用AI来代替人工实时监测判断摄像头是否正常运行。 企业实时运营管理的大…",
    "value": [
      "该方案直接解决制造企业核心质量监控痛点，完全替代8位专职人员，实现100%人工成本节省（年省64-96万），ROI路径清晰，可直接替代现有人力预算，规模适用性强",
      "方案具有强跨行业通用性，可应用于安防、制造、物流等多领域。客户复制成本低（3-5天），产品化程度高，交付成本递减明显，具备平台级能力模块价值"
    ],
    "steps": [
      "在开始搭建AI工作流前，我们首先需要界定好摄像头画面的异常情况有哪些。从客户的口中得知，常见的异常情况有四种，分别是黑屏、花屏、屏幕歪斜、屏幕模糊。在此基础上补充一些特殊情况，如【当前通路没有显示摄像头】。除此之外的情况，就属于摄像头正常。",
      "由于不同的异常情况也可能存在多种样式（如右图中展示的多种不同黑屏/花屏的情况），因此在界定了异常情况后，还需要整理关于每一种异常情况的详细描述：黑屏：图像完全漆黑、包含“无信号”等字样或部分区域为黑色。花屏：图像中存在大面积的噪点、干扰条纹、色块或信号干扰。屏幕歪斜：图像中没有人脸或人体，或内容倾斜、扭曲屏幕模糊：屏幕上有画面，但是屏幕上非常模糊，导致无法正常观察细节和辨认看清没有摄像头：没有任何画面或文字，图片呈现深蓝色，且屏幕中央有个摄像头图标",
      "接下来进入AI工作流的实际搭建过程。由于黑屏和花屏的部分情况中，存在图中显示类似“无信号”等文字，这也可以作为多模态大模型判断的条件之一。因此在多模态大模型前加入【OCR文字识别】的过程，并将识别出的文字给到多模态大模型。我们用【文本合并】组件给多模态大模型整理一个输出规则（也可以将规则写在多模态大模型的“提示词prompt(内容和问题)”中）。由于需要将输出的内容分为6个输出部分，因此在多模态大模型后再衔接一个大语言模型，用来将多模态模型处理完的结果进行JSON格式化，便于AI在输出最终结果时，更好的定位每个输出部分在文本中的位置。另外，避免多模态大模型prompt过于复杂，导致大模型“吃不下”而输出结果混乱",
      "搭建完了基本的框架后，最核心的就是如何撰写大模型的提示词prompt。在这个任务中，异常情况的识别规则、判断结果的输出要求，如何将这两点清楚表述非常重要。提示词prompt撰写示例如下：",
      "AI工作流运行效果展示：",
      "在AI工作流运行完成后，只需将输出结果传递给RPA，再通过RPA的 if 条件判断，就可以针对性的对存在摄像头问题的车辆进行后续处理流程。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803519949419171840",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "48/50",
    "reuse_score": "46/50"
  },
  {
    "name": "运费计算：跨境物流运费自动计算，节省80%的核对人力",
    "type": "RPA+AI",
    "industry": "物流",
    "tags": [
      "物流",
      "跨境电商",
      "电商",
      "知识库",
      "工作流",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "跨境电商的运费计算是一个复杂的问题。不同国家的运费规则各不相同，而且经常变动，靠人工维护和计算既耗时又容易出错。 我们设计了一个借助AI能力的运费计算方案，核心步骤如下:",
    "value": [
      "该方案解决跨境电商运费核对的核心痛点，节省80%人力成本，ROI清晰，可直接替代现有人工流程，适用于不同规模企业，业务价值显著",
      "方案标准化程度高，已沉淀为模板，新客户可快速复制。核心能力可扩展到其他计费规则场景，具有较强的平台级价值。交付成本低，后续边际成本小"
    ],
    "steps": [
      "快递单量大，批量处理效率低",
      "将最新运费规则的excel整理后上传到知识库",
      "向量化检索匹配目的地国家",
      "通过AI理解当前目的地国家和快递重量的运费规则",
      "批量执行后，和快递公司提供的明细表进行核对"
    ],
    "link": "https://yingdao.com/yddoc/ap/803522224454230016",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "船运&报关单数据核对：PDF 提取结合大模型整理核对，文档处理工作超轻松！",
    "type": "AI",
    "industry": "物流",
    "tags": [
      "物流",
      "法律",
      "跨境电商",
      "识别",
      "PDF",
      "工作流",
      "RPA",
      "合同",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天要分享的案例，来自一个零售头部客户海外分部，跨境运输的货物报关时，每天都有大量船运单需要识别和校验信息，由于内容格式不统一，需要RPA+AI结合，完成船运单数据与报关单数据的差异部分标记。 这个场景目前人工操作，有几个问题急需解决：",
    "value": [
      "该方案直接嵌入跨境物流核心业务流程，解决报关环节的刚性需求，实现全流程自动化，大幅降低人力成本，预算匹配度高，且适用于不同规模企业。唯一不足是缺少具体的量化ROI数据",
      "方案具有极强的跨行业通用性和客户可复制性，已沉淀为标准化模板，交付成本结构优秀，且核心能力可作为平台级模块被多个场景复用，复用价值极高"
    ],
    "steps": [
      "耗时且易出错：每日单量较大且船运单模版较多，核对的数据字段较多，人为处理耗时且繁琐，重复工作量大。",
      "单独依靠 RPA 无法灵活识别船运单内容：不同的船运公司可能采用不同的模板，pdf 船运单的模板较多，各个字段数据的位置不一致，比较灵活，无法设置固定逻辑进行提取。",
      "时效性要求较高：处理船运单核对数据业务流程时效性的要求极高，每日都有相关船运单需要核对并标记差异数据，方便关务组业务人员进行处理。",
      "实现效果",
      "如何实现？",
      "RPA 读取报关单 EXCEL。将需要核对的信息读取出来保存为字典。由于报关单 EXCEL格式固定，使用 RPA 即可实现。",
      "AI 提取船运单PDF 字段，与第 1 步的字典做比对。利用ap对船运单PDF文件内容进行识别和提取，提取出关键字段，包括PENGIRIM、PENJUAL、汇率、合同号、日期、保险费、海运费、价格、箱数、毛重、净重等内容；",
      "RPA 根据 AI 工作流输出的结果，标记 EXCEL。AI 工作流会输出不一致的字段，RPA 逐一循环字段，在EXCEL中将差异字段标红。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803575319105753088",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "47/50",
    "reuse_score": "46/50"
  },
  {
    "name": "复杂表格识别：自动化处理制造业采购单中的PDF识别与表格填写",
    "type": "AI",
    "industry": "制造业",
    "tags": [
      "制造业",
      "人事",
      "识别",
      "表格识别",
      "PDF",
      "智能体",
      "工作流",
      "RPA",
      "采购",
      "供应商"
    ],
    "platforms": [],
    "overview": "今天要分享的场景，来自一家制造业企业的采购部门。在做采购选型时，需要将采购单中的PDF内容识别并填写到表格中。由于PDF字段多达100多个，且中英混杂，人工处理既耗时又容易出错。 客户希望将这个工作能使用 RPA 实现自动化，但却遇到了一些新的问题",
    "value": [
      "该方案解决制造业采购部门的核心痛点，将100多个字段的PDF录入工作自动化，准确率达97%，显著提升效率和准确度。",
      "方案具有强通用性，适用于所有需要处理复杂表单的行业。已形成标准化的三层架构，新客户3-5天可部署。产品化程度高，业务人员0门槛使用。交付成本可控，但需要独立RPA机器。"
    ],
    "steps": [
      "每个供应商提供的PDF都不一样，且字段名称也可能不一样，仅靠 RPA 无法解决，需要AI 理解并提取成规范的、一致的数据格式后，才能录入Excel字段。",
      "若使用 AI，那么一份 PDF 长达上百页，受限于大模型的上下文窗口，需要 RPA 切分后，才能给到 AI 处理。",
      "希望整个流程交由业务同学自己使用，业务同学随时都可以上传 PDF 执行自动化。但希望尽可能降低业务同学的操作门槛。",
      "最终效果",
      "解决方案",
      "搭建 AI 工作流：借助 AI 对话工具（kimi），整理 excel 内容以及 pdf 内容，形成能够完美处理每一份 pdf 字段的 AI 工作流：",
      "搭建 AI 智能体，给业务同学使用，业务同学可以与智能体对话，上传 PDF 文件及需要处理的 excel 模板，0 门槛。",
      "使用一台牛马机器，后台运行 RPA 流程：调用第 1 步的工作流，提取 PDF 字段，填入 excel 模板。处理一份 pdf 文件耗时较长，所以异步执行，并搭建了一个接口，业务同学完成了第 2 步的上传动作后，过一段时间，再通过这个接口查询处理的进度，处理完成了就能下载 excel 啦~以下是请求代码："
    ],
    "link": "https://yingdao.com/yddoc/ap/803525174115258368",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "美团/饿了么活动提报：AI 提取活动信息，辅助 RPA 完成多平台活动自动化提报",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "人事",
      "淘宝",
      "京东",
      "美团",
      "饿了么",
      "识别",
      "报表",
      "提示词",
      "工作流"
    ],
    "platforms": [
      "淘宝",
      "京东",
      "美团",
      "饿了么"
    ],
    "overview": "今天要分享的场景，来自一家专注为消费品牌零售品牌提供营销技术服务的公司，做零售痛点就是渠道非常多，且信息化并不发达。 客户有一个团队负责： 饿了么、美团闪购、京东到家、淘宝买菜 四家电商平台的运营活动，当收到品牌方的活动需求后，由人工整理，并手动在各个平台上完成配置，但却存在各种难点：",
    "value": [
      "该方案直接嵌入电商运营核心流程，每月节省200+小时人工（40%+效率提升），ROI清晰可量化，完美匹配企业运营人力预算，适合中大型多平台电商运营场景",
      "方案在电商行业内通用性强，已有模板和工作流支持快速复制，交付成本可控（首单3-5人日，后续1-2人日），具备平台级价值，可作为RPA+AI标准解决方案推广"
    ],
    "steps": [
      "误将“哈根达斯”识别为品牌或商家",
      "误将“CRV”或“YH”识别为商家",
      "无法识别“华润”为商家"
    ],
    "link": "https://yingdao.com/yddoc/ap/803526142382759936",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "47/50",
    "reuse_score": "43/50"
  },
  {
    "name": "售前售后智能客服：能够引导客户一步步排查解决问题的 ai 客服，怎么实现",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "智能客服",
      "售后",
      "知识库",
      "智能体",
      "工作流",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天的场景来自一家做数码配件的公司，由于是售卖电脑配件，售后咨询量巨大，而且大部分的售后问题，都不是一两句话能解释清楚的，需要带着买家一步步排查问题、定位问题，才能解决。例如“主板不显示”的问题，回答是这样的： 问题：我收到的主板不显示/不开机 第一步回复：您不要急，我先帮您排查下原因，咱们看看…",
    "value": [
      "直接解决数码配件售后核心痛点，通过AI自动化分步引导大幅降低人工客服成本，ROI路径清晰但缺少量化数据，完美匹配企业已有客服预算，规模适用性强",
      "跨行业通用性强，适用于所有需要分步骤技术支持的场景。已有标准化模板，客户复制成本可控（3-5天）。产品化程度高，交付成本随规模递减。可作为平台核心能力模块被多场景引用"
    ],
    "steps": [
      "处理文档上传知识库",
      "售后问答中，涉及到多步骤处理的问题，确保知识库中 一个切片都包括了一个问题的完整处理步骤 ，如下：",
      "搭建能够分步骤回答的工作流",
      "搭建判断问题是否解决完成的工作流（也可以使用“判断用户意图”组件）",
      "搭建智能体，智能处理售前、售后、转人工的意图"
    ],
    "link": "https://yingdao.com/yddoc/ap/803527119478591488",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "知识库整理：如何创建更适合 AI 理解的知识库",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "客服",
      "智能客服",
      "知识库",
      "向量检索",
      "PDF",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "知识库文档预处理，就是 保证每个切片都能让大模型很好的理解 。不论在哪里使用知识库， 给到大模型的都是与查询词相关的若干个切片，而不是整个知识库。 切片是什么？ 知识库切片是指将所有资料分解成小的文本片段。这样，当用户提出问题时，只需将相关的文本片段提供给大型模型进一步处理。这不仅满足了大模型的…",
    "value": [
      "知识库整理是AI应用的重要基础能力，具有明确的预算匹配度和规模适用性，但缺少量化的ROI数据和降本提效证明，业务价值主要体现在优化AI效果和降低tokens消耗",
      "方案具有极强的跨行业通用性和客户可复制性，已高度产品化为标准文档，交付成本极低，可作为平台基础能力模块被多个AI应用引用，复用价值极高"
    ],
    "steps": [
      "Excel的预处理",
      "简单Word/PPT/MD/TXT/PDF的处理",
      "复杂 PDF 、PPT、长图文、超大文件等预处理",
      "上传知识库后-添加内容-文本-智能提取-默认分段即可",
      "视频文件的预处理",
      "思维导图预处理"
    ],
    "link": "https://yingdao.com/yddoc/ap/803528404336513024",
    "rating": "优质",
    "tier": "M1",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "48/50"
  },
  {
    "name": "售后客服：AI智能客服自动识别破损问题，快速完成破损补发流程",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "物流",
      "销售",
      "电商",
      "智能客服",
      "售后",
      "识别",
      "多模态",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自一家陶瓷品电商的客户。由于陶瓷品容易在快递过程中损坏，他们的售后工作中很大一部分是处理商品破损问题。为此，他们需要消费者上传破损照片，并根据照片决定是否补发。",
    "value": [
      "该方案直接解决电商售后核心痛点，预算匹配度高，规模适用性强。主要不足是缺少量化ROI数据，无法准确评估实际降本提效幅度",
      "方案通用性强，产品化程度高，可快速复制到多个行业和场景。交付成本结构合理，具备平台级能力模块价值"
    ],
    "steps": [
      "AI判断破损的准确性。",
      "对于爱“扯皮”的消费者，AI判断不够时需要人工跟进。",
      "在AI助理中，使用条件判断组件。如果没有收集到用户的处理意愿，就会循环追问，直到确认。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803797243312099328",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "侵权词检测：3万个侵权词，该怎么让 AI 检测得又快又准并给出合规文案",
    "type": "AI",
    "industry": "法律",
    "tags": [
      "法律",
      "跨境电商",
      "电商",
      "内容营销",
      "亚马逊",
      "知识库",
      "向量检索",
      "RPA",
      "高业务价值",
      "高复用价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "今天要分享的案例，来自跨境电商行业，主要的业务集中在亚马逊，在AI 生成listing 后，发现会有一定概率命中侵权词，一旦发布，就有很高的法律风险。 客户使用 rpa 做侵权词的检测，但是 rpa 只能完成检测，并不能将包含侵权词的文案调整完成，于是希望AI 来完成侵权词检测并修改文案。",
    "value": [
      "该方案解决跨境电商核心业务的法律合规风险，将侵权检测从纯检测升级为检测+自动修改的完整闭环，通过混合检索方式将tokens成本降低80%以上，直接优化企业已有RPA预算项，且适用于…",
      "方案具有极强的跨行业通用性（电商/内容/广告/金融等），已沉淀为标准化模板，新客户1-2天即可复制上线，首单2人日后续0.5人日，边际成本降低75%。"
    ],
    "steps": [
      "大语言模型生成： 根据第 3 步里的建议，生成新的合规文案。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/810396836511035392",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "47/50",
    "reuse_score": "46/50"
  },
  {
    "name": "请假 AI 审批：教会 AI 审核表单，至少释放70%的审批时间！",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "制造业",
      "审核",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个来自制造业的案例，员工数量 1w+，每天员工提交审批单量非常庞大，仅各类请假审批单日就能达到 200 条。 负责审批的人事专员每天都在超负荷工作，于是负责人希望能够用 AI，解决一部分正常的审批单，人工处理特殊情况的审批单即可。",
    "value": [
      "该方案直接嵌入人事行政核心流程，释放70%审批时间，人力成本降低显著。完全匹配企业已有预算项，可直接替代部分人工审批工作。规模适用性强，适用于各种规模企业。",
      "该方案跨行业通用性极强，适用于所有企业的请假审批场景。已沉淀为标准化AI工作流模板，客户可复制度高，3-5天可上线。产品化程度高，提供开箱即用的模板。"
    ],
    "steps": [
      "结婚登记日在入职日期后。",
      "请假开始日在结婚登记日起一年内。",
      "结婚证、生育登记证、出生医学证明三证齐全"
    ],
    "link": "https://yingdao.com/yddoc/ap/803582096067649536",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "47/50"
  },
  {
    "name": "接待/面诊服务质检：借助AI提升服务能力，优化业务流程",
    "type": "AI",
    "industry": "医药",
    "tags": [
      "医药",
      "财务",
      "制造业",
      "客服",
      "内容营销",
      "微信",
      "质检",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "微信"
    ],
    "overview": "在连锁口腔机构快速发展的今天，如何确保每家诊所都提供统一的高质量服务？我们通过真实案例，探讨AI如何将服务标准转化为可落地的数字化方案。 当连锁口腔机构日均接待量突破150人次时，传统人工质检面临三大挑战：",
    "value": [
      "该方案深度嵌入医美/口腔连锁的核心服务流程,将人工质检效率提升10倍以上,覆盖率从10%提升至近100%,新店复制周期从3-6个月大幅缩短。",
      "该方案具有极强的跨行业通用性,核心逻辑可应用于所有标准化服务场景。已沉淀为标准化模板,新客户3-5天即可上线,首单4人日、后续1人日的交付成本结构优秀。"
    ],
    "steps": [
      "执行偏差 ：7大接待环节、6项面诊要点存在执行标准参差",
      "诊所端自动上传录音至共享云盘（支持主流音频格式）",
      "RPA机器人调用「AI工作流」进行批量处理"
    ],
    "link": "https://yingdao.com/yddoc/ap/803805497957822464",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "47/50"
  },
  {
    "name": "立案材料整理：AP+RPA实现文档分类自动化，正确率100%",
    "type": "RPA",
    "industry": "法律",
    "tags": [
      "法律",
      "人事",
      "医药",
      "内容营销",
      "审核",
      "OCR",
      "识别",
      "PDF",
      "文档分类",
      "RPA"
    ],
    "platforms": [],
    "overview": "\"每年处理5万+份立案材料，人工分类错误率超8%导致流程延误\"——这是某全国性律所数字化转型的真实困境。本文面向法律行业数字化负责人，拆解「如何通过AI+RPA技术组合，实现文档分类准确率100%」、人力成本归零的落地路径，为法律文书处理提供可复用的自动化范式。 PDF/Word/图片混杂的文档…",
    "value": [
      "该方案直接嵌入律所核心立案流程，ROI路径清晰（成本降低96%、效率提升10倍），显著降本提效，高度匹配企业已有预算项，规模适用性强。是典型的高业务价值AI应用",
      "方案跨行业通用性强，已沉淀为标准化产品模板，客户可复制度高（3-5天部署），交付成本低（首单3-4人日，后续<1人日），具备明显的平台级价值"
    ],
    "steps": [
      "分类提取规则众多",
      "文档解析",
      "AI 分类",
      "自动化执行",
      "文档读取 ：RPA机器人自动浏览指定文件夹中的所有文件，逐一读取文档；",
      "分类结果整理 ：RPA将读取的文档发送至AP进行分类，并将AP输出的分类结果存储至excel表。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803821174907125760",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "48/50",
    "reuse_score": "46/50"
  },
  {
    "name": "邮件回复：利用吴恩达的「反思」设计模式，提升 AI 生成的稳定率！",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "人事",
      "电商",
      "客服",
      "亚马逊",
      "售后",
      "邮件",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "今天要分享的是一家做跨境电商业务的公司，主要平台为亚马逊。由于平台对于售后问题回复时效有考核，而又存在时差，收到售后邮件等待人工上班后再处理，会大幅延长处理时效。他们希望 RPA+AP 自动处理邮件生成回复。 售后问题中最多的就是部分产品受损，需要进行补发或者赔付。补发赔付涉及的情况非常复杂，而…",
    "value": [
      "「第40期」 跨境电商｜邮件回复 利用吴恩达的「反思」设计模式，提升 AI 生成的稳定率！",
      "那么如何解决这种复杂场景下的生成错误呢？我们想到了借鉴吴恩达的工作流设计模式——反思（Reflection）：让LLM 检查自己的工作，以提出改进方法。具体如下："
    ],
    "steps": [],
    "link": "https://yingdao.com/yddoc/ap/803809874865442816",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值"
  },
  {
    "name": "面单校验：跨境包裹面单的一致性校验，这样做更能提升准确率",
    "type": "RPA+AI",
    "industry": "物流",
    "tags": [
      "物流",
      "跨境电商",
      "亚马逊",
      "审核",
      "识别",
      "信息提取",
      "多模态",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "在国际物流领域，每天大量包裹流转背后，地址信息核验是保障运输准确性的关键环节。我们通过RPA+AI重构传统人工核验流程，为某国际物流企业实现「处理效率显著提升」，大幅减少人工干预需求。 国际物流企业每天需要处理大量包裹的地址核验工作，面临多重业务挑战：",
    "value": [
      "该方案解决国际物流企业核心业务环节的痛点，预算匹配度高且规模适用性强，但缺少明确的ROI量化数据，降本提效的具体强度需要进一步验证",
      "方案已产品化为AI服务模板，在物流行业内具有广泛适用性，客户复制成本低，交付效率高，具有明显的平台级价值，复用潜力大"
    ],
    "steps": [
      "人工成本高企 ：每个包裹需人工比对两套面单（入仓单+服务商单）的地址信息，耗费较大人力资源",
      "识别难度大 ：面单粘贴位置随机性大（包裹曲面、折叠处等），增加了人工判断难度",
      "规则复杂度高 ：需区分亚马逊单（比对邮编/城市/州）与个人单（比对收件人/邮编/街道）两类处理逻辑",
      "图像质量参差 ：现场拍摄的照片存在尺寸不一、光线不均、角度偏移等问题，影响信息提取",
      "业务规则数字化 ：将人工经验转化为可执行的判断逻辑",
      "处理流程自动化 ：RPA与AI模型的协同作业突破人力瓶颈"
    ],
    "link": "https://yingdao.com/yddoc/ap/803810939528286208",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "AI技巧：拆解一个具体案例，手把手教你如何让大模型更懂你",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "物流",
      "跨境电商",
      "电商",
      "客服",
      "内容营销",
      "评价分类",
      "审核",
      "翻译",
      "RPA"
    ],
    "platforms": [],
    "overview": "今天分享的是一个已成交客户的场景，目前这个客户每天AI服务运行数量上万次。这到底是在做啥？ 这个客户是一个国内头部跨境物流公司，服务对象是跨境电商卖家。当收到卖家们发来的运单时，运输物品往往填写不准确，需要人工来审核「运输物品名称」是否正确，每天大概有 1.5-3 万条数据，需要一个人做 2 小…",
    "value": [
      "该方案直接嵌入跨境物流核心业务流程，ROI极其清晰（人力成本降低99.45%，效率提升100倍以上），已有真实客户每天运行上万次，完美匹配企业预算，适用于中大型物流企业",
      "方案通用性强，可应用于电商、客服、数据处理等多个行业。已沉淀为标准化AI服务模板，客户可快速复制（1-3天上线）。交付成本低（首单2-3人日，后续<1人日），具备平台级复用潜力"
    ],
    "steps": [
      "判断「运输物品名称」是否为英文，若中文需要翻译为英文。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803825705814593536",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "48/50",
    "reuse_score": "46/50"
  },
  {
    "name": "物流表单审核：跨境物流表单审核，使用AI 表格，让效率起飞！",
    "type": "AI",
    "industry": "物流",
    "tags": [
      "物流",
      "跨境电商",
      "电商",
      "客服",
      "内容营销",
      "评价分类",
      "审核",
      "翻译",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天分享的是一个已成交客户的场景，目前这个客户每天AI服务运行数量上万次。这到底是在做啥？ 这个客户是一个国内头部跨境物流公司，服务对象是跨境电商卖家。当收到卖家们发来的运单时，运输物品往往填写不准确，需要人工来审核「运输物品名称」是否正确，每天大概有 1.5-3 万条数据，需要一个人做 2 小…",
    "value": [
      "该方案直接嵌入跨境物流核心业务流程，将人工审核时间从2小时降至分钟级，减少99.45%工作量，效率提升约180倍。",
      "方案已沉淀为标准化AI服务模板，核心能力（表单审核+内容分类+翻译）可跨行业应用。新客户仅需调整规则和上传表格即可上线（1-3天），交付成本低（后续<1人日）。"
    ],
    "steps": [
      "判断「运输物品名称」是否为英文，若中文需要翻译为英文。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803826067170660352",
    "rating": "优质",
    "tier": "M3",
    "value_class": "高业务价值 × 高复用价值",
    "business_score": "48/50",
    "reuse_score": "46/50"
  },
  {
    "name": "货运单识别：这么多组件怎么用？用一个案例告诉你组件搭配使用的强大之处！",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "物流",
      "识别",
      "多模态",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "一些大型的国际物流公司，每天会有大量的订单及货运单需要人工去提取关键字段的信息，然后录入到一些系统内。 订单及货运单的数量多，所需的人手比较多，且人工提取速度慢， 长时间工作后效率下降并开始出现一些低级错误。 企业每年在这方面产生的费用非常巨大（一些大型国际物流企业，每年在这部分的成本消耗能达到…",
    "value": [
      "该方案直接切入物流企业核心业务流程，针对年成本上千万的痛点提供自动化解决方案，降本提效强度显著，完美匹配企业已有预算项，规模适用性强，业务价值突出",
      "方案具备强跨行业通用性，已沉淀为标准化模板，客户可快速复制，交付成本结构较优，展示了平台多组件协同能力，具备显著的平台级价值和产品化潜力"
    ],
    "steps": [
      "AI通用处理组件，进行上传文件类型的判断。",
      "条件分支组件，根据不同的上传文件类型，引导到不同的处理流程。",
      "文件内容提取组件，借助月之暗面的提取能力，能以比较高的稳定性识别和处理文档类的内容",
      "普通【图片尺寸调整】组件，将图片类的文件，进行等比例的尺寸调整，提高后面的多模态模型识别能力",
      "多模态模型（GPT-4o），将前置处理过的文档内容/图片，按照用户需求进行识别和结构化提取。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803827501117624320",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "知识问答：搭建AI应用的核心思路分享——用AI复现人类的思考过程",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "制造业",
      "审核",
      "知识库",
      "知识问答",
      "向量检索",
      "智能体",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "某平台通过AI重构内容生产流程，将专业知识转化为通俗内容，成功将人工审核通过率提升20%，每月节省超100小时人力成本。这一实践揭示了AI落地行业场景的核心逻辑：用技术复现人类思考路径。 一个修车知识问答平台的AI 落地实践：在汽车维修行业，修车师傅常因专业文档晦涩难懂而求助知识问答平台，平台需…",
    "value": [
      "该方案直接优化内容生产核心流程，ROI清晰（效率提升5倍，月省100+工时），降本提效强度明显，匹配企业已有预算，规模适用性强，但缺少成本投入数据和完整的财务分析",
      "该方案具有极强的跨行业通用性（专业知识转化为通俗内容），客户可复制度高（3-5天部署），产品化潜力大（三层架构可封装），交付成本可控（首单5-6人日），平台级价值明显（标准范式可复…"
    ],
    "steps": [
      "人力瓶颈凸显 ：5人内容团队每月处理3000+问答需求，相当于每人每天需完成20条技术文档转化。",
      "知识库优先 ：强制AI先检索内部知识库",
      "智能兜底 ：未命中时自动触发联网搜索，抓取可信数据",
      "AI智能体 （决策逻辑具象化） 的三位一体，将人的经验转化为可持续复用的系统能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803837976756768768",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "45/50"
  },
  {
    "name": "专利筛查：AI助力医药专利筛查，解放资深医药行业专家的繁琐工作！",
    "type": "AI",
    "industry": "医药",
    "tags": [
      "医药",
      "内容营销",
      "识别",
      "提示词",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的故事来自一家苏州的医药生物企业，他们每个月需要处理1000多条专利筛查，找出其中涉及到分子专利的内容，然后判断专利中涉及到的分子类型和靶点。 在整个需求中，人工操作的痛点主要体现在以下几个方面：",
    "value": [
      "该方案解决医药企业核心研发支撑环节的痛点，ROI极其清晰：时间效率提升100倍，成本降低99.5%，每月1000条专利从需要16.7-50小时降至11分钟，成本从数千元降至20元，…",
      "方案已产品化为标准模板，客户可复制度高（1-2天上线），交付成本低（首单1-2人日，后续0.5人日）。在医药行业内通用性强，核心能力可跨行业复用。"
    ],
    "steps": [
      "角色设定与专业聚焦 ：我们让大模型扮演特定行业专家的角色，使其在处理特定领域的信息时展现出专业能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803839048324669440",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "44/50"
  },
  {
    "name": "评价分类：电商企业的用户投诉，如何用AI做5级分类，同时控制成本消耗和保证准确率",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "电商",
      "评价分类",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "这是一家上海的客户，是某知名餐饮品牌的代运营商，负责该餐饮品牌在线上渠道的运营，包括小程序、外卖门店等。这家客户每月收到的投诉数量有2万条， 每条投诉做人工登记分类需要 1 分钟，总共需要330个小时。 因此客户希望用AI的能力来节省人工的投入，于是找到了影刀AP团队。 这是一个典型的「文档分析…",
    "value": [
      "该方案直接解决电商企业投诉分类的刚需痛点，ROI清晰可量化：人工成本降低80%，AI成本优化79%，每月节省264小时人力。适用于不同规模企业，可直接替代现有人工流程",
      "方案具备极高的复用价值，跨行业通用，已产品化为标准模板。多模型组合+人工兜底的核心逻辑可快速复制，后续交付成本低。可作为平台级的文档分类解决方案"
    ],
    "steps": [
      "使用GPT4/Claude这些模型，分类准确率高，但是费用不低，算下来处理2万条投诉分类， 大概要8000块钱，准确率大约 40%。",
      "使用国产大模型，费用是更低了，但是准确率也同样下降。 处理2万条投诉分类，只要260块钱，但准确率只有20%。",
      "不管使用哪个模型，都与客户要求的 90%准确率相差甚远。",
      "使用多个模型组合，每个模型负责1级分类来解决这个问题，1-4 级分类的判断比较简单，使用国产的deepseek处理。第5级分类较难判断，使用 gpt4 处理。",
      "当遇到一些较复杂或含糊的评论时，模型无法判断如何准确分类，则指示大模型输出\"请求人工介入\"，交由人工来做二次处理。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/803840134695542784",
    "rating": "优质",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "47/50",
    "reuse_score": "44/50"
  },
  {
    "name": "如何理解\"专家智能体\"？——以 Glossa 翻译专家为例",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "跨境电商",
      "翻译",
      "数据分析",
      "工作流",
      "多智能体",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "📌 翻译为什么做不好？你可能也踩过这些坑 在企业进行内容出海的过程中，你可能已经遇到过这些常见问题：",
    "value": [
      "Glossa解决了企业内容出海中的核心翻译痛点，具有明确的预算匹配度和良好的规模适用性，但缺少量化的ROI数据和降本提效的具体证明，业务价值有待进一步验证",
      "Glossa具有极强的跨行业通用性和产品化程度，已沉淀为标准化的专家智能体。新客户复制成本低，后续交付成本可控，具备平台级价值，是高复用价值的解决方案"
    ],
    "steps": [
      "📌 翻译为什么做不好？你可能也踩过这些坑",
      "术语不统一，翻译质量不可控： 同一个术语，翻译结果五花八门，例如“工作流”被翻成了 workflow、service 等多个版本，无法保障产品术语一致。",
      "上下文超限，AI模型“断章取义”： 一次性喂给大模型几十页甚至上百篇文档，结果不是超出上下文限制失败运行，就是内容驳杂、翻译风格不统一。",
      "AI交互不清晰，反复沟通拉扯： 模型无法准确理解“你的真实需求”，往往一次输出不达标，你又得重复补充背景、补充偏好、补充风格……",
      "⚙️ 专家智能体如何解决翻译难题？",
      "操作步骤与实现方式",
      "步骤一：上传待翻译文档",
      "执行方式： 将需要翻译的文档（支持批量）上传至系统，作为翻译输入。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/858644455645126656",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "考试培训智能体：还在用\"题海战术\"搞培训？是时候让AI成为你的专属私教了",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "内容营销",
      "飞书",
      "SQL",
      "Agent",
      "Prompt",
      "工作流",
      "高复用价值"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "作为团队负责人或HR，你好不容易整理了一套厚厚的培训资料，精心设计了一套考题，组织大家考完试，然后呢？你对着一堆分数高高低低的表格，叹了口气。那些做错的题，就像散落在战场上的弹壳，除了证明“战斗”发生过，似乎再无他用。员工考完就忘，下次遇到同样的问题，大概率还是会错。 日复一日，我们投入大量精力…",
    "value": [
      "该方案解决企业培训考核的真实痛点，匹配已有预算项，规模适用性极强。但缺少量化ROI数据和具体降本提效证明，业务核心度属于重要辅助环节而非主业务流程",
      "方案跨行业通用性极强，产品化程度高，交付成本低，具有平台级复用价值。提供JSON包一键导入和详细实施指南，新客户3-5天即可上线，后续交付成本<1人日"
    ],
    "steps": [
      "错题无价值： 宝贵的错题数据被束之高阁，没有被系统地分析和复盘，成了被遗忘的“数字垃圾”。",
      "执行奖惩："
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/852023346422554624",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "数据分析智能体：你的数据，是不是只会\"躺\"在数据库里睡大觉",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "医药",
      "销售",
      "客服",
      "知识库",
      "数据分析",
      "SQL",
      "提示词",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "作为团队的管理者或核心成员，你明明知道公司最有价值的数据——比如销售记录、产品销量、客服工单——就静静地躺在某个数据库里。但每次你想了解一下“上周哪个工程师处理的工单最多？”或者“这个月华东区的销售额怎么样？”时，一场折磨就开始了。 你要么得打开复杂的BI系统，在一堆眼花缭乱的图表里艰难寻找；要…",
    "value": [
      "该方案解决了企业数据查询效率低下的痛点，通过自然语言交互降低数据获取门槛，适用于各规模企业。但缺少明确的ROI量化数据，业务价值主要体现在辅助决策和提升效率层面，非核心业务流程优化",
      "该方案具有极强的跨行业通用性和产品化潜力，核心能力已模块化，客户复制成本较低。可作为平台标准数据查询解决方案，支撑多个行业场景。交付成本结构合理，后续边际成本显著降低"
    ],
    "steps": [
      "仔细分析用户的需求",
      "AI分析需求，判断出这个问题需要查询数据库。",
      "AI决定调用它唯一的工具——“获取在线工单信息”工作流。",
      "AI将用户的需求，转化为对工作流的“指令”。",
      "工作流执行，自动生成SQL，查询数据库，并返回数据结果。",
      "AI拿到数据后，结合用户的原始问题，进行总结、分析，并最终生成一段通顺、有逻辑的回复。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/846354965810208768",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "商品税码智能匹配——基于非标准输入的知识库语义搜索匹配",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "法律",
      "销售",
      "知识库",
      "智能体",
      "提示词",
      "工作流",
      "RPA",
      "采购"
    ],
    "platforms": [],
    "overview": "在传统零售企业中，商品销售SKU数量庞大、品类复杂，尤其是参与政府或企事业单位招投标、大宗采购业务时，往往需根据甲方提供的商品名称，快速匹配出企业内部标准商品库中的税收分类编码与税率，用于后续合规开票。 名称不标准、匹配难度高 ：甲方提供的商品名称格式不一、描述模糊，人工比对费时又易错；",
    "value": [
      "该方案直接嵌入零售企业招投标和大宗采购的核心开票环节，解决了人工匹配税码效率低、易出错的痛点，完全匹配企业已有预算项，且具有极强的规模适用性。主要不足是缺少具体的ROI量化数据",
      "方案具有极强的跨行业通用性，核心逻辑高度可复用，已沉淀为标准化模板，交付成本结构合理。可作为平台级的'非标准输入语义匹配'能力模块，被多个行业和场景引用。"
    ],
    "steps": [
      "excel文件处理",
      "商品税率匹配",
      "结果文件导出",
      "用户交互设置",
      "数据预处理",
      "开始循环"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/839414676058759168",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "影刀AI Power打造产运智能体，破解信息过载与重复劳动困局",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "销售",
      "客服",
      "钉钉",
      "企业微信",
      "微信",
      "飞书",
      "售后",
      "知识库",
      "RPA"
    ],
    "platforms": [
      "钉钉",
      "企业微信",
      "微信",
      "飞书"
    ],
    "overview": "产品运营是负责连接产品和用户的工作，日常需要处理很多信息。随着业务扩大，运营要面对的客户沟通、信息记录和材料撰写等任务越来越多。在传统的工作方式下，处理这些事务会占用不少时间，影响到更需要花精力去做的用户分析和产品策略工作。 我们使用AI Power创建了一个名为“影刀AP超级运营助手”的智能体…",
    "value": [
      "该方案针对产品运营的辅助工作流程，有明确的应用场景和痛点，预算匹配度和规模适用性较好，但缺少量化的ROI数据，无法评估实际的降本提效强度，且非企业核心业务流程",
      "该方案具有较强的行业通用性和产品化潜力，核心能力已模块化，可快速复制到其他产品运营场景。但交付成本仍需要一定的定制化工作，主要是API对接和系统适配"
    ],
    "steps": [
      "自动记录与分析 ：把和客户的沟通内容发给助手，它能提取要点，自动填到客户跟进表里。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/833585109973147648",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "根治\"AI腔\"！模仿热门博主风格，生成短视频脚本",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "知识库",
      "RAG",
      "Prompt",
      "提示词",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "用户痛点 ： 很多想录制短视频的自媒体用户，苦于写不出自然流畅的脚本，而AI生成的文案又常常“AI味”太重，不够口语化。 核心价值 ： 帮助用户轻松获得高度模仿真人博主风格的文案，解决“写不出”和“AI腔”的问题。",
    "value": [
      "该方案解决内容营销中的脚本创作痛点，有明确的预算匹配度和良好的规模适用性，但缺少量化的ROI数据和降本提效证明，业务核心度偏辅助性",
      "方案具有极强的跨行业通用性和客户可复制性，已形成标准化工作流模板，交付成本低，具备明显的产品化潜力和平台级价值，是典型的可规模化复用方案"
    ],
    "steps": [
      "调整文案生成的提示词（Prompt）（匹配新行业或特定要求），"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/826653383837151232",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "43/50"
  },
  {
    "name": "提取公众号文章内容，并一键生成小红书卡片",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "电商",
      "小红书",
      "智能体",
      "Prompt",
      "提示词",
      "工作流"
    ],
    "platforms": [
      "小红书"
    ],
    "overview": "在企业内容传播中，公众号依然是构建专业影响力的重要阵地。然而随着内容平台的多元化，单一渠道分发已难以覆盖更广人群， 越来越多品牌希望将公众号文章转化为适配小红书的图文卡片 ，以提升复用效率与传播效果。 信息提炼难、效率低 ：公众号内容结构复杂，手动拆解费时费力；",
    "value": [
      "该方案解决市场营销部门的内容多平台分发需求，属于辅助业务环节。虽有自动化提效价值，但缺少量化ROI数据，降本提效强度不明确。适用于有双平台运营需求的各规模企业，但非核心业务预算项",
      "方案具有极强的跨行业通用性，已提供标准化模板和文件，新客户可快速复制。有一定产品化基础，但需进一步抽象。交付成本可控，但未达到零边际成本。目前为独立解决方案，平台级价值有待提升"
    ],
    "steps": [],
    "link": "https://www.yingdao.com/yddoc/ap/824543706209873920",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 中等复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "审核抖音达人的视频脚本，风险项直接同步至飞书多维表格",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "人事",
      "法律",
      "电商",
      "客服",
      "内容营销",
      "抖音",
      "飞书",
      "审核",
      "识别"
    ],
    "platforms": [
      "抖音",
      "飞书"
    ],
    "overview": "在内容电商、品牌投放等业务场景中，审核抖音达人的视频脚本是一项高频但重复的任务。脚本内容通常包含产品描述、使用场景、卖点表达等信息，品牌方需确保其中不存在虚假宣传、敏感话术或违规承诺。然而，当前大部分品牌仍依赖人工逐条审核，每天需处理上百份脚本，不仅费时费力，而且审核标准难以统一，常常出现遗漏或…",
    "value": [
      "该方案直接优化内容电商核心审核流程，效率提升15倍（5分钟→20秒），每天可节省约8小时人工时间。ROI清晰，匹配企业已有预算项，适用于不同规模的品牌方",
      "方案具有强通用性，适用于所有与达人合作的品牌方。已有标准化模板，新客户3-5天可上线，首单2人日，后续<0.5人日。核心能力可扩展至多平台内容审核场景"
    ],
    "steps": [
      "上传并提取达人脚本内容",
      "配置审核字段，并要求大语言模型将审核结果结构化输出"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/826004657729585152",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "44/50",
    "reuse_score": "42/50"
  },
  {
    "name": "品牌社媒发布，这样既省力又放心！",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "财务",
      "电商",
      "内容营销",
      "抖音",
      "小红书",
      "视频号",
      "微信",
      "审核",
      "工作流"
    ],
    "platforms": [
      "抖音",
      "小红书",
      "视频号",
      "微信"
    ],
    "overview": "很多企业已经用上AI工具来帮忙写公众号文章、小红书文案、微博短内容了，效率确实高。但对于品牌来说，总会担忧的一个点： “AI写得快是快，可万一它写跑偏了或者踩了雷，直接发出去了怎么办？” 今天 分享我们自己的真实实践，每天要在微信视频号、 B 站、小红书、抖音这些地方发内容，如何做到既快，又不能…",
    "value": [
      "该方案优化了社媒内容发布的辅助业务流程，具有良好的预算匹配度和规模适用性，但缺乏量化的ROI数据和明确的降本提效强度证明，业务核心度相对较低",
      "方案具有极强的跨行业通用性和平台级价值，可复制性和产品化潜力良好。交付成本相对可控，首单后边际成本有明显下降。三段式协同模式可扩展到多个业务场景"
    ],
    "steps": [
      "AI 负责生成内容：",
      "人来做最关键的事：审核把关！",
      "影刀 RPA来干最繁琐的事：执行发布！"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/824126641337151488",
    "rating": "良好",
    "tier": "M3",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "43/50"
  },
  {
    "name": "搭建一个能够逐步修改优化提示词Prompt的对话助手",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "物流",
      "制造业",
      "翻译",
      "智能体",
      "Prompt",
      "提示词",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "在搭建AI工作流时，用户们最常用的组件莫过于【大语言模型】组件。在实际应用大语言模型的过程中，许多用户常常会遇到以下几个挑战： 无论如何调整和润色提示词，模型的输出始终无法准确贴合预期需求，结果常常南辕北辙。",
    "value": [
      "该方案是一个AI开发辅助工具，主要服务于提示词优化场景，不直接嵌入企业核心业务流程。",
      "该方案具有极高的复用价值，完全跨行业通用，已沉淀为标准化产品，提供可下载配置文件，客户可自助快速部署，边际交付成本趋近于0。可作为AI开发平台的基础工具模块，具有较强的平台级价值"
    ],
    "steps": [
      "搭建用于初步优化提示词的AI工作流",
      "优化步骤",
      "搭建用于迭代优化提示词的AI工作流",
      "解析优化要求：理解优化要求，确定需要改进的重点（如增加约束、调整风格、精简表达等）。",
      "优化上一个提示词：在保留原任务核心意图的基础上，调整结构，使表达更精准、可执行。",
      "搭建“提示词优化助手”AI智能体"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/818668213553197056",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "46/50"
  },
  {
    "name": "AI技巧：智能体要用上百个工具，怎么选得准、用得快？这招很稳",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "医药",
      "知识库",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "现在越来越多公司在用智能体来自动处理各种任务，比如查资料、建日程、发请求……这些事得靠不同的技能或工具来完成。但问题来了：当一个智能体里面需要完成的任务数量多达10+甚至100+的时候，智能体怎么知道什么时候该用哪个？难道只能将智能体拆成多个小智能体来用吗？今天介绍的方案就来解决这个问题 痛点1…",
    "value": [
      "该方案通过知识库优化智能体工具调用，能显著降低token成本和提升响应速度，适用于已有AI智能体预算的企业。但缺少具体的ROI量化数据，且更偏向技术优化而非直接嵌入核心业务流程",
      "方案具有极强的跨行业通用性和平台级价值，可作为智能体应用的标准能力模块。客户复制成本较低，主要工作在工具信息整理。已形成清晰的产品化路径，但尚未完全标准化为开箱即用的产品"
    ],
    "steps": [
      "做一个叫「工具匹配」的工作流",
      "速度快，价格低 ：不让AI读一整本“工具说明书”，只给它几页，大大减少token开销。",
      "依赖匹配质量 ：如果知识库匹配不准，AI可能看到的工具就不太对。",
      "知识库维护成本 ：工具信息得写得清楚，不能乱七八糟，不然AI也看不懂。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/811501156823699456",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "44/50"
  },
  {
    "name": "AI 应用场景：回复邮件、竞品分析……的prompt 集合",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "销售",
      "跨境电商",
      "电商",
      "客服",
      "亚马逊",
      "翻译",
      "邮件",
      "工作流",
      "高复用价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "整理了跨境应用需要用的 prompt， 应用场景比较简单，在工作流中使用一个大模型即可处理。 结合业务场景需要再调整 prompt，具体如下：",
    "value": [
      "该方案针对跨境电商的辅助运营环节，预算匹配度较高，但缺少ROI量化数据和核心业务流程嵌入，降本提效强度有待验证",
      "方案已形成标准化prompt模板库，客户复制度高，交付成本低，但行业通用性和平台级价值有限，主要适用于跨境电商垂直领域"
    ],
    "steps": [
      "竞品分析",
      "生成 Listing 标题",
      "广告投放关键词提取",
      "生成 SEO 文章",
      "分析客户评论",
      "生成长尾词"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/810386829890785280",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "如何实现在线表格与影刀AI Power 知识库同步更新？（以飞书多维表为例）",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "财务",
      "制造业",
      "内容营销",
      "飞书",
      "知识库",
      "多模态",
      "工作流",
      "RPA",
      "发票"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "今天要分享的内容，是影刀 RPA 的各种案例知识库创建及更新的方案。影刀的小伙伴在服务的客户中，积累了大量有价值的案例，这些案例都是用多维表格登记管理的。 多维表中有场景名、标签、链接、ppt 等",
    "value": [
      "该方案解决内部知识管理的检索效率问题，属于辅助业务流程优化。虽有一定提效作用，但缺少量化ROI数据，业务核心度不高。适用于已使用影刀产品且有知识管理需求的企业，规模适用性较好",
      "方案具有很强的跨行业通用性和客户可复制性，核心能力已模块化，有清晰的产品化路径。首单交付成本3-5人日，后续可降至1-2人日。"
    ],
    "steps": [
      "多维表格导出成 Excel",
      "新建知识库-在知识库添加内容-上传Excel即可",
      "设置更新自动化",
      "当有记录修改时- 调用「知识库」开放API (< chunkid 修改片段，飞书自动化配置如下图：",
      "多维表格导出成 Excel，并将附件一起导出，使用“索引列名称”方便与表格内容匹配。",
      "使用影刀 RPA，循环 Excel 表格，将一行的内容拼接在一起，附件内容这样处理："
    ],
    "link": "https://yingdao.com/yddoc/ap/803470242416283648",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "API 调用时，如何实现连续对话并传参",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "电商",
      "客服",
      "智能客服",
      "智能体",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天背景是一个美妆电商客户的需求，通过监听的方式拿到抖店的买家消息后，希望触发 api，调用智能体，生成回复，发送给买家。这里有几个需求： 工作流的都是单次运行，不会留存历史记录的 ，所以，如果希望满足 b/c 两条需求，我们应该选择智能体来完成这个需求。",
    "value": [
      "该方案嵌入电商客服核心流程，匹配企业客服预算项，规模适用性强。但缺少ROI量化数据和降本提效的具体证明，影响业务价值评估的完整性",
      "方案具有强跨行业通用性和高可复制性，已提供模板下载，交付成本低。核心能力可作为平台级模块复用，但需进一步产品化抽象"
    ],
    "steps": [
      "搭建工作流，根据 ID 查询回复",
      "搭建工作流，用于增加对话轮次",
      "搭建智能体-兜底技能"
    ],
    "link": "https://yingdao.com/yddoc/ap/803515119032193024",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "医药渠道分销数据异名清洗",
    "type": "RPA+AI",
    "industry": "医药",
    "tags": [
      "医药",
      "销售",
      "知识库",
      "识别",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "AI智能数据清洗技术可将医药行业销售数据的异名处理效率提升90%以上，几分钟内完成上千条数据的标准化处理，实现数据处理从\"人工重复劳动\"到\"智能自动化\"的跨越！ 医药行业销售数据来源复杂多样，不同渠道和系统中的产品命名、规格、编码常出现不统一现象，需要进行标准化处理",
    "value": [
      "该方案直接解决医药行业销售数据标准化的核心痛点，效率提升90%以上，将数小时工作压缩至几分钟，准确率达100%，成本从专人投入降至几毛钱，ROI路径清晰，可直接替代现有人工数据清洗…",
      "方案具有很强的复用价值，核心能力'数据异名清洗'跨行业通用，已沉淀为标准化工作流模板，客户复制仅需1-2天，首单2-3人日后续<0.5人日，边际成本接近于0，可作为平台基础能力模块…"
    ],
    "steps": [
      "方案简介",
      "医药行业销售数据来源复杂多样，不同渠道和系统中的产品命名、规格、编码常出现不统一现象，需要进行标准化处理",
      "通过向量化标准信息表建立知识库，结合AI工作流实现对商品名称、编码、规格等关键信息的智能识别和自动标准化",
      "利用AI表格批量处理销售数据，无需手动逐条核对，几分钟内即可完成数千条数据的清洗，并保持百分之百的准确性",
      "数据量大处理慢：销售数据条目众多，人工识别和合并重复条目极其耗时，效率低下",
      "数据变化快学习成本高：人工处理方式固定，难以快速适应不断变化的新数据格式和异名情况",
      "人力成本高：需要专人长期投入大量时间进行数据清洗工作，占用宝贵的人力资源",
      "效率显著提升：几分钟就能完成3000多条数据的处理，将原本需要数小时甚至数天的工作压缩至分钟级"
    ],
    "link": "https://yingdao.com/yddoc/ap/803515431187468288",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "链接飞书多维表：让智能体轻松读取飞书/钉钉数据，三步完成数据分析",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "销售",
      "钉钉",
      "飞书",
      "数据分析",
      "报表",
      "工作流",
      "高复用价值"
    ],
    "platforms": [
      "钉钉",
      "飞书"
    ],
    "overview": "企业日常运营中，大量业务数据存储在飞书多维表、钉钉智能表格等在线协作工具中。 传统方式需要人工导出表格，耗时费力；",
    "value": [
      "该方案优化了企业数据分析的辅助流程，提供了80%的时间节省，但缺少详细的ROI量化数据和成本对比。",
      "该方案具有很强的跨行业通用性和客户可复制性，已沉淀为工作流模板，交付成本可控。可作为数据集成的标准解决方案，但需要进一步产品化为开箱即用的SaaS产品，以降低客户配置成本"
    ],
    "steps": [
      "连接数据源",
      "设置让AI筛选数据",
      "自动整理分析"
    ],
    "link": "https://yingdao.com/yddoc/ap/803515752177553408",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "热点搜集并生成选题：自动搜集各平台热点，一键生成贴合企业调性的\"蹭热点\"选题建议",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "财务",
      "人事",
      "制造业",
      "跨境电商",
      "电商",
      "抖音",
      "知识库",
      "知识问答",
      "信息提取"
    ],
    "platforms": [
      "抖音"
    ],
    "overview": "告别手动追热点！搭建AI工作流与AI智能体，助力市场团队实时捕捉热点，一键生成符合企业调性的选题建议，解放人力，让营销更高效！ 市场团队需要紧跟热点，快速产出营销内容，但手动追热点耗时耗力，且难以保证内容质量和品牌关联度。",
    "value": [
      "该方案解决市场团队热点追踪和选题生成的效率问题，将原需数小时的工作压缩至3分钟，提效显著。",
      "方案具有极强的跨行业通用性和较高的产品化潜力，核心能力已模块化且技术路径清晰。"
    ],
    "steps": [
      "利用各大平台接口获取实时热点信息（以抖音、微博、知乎为例）",
      "从给出的上百个热点中，挑选出5个与AI、大语言模型、人工智能、机器人自动化、RPA等相关的热点话题。",
      "标题强化模块",
      "标题要求"
    ],
    "link": "https://yingdao.com/yddoc/ap/803516078762475520",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "AI 伴学，知识就这么轻松的掌握了！",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "销售",
      "客服",
      "内容营销",
      "飞书",
      "知识库",
      "提示词",
      "工作流",
      "高业务价值"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "通过AI 拟人演练对话、精准分岗考核、实时反馈解析，让员工告别低效填鸭式学习，轻松掌握核心技能，企业培训效率直线提升！ AI角色模拟与沉浸式培训 ：通过AI智能体模拟真实业务场景中的角色（如客户、销售、教练），提供可随时访问的互动演练环境，解决传统真人演练效率低、成本高的问题。",
    "value": [
      "嵌入企业培训核心环节，完美匹配已有预算项，通过AI替代真人演练和人工考核，显著降低人力成本并提升培训效率。",
      "跨行业通用性极强，已沉淀为标准化产品模块（工作流模板+智能体模板+数据库结构），客户可复制度高（首单5-7天，后续2-3天），具备平台级价值，可作为独立产品对外销售"
    ],
    "steps": [
      "方案简介",
      "AI角色模拟与沉浸式培训：通过AI智能体模拟真实业务场景中的角色（如客户、销售、教练），提供可随时访问的互动演练环境，解决传统真人演练效率低、成本高的问题。",
      "个性化人设与对话规则：基于岗位需求定制AI角色的人设、语言风格及知识库，结合上下文关联技术实现自然对话，提升演练的真实感和针对性。",
      "智能考核与分层训练：根据岗位特性设计差异化考核模式（如销售场景模拟、技术原理考核），支持练习即时反馈与考试综合评估，强化知识掌握效率。",
      "真人演练效率低：依赖真人扮演特定角色（如农场主、客户），耗时耗力且问题重复率高，难以规模化开展。",
      "培训互动真实性不足：AI回复“AI味”过重，缺乏沉浸感，新人难以代入实际业务场景。",
      "考核方式单一僵化：统一考试无法匹配不同岗位需求，练习与考核缺乏动态反馈机制，培训效果难以量化。",
      "高效灵活的场景模拟：7×24小时提供多角色对话演练，缩短培训周期，降低人力成本，新人可随时反复练习。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803516719098478592",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "45/50"
  },
  {
    "name": "批量作图实在麻烦？AP帮你分分钟搞定上百张海报！",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "客服",
      "售后",
      "智能体",
      "Prompt",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天这个场景，来自于影刀内部的市场小伙伴们。影刀售后和市场团队，每年都要举办数智金榜活动，鼓励那些深度使用RPA、积极推广RPA大赛、RPA+AI创新应用的优秀客户，金榜活动是影刀与客户之间建立更紧密合作关系的重要契机。 由于活动涉及的获奖企业及个人数量众多，因此市场小伙伴们在制作宣发物料的过程…",
    "value": [
      "该方案解决市场营销中批量制作宣发物料的痛点，节省70%人工成本，效率提升显著。但属于辅助业务流程，非核心环节，且缺少详细的ROI对比数据。",
      "该方案具有较强的跨行业通用性，核心逻辑可复用，已形成清晰的模块化流程。但新客户复制需要一定定制化工作（3-7天），产品化潜力较好但需进一步抽象。"
    ],
    "steps": [
      "获奖文案批量生成",
      "搭建AI工作流-获奖文案批量生成",
      "提取出该对接人的角色，并简述其在RPA项目落地中的角色任务，字数控制在50以内",
      "分条总结该客户RPA项目落地的成果，字数控制在150字以内，分条不超过4条",
      "分条总结该客户RPA项目落地的效果，字数控制在100字以内，分条不超过3条",
      "配置AI表格，批量运行AI工作流"
    ],
    "link": "https://yingdao.com/yddoc/ap/803517038834868224",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "35/50"
  },
  {
    "name": "退货助手：跨境电商卖家退货处理助手",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "电商",
      "亚马逊",
      "审核",
      "识别",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "亚马逊卖家每天要处理大量退货申请。目前的处理流程是: 使用影刀RPA+影刀AI Power，实现全流程自动化处理退货申请：",
    "value": [
      "该方案解决跨境电商卖家退货处理的核心痛点，完全匹配企业已有预算，规模适用性强。但缺少明确的ROI量化数据和降本提效的具体证明，影响了业务价值的整体评分",
      "方案已沉淀为标准化模板，具有良好的产品化基础和平台级价值。但行业通用性受限于电商领域，客户复制需要一定的RPA配置工作，交付成本有优化空间"
    ],
    "steps": [
      "判断是否属于卖家责任",
      "耗时长:需要逐个分析退货原因、准备申诉材料",
      "要求高:需要有经验的人员来判断责任归属、撰写有说服力的申诉材料",
      "通过RPA循环退货申请列表，提取买家的退货理由，使用AI分析退货理由是否属于卖家责任",
      "如果判断结果为非卖家原因，则提取更多信息，使用AI编写申诉信",
      "通过RPA提交申诉后，继续循环处理下一条申请"
    ],
    "link": "https://yingdao.com/yddoc/ap/803519623331241984",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "38/50"
  },
  {
    "name": "直播间弹幕回复：RPA+AP 实现直播无人值守及 AI 回复弹幕",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "客服",
      "知识库",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "很多电商公司都会通过直播带货，通过直播能够提升 到店的流量、商品的曝光、下单转化率 。 一个主播连续播2小时，就需要换人了。但各个平台对直播时长都有要求，且直播开播前两小时几乎都是在积聚人气的阶段，全程采用真人直播就需要好几个主播轮换，还需要考虑助播人员，并不划算。",
    "value": [
      "该方案解决电商直播的核心痛点，实现无人值守降低人力成本，适用于各规模电商企业。但缺少具体的ROI量化数据，如成本节省百分比、效率提升倍数等关键指标",
      "该方案具有很强的复用价值，适用于电商直播的多个子行业，已经高度模块化和模板化，新客户部署成本低（1.5人日），具备产品化潜力和平台级价值"
    ],
    "steps": [
      "影刀 RPA获取表格里的数据，保存为字典。时间为KEY，其余内容为 VALUE。生成的字典列表为：",
      "异步调用【批量弹幕回复】子流程：",
      "每隔 2 分钟获取一次当前页面用户发送（剔除发送人为“小助理”）的弹幕，与上一次去重",
      "调用 影刀AI Power-AI 工作流匹配弹幕回复",
      "无限循环,获取 OBS 时间，匹配是否存在于字典列表中。",
      "若存在，则执行推荐商品、录制/不录制讲解、发布上墙话术。若不存在，则继续下一次循环。"
    ],
    "link": "https://yingdao.com/yddoc/ap/808672949133848576",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "智能客服：手把手搭建一个会问会记的AI智能客服（初级）",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "飞书",
      "智能客服",
      "知识库",
      "智能体",
      "工作流",
      "高复用价值"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "企业在使用AI客服时经常需要导出对话记录，用于整理FAQ并更新知识库。 现有AI客服遇到不会的问题往往无法妥善处理",
    "value": [
      "该方案解决了企业客服知识库更新的痛点，属于重要辅助业务流程。但缺少量化ROI数据，降本提效强度的证明不足，预算匹配度和规模适用性较好",
      "方案具有极强的行业通用性和平台级价值，核心逻辑可复用，产品化潜力高。但交付成本仍需优化，特别是IM系统对接部分需要进一步标准化"
    ],
    "steps": [
      "首先创建一个知识库，并上传一个包含了历史问答对的excel文档，等待切片及向量化存储完成。",
      "搭建写入知识库的工作流",
      "创建一个AI智能体，新增2个技能：",
      "【技能二】 场外求助 ：无答案时自动转人工",
      "正常对话技能检索无答案时，跳转到场外求助技能。",
      "AI智能体将上一步返回的内容，作为答案，发送给提问的用户。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803520620278714368",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "如何构建一个会反问的知识问答助手",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "知识库",
      "知识问答",
      "智能体",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "在企业知识问答系统中，我们经常遇到这样的情况：用户提出非常模糊的问题，AI会直接基于知识库给出答案。这与人类交流方式很不一样 - 当遇到不明确的问题时，人们会先通过反问来理解真正的需求。今天我们就来聊聊如何打造一个更像人类的、会适时反问的 AI 问答助手。 如下图所示，我们需要完成以下几个关键步…",
    "value": [
      "该方案优化企业知识问答系统，通过反问机制提升交互体验，匹配企业已有预算项，具有一定通用性。但缺少ROI量化数据和降本提效的具体证明，业务价值有待进一步验证",
      "方案具有很强的跨行业通用性，已沉淀为标准化模板，客户可快速复制。核心能力模块化程度高，交付成本可控。具备一定的平台级价值，但需要进一步验证实际复用情况"
    ],
    "steps": [
      "构建企业知识库",
      "利用大语言模型组件，分别构建“问题回复专家”和“问题优化专家”",
      "基于第二步的设计，构造一个完整的AI工作流",
      "将搭建好的AI工作流，整合进一个AI智能体，实现循环对话"
    ],
    "link": "https://yingdao.com/yddoc/ap/803521254609108992",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "知识库预处理：分享一个IM知识库同步更新影刀AI Power 知识库方案",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "内容营销",
      "钉钉",
      "飞书",
      "知识库",
      "智能体",
      "工作流",
      "RPA",
      "高复用价值"
    ],
    "platforms": [
      "钉钉",
      "飞书"
    ],
    "overview": "企业的各种资料往往存储在钉钉/飞书/企微在线知识库文档中，影刀AI Power 产研团队曾经调研过IM 产品的知识库，希望影刀AI Power知识库能够和 IM 知识库自动同步，但是 钉钉/飞书/企微的知识库，都不对外开放查询API 接口 ，无奈之下只能放弃。 但搭建出企业自己的强大的智能体，就…",
    "value": [
      "该方案解决了IM知识库与AI Power知识库同步的实际痛点，具有较好的规模适用性和预算匹配度，但缺少量化的ROI数据和降本提效证明，业务核心度一般",
      "方案具有极强的行业通用性和平台级价值，可作为标准知识库预处理模块复用。虽然需要一定的RPA定制化，但核心逻辑清晰，交付成本可控，产品化潜力较大"
    ],
    "steps": [
      "片段添加： 使用 RPA 抓取所有知识库文档，添加到影刀AI Power 知识库中：",
      "第 3 步：逐个打开子页面，复制内容，在影刀AI Power 知识库中添加片段-粘贴内容"
    ],
    "link": "https://yingdao.com/yddoc/ap/803521905484763136",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "41/50"
  },
  {
    "name": "AI技巧：怎样提高大模型对多层级标签体系的理解精度",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "客服",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "一家大型餐饮企业每月需要分析数万条顾客评价，并为其打上多级标签。 例如“清淡”和“寡淡”的定义相似，且“清淡”是好评、“寡淡”是差评",
    "value": [
      "该方案直接优化餐饮企业顾客反馈分析流程,ROI清晰:准确率提升50%(60%→90%),成本降低90%(万元→千元),处理速度快(1000条21分钟)。",
      "方案核心逻辑(双模型协作+任务拆分)具有较强通用性,可应用于电商、酒店等多个行业的用户反馈分析场景。已有清晰的产品化路径,但标签体系定制化程度高,导致客户复制成本较高(3-5人日)。"
    ],
    "steps": [
      "成本高：由于处理的评价内容多，如果使用4o模型处理每条评价成本0.15元，每月费用接近一万元。",
      "准确性要求高：需准确理解评价内容，提取标签、标签关系、好差评及原因",
      "需要结合RPA去循环数据进行处理，每次跑几万条数据要跑一天。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803522543066144768",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "44/50",
    "reuse_score": "38/50"
  },
  {
    "name": "知识问答智能体：如何让智能体根据输入语言来回答，并能够\"猜你想问\"",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "知识库",
      "知识问答",
      "翻译",
      "PDF",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个历史悠久的跨国企业，他们的员工来自世界各地。希望能将企业内部的各种文档传入知识库中，给 AI 补充知识，并通过智能体来解答员工的各种疑问。 看起来这是一个非常常见的企业知识问答智能体，使用 AI 智能体中-「知识」就能解决。但是在沟通过程中，发现有3个问题仅通过「知识」无法满足:",
    "value": [
      "该方案解决跨国企业多语言知识问答痛点，嵌入重要业务流程，可优化现有预算项，规模适用性强。但缺少量化ROI数据，降本提效强度需要实际验证",
      "方案具有极强的复用价值，跨行业通用，客户可快速复制，已高度产品化并提供模板，交付成本低且边际成本递减，可作为平台核心能力模块"
    ],
    "steps": [
      "搭建工作流",
      "解析 PDF"
    ],
    "link": "https://yingdao.com/yddoc/ap/803523185333096448",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "信息分析提取：借助AI，20秒完成药品临床II期的SAE/AESI报告分析到录入",
    "type": "AI",
    "industry": "医药",
    "tags": [
      "医药",
      "财务",
      "客服",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "一家港股上市的医药集团正在进行药物II期临床试验，目标是评估新药在患者中的药效和毒性。试验期间，患者会参与用药并记录不良反应，最终形成SAE/AESI报告。 在试验过程中，药企需要处理大量不良反应报告。分析人员需从中提取关键信息，工作量大且耗时。",
    "value": [
      "该方案直接解决药企临床试验核心环节的刚性需求，将SAE报告处理从人工耗时流程压缩至30秒，显著降低人力成本。",
      "方案在医药临床试验领域具有强复用性，标准化流程使新客户部署仅需3-5天，首单3-5人日后续1-2人日。已具备产品化基础，可作为平台级文档智能处理能力。"
    ],
    "steps": [
      "上传系统：RPA将excel上传到医药公司的系统，完成数据录入。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803523879507185664",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "46/50",
    "reuse_score": "43/50"
  },
  {
    "name": "业务培训教练：去\"AI味\"小技巧，让AI助理进行更真实的对话模拟",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "人事",
      "智能体",
      "提示词",
      "工作流"
    ],
    "platforms": [],
    "overview": "今天要分享的案例是来自一个连锁农场，他们每个月都会给新晋区域经理做业务模拟演练，区域总经理扮演农场主与新人对话，但这个真人演练耗时长，效率不高，每次演练的问题也比较重复。 他们希望 AI 能够扮演教练的角色，这样新人就可以随时随地的进行演练了。",
    "value": [
      "该方案解决企业培训场景的真实需求，可替代现有预算项，规模适用性强。但缺少量化的ROI数据和降本提效的具体证明，业务核心度属于重要辅助环节而非核心流程",
      "方案具有很强的跨行业通用性和产品化潜力，已沉淀为标准化模板。核心能力可作为平台级模块被多个场景引用，客户复制成本较低，交付效率高"
    ],
    "steps": [
      "效果演示",
      "如何实现？",
      "第一步，建立人设：",
      "第二步，设置问答规则：",
      "第三步，创建AI智能体："
    ],
    "link": "https://yingdao.com/yddoc/ap/803525812890615808",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "智能客服：影刀高级任务计划+AI智能体，轻松实现各种定制化的业务需求",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "客服",
      "微信",
      "飞书",
      "智能客服",
      "识别",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "微信",
      "飞书"
    ],
    "overview": "影刀的客服团队最近在使用AI智能体来解答客户的常见问题，目前已嵌入到 现在，在飞书端的嵌入方式也已经验证运行了一段时间，今天分享一下具体的使用方法。",
    "value": [
      "该方案优化了企业客服流程，解决了飞书机器人的实际痛点，已在多渠道验证。但缺少量化的ROI数据和降本提效证明，业务价值描述偏定性",
      "方案具有很强的跨行业通用性和平台级价值，已在多个渠道验证。配置流程相对标准化，交付成本可控，但仍需一定的技术配置工作"
    ],
    "steps": [
      "向AI智能体发送http请求",
      "聊天类型判断",
      "发送飞书消息"
    ],
    "link": "https://yingdao.com/yddoc/ap/803526794852679680",
    "rating": "良好",
    "tier": "M3",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "42/50"
  },
  {
    "name": "法律小助手：内置法律知识库和联网搜索功能，帮助法务快速答疑基础问题",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "法律",
      "客服",
      "知识库",
      "智能体",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "为了帮助法务部门更高效地应对法律咨询，越来越多的企业希望搭建法律问答助手以应对常规和简单的问题，从而可以让法务部门花更多的时间解决复杂的问题。然而法律问题的解答较专业，通用大语言模型的回答常常模糊不清，难以解决实际问题。 给智能体加上知识库和联网能力，这个问题就可以解决了，先来看效果：",
    "value": [
      "法律问答助手属于企业辅助业务，可优化法务部门效率，适用于不同规模企业且匹配现有预算项。但缺少量化ROI数据，降本提效强度无法准确评估，业务核心度一般",
      "方案跨行业通用，已产品化为标准模板，客户复制成本低（3-5天上线），交付成本结构合理（首单2-3人日，后续<1人日），具有较强的平台级复用价值"
    ],
    "steps": [
      "构建全面的知识库",
      "企业个性化调整",
      "基于AI工作流，创建法律问答小助手"
    ],
    "link": "https://yingdao.com/yddoc/ap/808944560420368384",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "44/50"
  },
  {
    "name": "AI智能体：搭建组织专属的产品考核/陪练专家",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "销售",
      "客服",
      "内容营销",
      "知识库",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "很多企业想要解决新人入职培训或新产品发布后的销售培训，这需要产品专家或培训专家花费精力对一批又一批的人进行讲解和培训，那么有没有办法通过AI搭建一个产品考核或陪练的助手呢？先来看实现效果： 通过将场景的流程拆解后，我们就可以将关键节点用AI搭建出不同的角色来辅助完成整个工作流程。基于这个思路，我…",
    "value": [
      "该方案解决企业培训的重要需求,可替代人工培训降低成本,预算匹配度高且规模适用性强,但缺少量化的ROI数据支撑,如能补充具体的成本节省比例和效率提升数据,业务价值将更加突出",
      "方案跨行业通用性强,实现步骤清晰可复制,已模块化且交付成本低,具有明显的产品化潜力和平台级价值,是一个高复用价值的标准化解决方案"
    ],
    "steps": [
      "搭建一个AI角色，主要是为了根据文档内容生成题库。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803528751806238720",
    "rating": "良好",
    "tier": "M1",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "售后问题分析：使用RPA+AI，实现\"无人化\"将售后问题整理成表",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "物流",
      "制造业",
      "电商",
      "售后",
      "RPA",
      "供应商",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自一家家具电商客户，他们的售后反馈信息，通常来自多个渠道，包括电商平台、快递群和安装师傅等。 客服每次收到反馈，都需要手动将客户姓名、订单号、供应商和反馈内容等信息记录到如下的Excel中，这个过程非常繁琐。",
    "value": [
      "该方案解决电商售后处理的重要环节，匹配企业已有预算项，规模适用性好。但最大问题是缺少量化ROI数据，无法证明实际降本提效强度，导致业务价值说服力不足",
      "方案具有清晰的产品化路径和较高的平台级价值，可作为RPA+AI结合的标准模块。行业通用性和客户可复制度良好，交付成本可控。主要不足是需要针对不同客户的渠道和字段进行配置"
    ],
    "steps": [
      "RPA收集各渠道（客服账号）的反馈信息。",
      "利用AI Power自动判断并提取相关信息。",
      "RPA再将提取的信息自动填入Excel表格中。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803529075090644992",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "40/50"
  },
  {
    "name": "发票识别：RPA+AI高效识别多格式发票",
    "type": "AI",
    "industry": "财务",
    "tags": [
      "财务",
      "制造业",
      "销售",
      "电商",
      "识别",
      "邮件",
      "工作流",
      "RPA",
      "供应商",
      "发票"
    ],
    "platforms": [],
    "overview": "一家总部在中国的跨国企业，全球有多家线下店铺。每个月，这些店铺会产生大量水电费、租金、维修等发票。这些发票需要人工分类、整理，并手动录入到统一的数据格式中。这个过程费时费力，容易出错。 发票格式和语言多样 ：不同国家的店铺发票格式和语言各不相同。",
    "value": [
      "该方案解决了跨国企业发票处理的重要业务痛点，匹配企业财务部门的常规预算项，具有较好的规模适用性。但缺少具体的ROI量化数据和降本提效的具体数字，影响了业务价值的完整性",
      "该方案具有极高的复用价值，跨行业通用，核心能力已模块化，可快速复制到新客户。支持多语言、多格式发票识别，具有明显的平台级价值，可作为财务自动化的核心能力模块"
    ],
    "steps": [
      "RPA流程",
      "AI工作流",
      "多个AI工作流协作"
    ],
    "link": "https://yingdao.com/yddoc/ap/803530068065914880",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "智能客服：SKU那么多，如何让 AI 准确的针对每个产品做出回答",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "物流",
      "智能客服",
      "知识库",
      "知识问答",
      "智能体",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个美妆客户做的智能客服场景。智能客服是很常见的 AI 应用场景，给大模型加一个外挂知识库就可以解决。但在美妆客户这里，却不是这么简单的。这是为什么呢？ 那么如何解决这些问题呢？先来看效果：",
    "value": [
      "该方案解决美妆电商售前客服的核心痛点，匹配企业已有预算项，具有跨行业复用潜力。但缺少量化ROI数据和降本提效的具体证明，业务价值说服力不足",
      "方案具有较好的行业通用性和可复制性，已沉淀为标准化模板。但知识库准备和维护成本较高，产品化程度和平台级价值有待进一步提升"
    ],
    "steps": [
      "产品知识库无法通用：美妆 sku 众多，每个产品功效不同、使用方式不同、适用肤质也不一样，产品知识问答无法通用。",
      "大模型容易答非所问：虽然有整理规范的知识库，但如果直接给大模型加上知识库，若没有针对消费者提问的产品做出回答，大模型很可能“答非所问”。",
      "效果演示",
      "如何实现?",
      "拆分知识库，将知识库分为通用问答（主要是发货时间、物流类的问题）和非通用问答（产品功效、适合肤质、使用方式等问答）",
      "客户的问题先去通用问答里向量化搜索，再用产品 id去非通用问答里关键词搜索。",
      "大模型整理回答，这里在 prompt 里可以做要求，优先参考关键词搜索出来的资料。",
      "配合智能体，设计对话步骤。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803579393421692928",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "40/50"
  },
  {
    "name": "关键信息提取：提炼公众号文章中的\"商机\"",
    "type": "AI",
    "industry": "销售",
    "tags": [
      "销售",
      "人事",
      "内容营销",
      "微信",
      "信息提取",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "微信"
    ],
    "overview": "今天和大家分享一个投资机构使用AI的案例，他们利用“影刀AP”从公众号文章中提取特定投资人的观点等信息，从而帮助业务人员提高与投资人的沟通效率，实现“知己知彼，百战不殆”！ 这家公司每年需要处理至少5万篇公众号文章，原本全靠人工完成。每篇文章大约2000字，读完并提取关键信息通常需要5分钟。如果…",
    "value": [
      "该方案嵌入投资机构的重要业务流程，ROI路径清晰，效率提升10倍，成本节省约93%，每年处理5万篇文章，单篇成本仅0.3元。",
      "方案核心能力（文本信息提取）具有平台级价值，可跨行业应用，已有模板化基础。"
    ],
    "steps": [
      "实现效果"
    ],
    "link": "https://yingdao.com/yddoc/ap/803529742034276352",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "38/50"
  },
  {
    "name": "资讯检索：统一收口，多个资讯平台的检索和总结，RPA+AI实现全链路自动化",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "制造业",
      "内容营销",
      "钉钉",
      "企业微信",
      "微信",
      "飞书",
      "工作流",
      "RPA"
    ],
    "platforms": [
      "钉钉",
      "企业微信",
      "微信",
      "飞书"
    ],
    "overview": "今天分享的案例来自一家老牌食品生产和批发零售企业。他们平时需要及时获取生产原材料价格、市场动态和消费者需求等信息。 结合RPA和AI，实现资讯检索与分析，全链路的自动化",
    "value": [
      "该方案解决市场信息收集的辅助业务需求，预算匹配度和规模适用性较好，但缺少明确的ROI量化数据和降本提效的具体证据，业务核心度一般",
      "该方案具有强跨行业通用性和平台级价值，核心逻辑可复用，但RPA部分需要针对不同网站定制，交付成本中等，产品化潜力较好但需进一步抽象"
    ],
    "steps": [
      "这些信息需要员工手动从各个食品网站上检索和分析。由于涉及多个特定网站，检索麻烦，手动操作效率很低。",
      "总结资讯关键词",
      "RPA检索特定资讯网站",
      "AI分析总结文章内容",
      "AI助理统一收口，实时对话"
    ],
    "link": "https://yingdao.com/yddoc/ap/803529394161307648",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "41/50"
  },
  {
    "name": "竞品信息分析整理：RPA 结合 AI ，实现快速高效的竞品信息搜集！",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "内容营销",
      "OCR",
      "识别",
      "信息提取",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自某公司电商运营部门，他们每周都会有专人负责收集竞品的信息，包括： 品牌名称、产品名称、核心/重点卖点、品牌信息、活动信息、促销价格、会员信息、其他信息 。 这些信息往往散落在商品主图、商品详情图的各个地方，人工收集这些信息非常耗时，而往往需要搜集的竞品信息多达上百款。",
    "value": [
      "该方案解决电商运营核心痛点，将1周人工工作自动化，效率提升10倍以上，适用于各规模电商企业的竞品分析场景，ROI清晰但缺少详细量化数据",
      "方案通用性强，已有标准化模板，可快速复制到新客户。核心能力'图片智能提取'具有平台级价值，可应用于多个行业和场景，交付成本可控且边际成本递减"
    ],
    "steps": [
      "搭建调试 AI 服务，告诉 AI 你需要它整理哪些字段",
      "搭建 RPA，自动抓取主图/详情图，并 OCR 提取图片文字。",
      "RPA 拿到AI 服务分析整理后清晰明了的信息，写入 excel 表格。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803530459363528704",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "售后客服：AI智能售后客服自动追问关键词",
    "type": "RPA+AI",
    "industry": "客服",
    "tags": [
      "客服",
      "电商",
      "智能客服",
      "售后",
      "知识库",
      "识别",
      "Prompt",
      "工作流",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天要分享的案例来自一家做汽车零配件的电商客户，他们想将AI智能客服运用到自己的售后服务流程中，然而在实施过程中却遇到了一些挑战。 那么，如何通过AI智能客服高效完成这一追问和信息收集过程？",
    "value": [
      "该方案直接优化售后客服核心流程，匹配企业已有预算，规模适用性强。主要不足是缺少量化ROI数据，无法准确评估降本提效的具体强度",
      "方案具有极强的跨行业通用性和产品化潜力，核心逻辑可快速复制。交付成本较低，可作为平台级的智能信息收集能力模块"
    ],
    "steps": [
      "提取<用户提问 中用户描述的汽车“车型”",
      "和<产品资料库 中的内容进行匹配，如果只有一个匹配的结果，则直接输出“完全匹配”",
      "如果有多个相似的匹配结果，则只输出产品型号，换行输出。",
      "如果和“车型”能完全匹配，则输出“完全匹配”，并列出查到的“车型”",
      "如果仅能匹配“品牌”，但无法确定具体的“车型”，则输出“部分匹配”，并列出查到的“车型”",
      "如果“品牌”和“车型”都无法匹配，则输出“无法匹配”"
    ],
    "link": "https://yingdao.com/yddoc/ap/803580669324410880",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "内部问答助手：发图片，写总结，做统计，还会引导填问题工单",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "人事",
      "电商",
      "客服",
      "知识库",
      "知识问答",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天和大家分享一个全天候待命的服装行业小帮手，它是个内部知识问答助手，可以帮助员工快速找到商品资料，完成信息总结和数据计算。要是碰到超出知识范围的问题，问答助手不会随便编个答案来糊弄员工，而是会引导员工提交问题工单。",
    "value": [
      "该方案服务于电商企业内部员工的信息查询和决策支持，属于重要辅助环节。虽然功能实用且适用于不同规模企业，但文档缺少关键的ROI量化数据，无法评估实际降本提效强度",
      "该方案具有较高的产品化程度和复用价值，核心逻辑标准化，主要定制在数据层面。适用于零售行业的多个细分领域，交付成本可控，且展示了平台的多项核心能力，具有平台级价值"
    ],
    "steps": [
      "只要员工发送产品编码或者名字，助理就能回复产品的图片"
    ],
    "link": "https://yingdao.com/yddoc/ap/803802291185827840",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "42/50"
  },
  {
    "name": "AI技巧：AP+飞书，搭建你的飞书AI问答助手",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "跨境电商",
      "内容营销",
      "1688",
      "钉钉",
      "飞书",
      "知识库",
      "工作流",
      "高复用价值"
    ],
    "platforms": [
      "1688",
      "钉钉",
      "飞书"
    ],
    "overview": "今天的分享来自一个客户的诉求，他们使用的办公软件是飞书，希望实现群里@机器人就可以快速回答，但尝试了飞书智能伙伴后，受限于模型能力，发现回答效果不太理想。他们更希望使用影刀AI Power搭建好的 AI 服务去回答群里的问题，这样也能够实现 不同的客户端（企微、钉钉等）调用，只需维护同一个知识库…",
    "value": [
      "该方案解决企业内部协作场景的智能问答需求，有明确的客户诉求和预算匹配度，支持跨平台复用降低维护成本。但缺少量化的ROI数据，且未直接嵌入主业务流程，业务核心度和降本提效强度有待提升",
      "方案具有极强的跨行业通用性和客户可复制性，配置流程标准化，交付成本低。已形成清晰的产品化路径，可作为AP平台与办公软件集成的标准方案。唯一不足是尚未完全产品化为开箱即用的解决方案"
    ],
    "steps": [
      "创建一个机器人指令。点击链接 (<",
      "操作步骤里选择发送http请求"
    ],
    "link": "https://yingdao.com/yddoc/ap/803802644966203392",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "43/50"
  },
  {
    "name": "AI小技巧：借鉴吴恩达的「多智能体协作」思路，提高联网问答的精准性",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "客服",
      "售后",
      "知识库",
      "RPA",
      "多智能体",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的案例依然来自敢为人先的影刀内部～ 和大部分公司一样，影刀的不同部门有各自专用的知识库，售后团队主要帮助客户解决使用RPA时遇到的问题，过程中售后同学需要频繁搜索知识库。",
    "value": [
      "该方案解决售后团队知识库查询的实际痛点，匹配企业已有预算，规模适用性强。但缺少量化ROI数据，无法准确评估降本提效的具体强度",
      "方案跨行业通用，客户可快速复制，产品化程度高，交付成本低，具有平台级价值。是典型的高复用价值解决方案"
    ],
    "steps": [
      "导出线上知识库 ：使用RPA批量下载线上知识库文件至本地。",
      "知识库导入 ：将预处理后的表格上传至AI Power知识库，自动完成向量化切片处理"
    ],
    "link": "https://yingdao.com/yddoc/ap/803803001331920896",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "售后AI助理：让AI助理连接企业的知识库，使员工查询信息变得高效又便捷",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "客服",
      "售后",
      "知识库",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天的案例依然来自敢为人先的影刀内部～ 和大部分公司一样，影刀的不同部门有各自专用的知识库，售后团队主要帮助客户解决使用RPA时遇到的问题，过程中售后同学需要频繁搜索知识库。",
    "value": [
      "该方案嵌入售后服务这一重要业务流程，优化了企业已有的知识库查询预算项，具有良好的规模适用性。但缺少量化的ROI数据和具体的降本提效证明，业务价值的可衡量性不足",
      "方案具有极强的行业通用性和客户可复制性，已经形成标准化的四步流程，产品化程度高。交付成本结构合理，具有明显的平台级价值，可以作为知识库问答的标准解决方案"
    ],
    "steps": [
      "导出线上知识库 ：使用RPA批量下载线上知识库文件至本地。",
      "知识库导入 ：将预处理后的表格上传至AI Power知识库，自动完成向量化切片处理"
    ],
    "link": "https://yingdao.com/yddoc/ap/803803359721742336",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "45/50"
  },
  {
    "name": "AI搜索：只需两步，AI增强内容搜索能力，让用户快速获得高质量答案！",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "客服",
      "知识库",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "我们复盘AI助理后，发现还有很大一部分用户习惯使用搜索框来搜索问题，因此我们对影刀社区再次进行了升级，引入了AI能力增强搜索框搜索： 新引入的AI搜索已经嵌入社区搜索结果的侧边栏，更加符合用户的检索习惯，进一步提升了用户体验和问题解决的效率。",
    "value": [
      "该方案优化了企业客户服务流程，通过AI增强搜索降低维护成本，匹配现有客服预算项。但缺少量化ROI数据，无法评估具体降本提效强度，且主要适用于有社区的中大型企业",
      "该方案具有很强的跨行业通用性和平台级价值，核心能力已模块化，可快速复制。但仍需要针对不同客户进行知识库对接和调优，交付成本有待进一步优化"
    ],
    "steps": [
      "AI搜索功能：AI搜索可以将用户输入的搜索内容自动到知识库中进行向量化检索，提供更符合用户提问语义的搜索结果。此外，AI搜索和AI助理共享同一知识库，大幅降低了维护成本。",
      "推荐相似答案：通过“猜你想问”功能，AI可以推荐相似的答案，帮助用户获取更多相关信息，减少由于提问不明确导致的检索困难。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803804433036840960",
    "rating": "良好",
    "tier": "M3",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "用户群客服：如何设计AI 客服问答工作流，让每个问题都能有回应",
    "type": "RPA+AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "客服",
      "知识库",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的业务场景来自市场部的同学，他们希望在用户群里引入 AI 客服，能够自动回答用户提出的各种问题，这是一个很常见的知识库问答的工作流，搭建 AI 服务后，并通过RPA监控群聊，调用 AI 服务生成回复即可。可是在实际运行的过程中却发现： 于是AP 团队在原有的知识库问答工作流的基础上，做了这样…",
    "value": [
      "该方案解决企业用户群客服的实际痛点，属于重要业务环节，预算匹配度和规模适用性好，但缺少量化的ROI数据和降本提效证明，业务价值有待进一步验证",
      "方案具有很强的通用性和可复制性，适用于所有需要用户群客服的行业。核心逻辑已标准化，新客户上线成本低，具备明确的产品化路径和平台级价值"
    ],
    "steps": [
      "客户会问到知识库以外的问题或者与AI 角色无关的问题，AI 回答显得比较僵硬。",
      "无法回答的问题目前需要主动前往调用记录里一条条查看。",
      "不管是知识库以外的问题，还是与AI 角色无关的问题，都能够有针对性的回复。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803804789604880384",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "44/50"
  },
  {
    "name": "问卷总结：让AI帮你分析问卷调查结果，优化培训流程更轻松",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自于一个组织了员工培训的客户，当培训课程结束后，人事向参会员工发送问卷调查，并回收了上百份问卷调查结果。 在统计问卷调查结果的时候，却遇到了难题😰：",
    "value": [
      "该方案优化HR培训问卷分析流程，降低人工处理成本，但属于辅助业务环节。有明确的AI调用成本数据（0.003元/份），但缺少人工成本对比和效率提升量化指标，ROI路径不够清晰。",
      "方案具有很强的行业通用性和客户可复制性，已初步产品化为模板。核心逻辑可复用，新客户仅需调整配置参数。交付成本较低，首单2-3人日，后续1人日内可完成。"
    ],
    "steps": [
      "回收的问卷结果需要汇总进一个Excel表单，直接把源数据导出，发现内容复杂且结构混乱，可读性差。",
      "问卷调查软件中自带的分析内容冗长，无法总结出有用的信息。",
      "使用月之暗面的文本内容提取功能，提取问卷调查源数据 excel 中的内容，一次性完成数据收集。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803807270315724800",
    "rating": "良好",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "SEO 广告创意生成：做一个创意自动生成的小助理，灵感创意要多少有多少！",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "人事",
      "电商",
      "客服",
      "知识库",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个来自培训行业的使用场景，做企业咨询培训的客户，流量很大一部分来自百度搜索的广告投放，而想要广告投放好，就需要 抓取各种关键词搜索后的广告排名，并根据这些靠前的广告排名，生成大量的广告创意去测试投放效果 。 客户这个 SEO团队中，只有负责人对 SEO 优化有丰富经验， 所以希望…",
    "value": [
      "该方案直接服务于企业核心营销流程的SEO广告投放环节，完全匹配企业已有营销预算，规模适用性强。",
      "该方案具有极强的跨行业通用性和客户可复制性,已形成标准化的三步实现流程。交付成本结构优秀,首单3-5人日,后续1-2人日。具备平台级价值,可扩展为'专家经验复制'的通用能力模块。"
    ],
    "steps": [
      "根据用户期望的互动流程，设计 AI 助理。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803807629830176768",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "评价分类：AI消费者洞察，从评论中多维度分析！",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "评价分类",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "客户的评价是复杂的，在重视口碑的餐饮行业中，客户的评价会包括“菜品”、“环境”、“服务”和“其他”等多个维度，每条评价都需要精细拆解后，再分析对每个维度的情感：如 A 客户对“菜品”满意，但是对“服务”却不太满意；B 客户对“环境”非常不满意，但是对“服务”却很满意，这些客户最终都给了好评，但如…",
    "value": [
      "该方案嵌入餐饮行业重要的口碑管理流程，将人工逐条分析上千条评论的工作全自动化，显著提升效率。匹配企业已有的评价分析预算，且具有良好的规模适用性。",
      "方案具有很强的跨行业通用性（任何需要分析客户评价的行业都可应用），客户可复制度高（3-5天即可上线），已沉淀为标准模板，交付成本低（首单2-3人日，后续<1人日），具有一定的平台级…"
    ],
    "steps": [
      "对拆解后的评论片段进行情感分析，方便统计每个维度的“中评/差评”。",
      "根据分类要求，依次分类并结构化输出结果。",
      "通过RPA批量处理评论，并将分析结果存储到模板中。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803807981757763584",
    "rating": "良好",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "材料核查：让AI帮你快速核查待入职员工材料真实性。",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "制造业",
      "审核",
      "识别",
      "多模态",
      "RPA",
      "简历",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "这是一家国内大型汽车制造企业，人事经常需要核查待入职员工提交的材料。 利用好多模态大模型的识别能力，结合梳理清楚的业务逻辑和规则，可以把枯燥且繁杂工作交由AI来完成，显著提高效率！",
    "value": [
      "该方案解决HR入职审核的刚需场景，预算匹配度高，规模适用性强。但缺少量化ROI数据，降本提效的具体强度无法准确评估。属于重要但非核心业务流程",
      "该方案具有极强的跨行业通用性和客户可复制性，已沉淀为标准化模板，交付成本低，边际成本递减明显。核心能力可作为平台级文档审核模块被多场景引用"
    ],
    "steps": [
      "学历证书和教育经历需要匹配",
      "离职证明的真伪判断，且时间和简历的工作经历时间需要匹配",
      "搭建一个AI服务，借助多模态大模型的识别能力，识别提交的材料，并给出分析结果",
      "通过RPA的循环处理文件的能力，结合AI服务，完成批量处理的场景"
    ],
    "link": "https://yingdao.com/yddoc/ap/803810231842160640",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "评价分析：如何一次提取文本中的多种关键信息",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "销售",
      "电商",
      "内容营销",
      "识别",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "在许多业务场景中，从长文本中提取重要信息是一项常见但繁琐的任务。以电商行业为例，客户需要 定期从大量产品评论中提取特定信息来分析产品的销售情况 。目前，这些客户主要依靠人工分析评论，不仅耗时费力，还容易出错。更重要的是，不同人的评价标准难以统一。 大语言模型凭借其出色的语义理解能力，可以高效完成…",
    "value": [
      "该方案解决电商评价分析的重要业务需求，ROI清晰（效率提升8倍，成本节省87.5%），降本提效效果显著，匹配企业已有预算项，但主要适用于中大型电商企业",
      "方案具有很强的跨行业通用性和客户可复制性，已沉淀为标准化模板，交付成本低且边际成本递减，具备平台级能力潜力，可应用于多个场景"
    ],
    "steps": [
      "大语言模型自动提取 ：系统根据配置的字段名称，自动从输入文本中提取相关信息并格式化输出。",
      "以表格形式输出 ：所有提取的信息以表格形式呈现，便于查看和使用。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803822511887978496",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "对话机器人：影刀行政AI助理上岗，让行政工作更简单，问答变得更便捷",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "人事",
      "钉钉",
      "飞书",
      "知识库",
      "高复用价值"
    ],
    "platforms": [
      "钉钉",
      "飞书"
    ],
    "overview": "今天的案例依然来自敢为人先的影刀内部～ 和大部分公司一样，影刀内部行政岗位的主要职责是处理内部问答和管理行政信息。然而，这项工作常常非常繁琐和重复，导致行政人员的大量时间被占用。此外，若回答不及时还可能导致员工满意度下降。",
    "value": [
      "该方案优化了企业内部行政问答流程，具有较好的预算匹配度和规模适用性，但由于缺少量化ROI数据，且属于辅助业务而非核心业务，业务价值评分中等",
      "该方案具有极高的复用价值，跨行业通用，客户可快速复制，已具备产品化基础，交付成本低，可作为平台核心能力模块推广"
    ],
    "steps": [
      "创建知识库 ：只需上传文件到知识库，大模型会根据文档语义自动解析切片，快速完成知识库的创建"
    ],
    "link": "https://yingdao.com/yddoc/ap/803822869057908736",
    "rating": "良好",
    "tier": "M3",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "44/50"
  },
  {
    "name": "私域运营助理：AI 助理协助答疑，私域运营更加得心应手！",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "企业微信",
      "微信",
      "知识问答",
      "高业务价值"
    ],
    "platforms": [
      "企业微信",
      "微信"
    ],
    "overview": "今天是一个来自鞋服行业客户使用 AI 助理的案例。他们有多个私域粉丝群， 有专门的人负责私域运营，解答粉丝关于产品的问题以及其他跟品牌相关的问题。他们希望有一个小助理，能够协助快速生成答案，方便回复给用户。 梳理了需求后，他们要求这个小助理，需要具备以下三个能力：",
    "value": [
      "该方案嵌入私域运营这一重要业务环节，优化企业已有预算项，具有良好的规模适用性。但缺少量化的ROI数据和降本提效证明，业务价值的可衡量性不足",
      "该方案具有极强的跨行业通用性和客户可复制性，已形成标准化的三层架构，具备产品化潜力。交付成本可控，边际成本递减明显，可作为平台级的私域运营标准解决方案"
    ],
    "steps": [
      "回答产品问题，这个实际上对应的就是两个「技能」，使用两个 AI 服务实现精准查询和模糊匹配。",
      "回答品牌问题，这个其实就是「 AI 知识问答」，属于 AI 助理的第二层能力。",
      "与粉丝侃大山，这个就是「基础规则」，属于 AI 助理的兜底能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803823223497969664",
    "rating": "良好",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "产品培训：AI 助理扮演角色，帮助新人更快成长！",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "销售",
      "知识库",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个来自疫苗生物科技公司的案例，这类科技公司，对于销售人员的专业要求较高，需要经过严格的培训后才能上岗。那么如何让新人能够更牢固的掌握产品知识呢？ 他们想到了给新人搭建的 AI 助理，用于新人培训。在这个 AI 助理中，有两个技能：",
    "value": [
      "该方案应用于销售培训辅助环节，匹配企业培训预算项，可降低培训师人力成本并提供灵活的练习方式。但缺少量化ROI数据，无法证明具体的降本提效强度，主要适用于有规模化培训需求的中大型企业",
      "方案具有极强的跨行业通用性和复制性，核心能力已模块化，交付成本低（首单2-3人日，后续<1人日）。可作为平台级的'角色扮演培训'能力模块，支持多个培训场景复用，产品化潜力大"
    ],
    "steps": [
      "AI 扮演客户，对产品提出问题，让新人作答。",
      "AI 扮演专业销售，解答客户提出的产品问题。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803823581074567168",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "42/50"
  },
  {
    "name": "对话机器人：帮助供应商快速获取产品型号信息",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "制造业",
      "销售",
      "钉钉",
      "飞书",
      "供应商",
      "高复用价值"
    ],
    "platforms": [
      "钉钉",
      "飞书"
    ],
    "overview": "今天的案例来自一家家电制造业的企业，由于该行业需要维护广泛的销售渠道，因此经常需要与经销商、分销商和渠道商沟通，以提供产品信息和支持。这些合作伙伴也会通过官方产品库查询详细的产品信息、功能和卖点。 然而，在高频查询过程中存在很多痛点：",
    "value": [
      "该方案嵌入家电制造企业的渠道商支持流程，解决产品信息查询痛点，预算匹配度和规模适用性较好，但严重缺乏量化ROI数据和具体的降本提效证明",
      "该方案具有很强的跨行业通用性和产品化潜力，可作为平台级智能查询助理能力模块，客户复制成本低，交付效率高，适合规模化推广"
    ],
    "steps": [],
    "link": "https://yingdao.com/yddoc/ap/803823930625757184",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "对话机器人：影刀社区AI升级——引入AI助理快速解答开发者问题",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "飞书",
      "知识库",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "今天的案例来自咱们影刀内部～众所周知，影刀为RPA开发者提供了一个线上社区和帮助中心，让开发者在遇到问题时可以搜索相关帖子或向社区中的其他开发者求助。 🤔然而，这种方式虽然有效，但随着社区内容的日益丰富，筛选信息变得费时。一些开发者倾向于直接发布新问题，而不是先搜索历史帖子，使得影刀服务团队需要…",
    "value": [
      "该方案直接优化客户服务流程，完美匹配企业客服预算，规模适用性强。但ROI数据不够完整，缺少人力成本节省的具体量化指标，降本提效强度的证明不够充分",
      "跨行业通用性极强，产品化程度高，可快速复制到新客户。已有标准化workflow和知识库管理机制，具备平台级价值。交付成本可控，后续边际成本较低"
    ],
    "steps": [
      "嵌入AI助理图标： 在社区页面右下角嵌入AI助理，开发者可以快速找到入口。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803824288322301952",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "聊天记录质检：使用AI 卓越的总结能力，检查大量聊天记录！",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "财务",
      "物流",
      "制造业",
      "电商",
      "客服",
      "内容营销",
      "质检",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "告别客服质检的“大海捞针”，AI助力电商代运营客服团队「快速分析海量聊天记录」，精准定位问题，提升质检效率和客户满意度！ 电商代运营客服团队面临着多平台、海量客户聊天记录的质检难题。人工质检不仅耗时费力，效率低下，而且难以做到全面覆盖，容易遗漏问题。",
    "value": [
      "该方案针对电商代运营客服质检这一重要业务环节，提供了明确的降本提效价值，预算匹配度高且规模适用性强。主要不足是缺少具体的量化ROI数据",
      "方案具有极强的复用价值，跨行业通用性好，客户可快速复制，已沉淀为标准化产品模板，交付成本低，且能体现平台核心能力，可被多个场景引用"
    ],
    "steps": [
      "创建 AI 应用，方便单独在网页当中打开使用。",
      "Examples（示例）： 例如："
    ],
    "link": "https://yingdao.com/yddoc/ap/803824643804237824",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "标题生成：跨境铺货文案一键批量生成",
    "type": "AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "销售",
      "电商",
      "内容营销",
      "翻译",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自一家做跨境电商的公司，他们通常需要把同一件商品在不同的账号上批量上架，为的是通过多个账号和店铺提高商品的曝光率和销量，同时也能分散风险，避免因为单个账号的问题影响整体销售。 在这个场景中，最好每个上架商品的文案内容都有所不同。主要有几个原因：",
    "value": [
      "该方案直接嵌入跨境电商核心业务流程，完美匹配企业已有预算项（文案/翻译人力成本），规模适用性极佳。主要不足是缺少量化ROI数据，未说明具体节省了多少成本或提升了多少效率",
      "复用价值极高。方案高度标准化，新客户1-2天即可上线，边际成本趋近于0。核心能力（多语言生成、批量差异化）可跨行业复用，具有平台级价值。唯一不足是未明确说明平台级复用情况"
    ],
    "steps": [
      "大模型翻译，可以生成各种国家的语言（下图示例中以中文举例，方便查看效果）",
      "多个大模型生成，保证生成的内容差异化足够大",
      "调试完成后，就可以用表格批量生成大量产品文案"
    ],
    "link": "https://yingdao.com/yddoc/ap/803824994611630080",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "46/50"
  },
  {
    "name": "商品listing：跨境商家非常重要的商品listing来啦",
    "type": "RPA+AI",
    "industry": "跨境电商",
    "tags": [
      "跨境电商",
      "法律",
      "电商",
      "内容营销",
      "亚马逊",
      "翻译",
      "多模态",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "利用AI快速生成高质量亚马逊商品Listing，大幅降低跨境电商运营的人力成本，提升商品曝光和转化率！ 跨境电商卖家，尤其是拥有海量SKU的商家，需要在多个亚马逊站点上架产品，创建商品Listing（商品详情页）是日常运营的刚需。",
    "value": [
      "该方案解决跨境电商核心业务痛点，针对每天需生成几千上万个Listing的刚需场景，可大幅降低人力成本。预算匹配度高，规模适用性强，但缺少具体的ROI量化数据",
      "方案已产品化为标准模板，复制成本极低，具有很强的平台级价值。虽然当前聚焦亚马逊平台，但核心能力可扩展至其他电商场景，产品化和规模化潜力大"
    ],
    "steps": [
      "方案简介",
      "跨境电商卖家，尤其是拥有海量SKU的商家，需要在多个亚马逊站点上架产品，创建商品Listing（商品详情页）是日常运营的刚需。",
      "本方案结合多模态大模型的图片分析能力和文案撰写能力，能够根据商品图片和少量信息，快速生成符合亚马逊平台规范、包含关键词、且符合当地语言习惯的商品Listing，并可进行侵权词检测和修改。",
      "通过AI自动化生成Listing，可以显著降低人工成本，提高Listing创建效率，提升商品在亚马逊平台的搜索排名和用户转化率。",
      "Ta 们怎么用",
      "如何实现？"
    ],
    "link": "https://yingdao.com/yddoc/ap/803827143791882240",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "批文日期识别：加入逻辑，AI提取信息更准确！药品批文批准日期及有效期识别",
    "type": "AI",
    "industry": "医药",
    "tags": [
      "医药",
      "OCR",
      "识别",
      "多模态",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的案例来自一位医药客户，他们需要人工一张张录入药品批文的批准日及有效期，就像这样： 他们想要借助 rpa+AI 提升效率，解放人工操作。但发现自动化识别遇到了难题：",
    "value": [
      "该方案解决医药企业药品批文录入的刚需问题，具有明确的合规价值和预算匹配度，规模适用性强。但缺少具体的ROI量化数据和效率提升对比，影响了整体业务价值评分",
      "方案具有清晰的技术路径和较好的平台级价值，在医药行业内可快速复制。但行业通用性受限于特定业务规则，产品化程度需进一步提升。交付成本结构合理，后续边际成本可控"
    ],
    "steps": [
      "尝试了 OCR 和多模态，都无法准确的识别出结果。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803836624177213440",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "38/50"
  },
  {
    "name": "交易数据提取：让AI帮你提取PDF中的表格信息（下篇）：电商交易数据表",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "销售",
      "跨境电商",
      "亚马逊",
      "审核",
      "OCR",
      "识别",
      "PDF",
      "数据分析",
      "多模态"
    ],
    "platforms": [
      "亚马逊"
    ],
    "overview": "在电商行业中，销售数据分析对于业务决策至关重要。例如，亚马逊的交易数据通常包含在多个表单中，如收入、支出、转账和税费等。这些表单通常以PDF格式存在于一个汇总页面中。传统的OCR识别方法往往会将不同表单的数据混淆在一起，无法满足业务对分表单提取信息的需求。 为了提高数据处理的精准性，某消费品公司…",
    "value": [
      "该方案直接服务于电商企业的核心财务数据处理流程，ROI清晰（0.3元/份，30秒处理，100%准确率），显著降本提效，匹配企业已有预算项，具有良好的规模适用性",
      "方案在电商行业具有较好的复用性，核心技术模块化程度高，具有平台级价值。但行业通用性有限，新客户复制需要一定的定制化工作（3-7天），首单交付成本中等（3-5人日）"
    ],
    "steps": [
      "将PDF转换为高清PNG图像 ：首先，将PDF表单转换为高清PNG图像，确保图像清晰，便于后续处理。",
      "思维链引导 ：在复杂场景中，给大语言模型提供思维链引导，帮助其更好地理解和处理数据。",
      "错误反馈与优化 ：当输出效果有偏差时，将偏差内容作为特别提醒加入prompt中，优化模型的识别能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803836984405233664",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "44/50",
    "reuse_score": "38/50"
  },
  {
    "name": "个例报表提取：让AI帮你提取PDF中的表格信息（上篇）：医药个例安全性报表",
    "type": "AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "人事",
      "医药",
      "物流",
      "制造业",
      "电商",
      "审核",
      "OCR",
      "识别",
      "PDF"
    ],
    "platforms": [],
    "overview": "通过OCR技术和大语言模型自动提取药品试用表单信息，将人工录入工作效率 提升10倍 以上，让数据录入人员从繁琐的手动提取中解放出来，专注于数据审核与分析！ 各行业都存在大量PDF表单数据需要手动录入系统的场景，特别是在医药行业，药品试用表单信息的录入不仅耗时且易出错，严重影响工作效率。",
    "value": [
      "该方案直接解决医药行业核心业务痛点，ROI路径清晰（效率提升10倍，成本0.5元/份），降本提效强度显著，匹配企业已有预算项，且具有跨行业复用潜力",
      "方案具有很强的跨行业通用性（医药、电商、供应链等），已沉淀为标准化模板，客户可复制度高，交付成本低（0.5元/份），具有平台级价值，可作为基础能力模块被多个解决方案引用"
    ],
    "steps": [
      "从PDF提取出文字信息 。我们使用合合信息的文件提取能力，能够非常完整的保留文件格式。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803829398437892096",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "43/50",
    "reuse_score": "44/50"
  },
  {
    "name": "视频翻译：拯救工作的每一分钟：如何把中文视频轻松转英文字幕和英文解说",
    "type": "RPA+AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "跨境电商",
      "翻译",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "今天的故事来自影刀这一家正在走向世界的企业。 So... 影刀的目标客户中，有一些希望通过英文快速了解影刀的产品，比如RPA和AP。今天就跟大家“戏”说一下，我们如何实现这个任务！Let's ride with AI Power! 把一个中文视频转成英文字幕和英文解说，需要经过三个阶段：",
    "value": [
      "该方案解决出海企业的视频本地化需求，将传统需要多个专业角色（翻译、配音员、录音棚）的流程压缩至30分钟，有明确的时间节省但缺少成本量化数据，属于重要但非核心业务流程的效率提升工具",
      "方案具有极高的跨行业通用性和可复制性，已沉淀为标准化模板，新客户可快速上手。交付成本低，边际成本趋近于0，具备明确的平台级价值和产品化潜力"
    ],
    "steps": [
      "把原始视频提取声音，声音转写成文本。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803838332962050048",
    "rating": "良好",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "44/50"
  },
  {
    "name": "竞品分析：用AI能力补齐传统 RPA工作流，完成美妆竞品全自动分析！",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "销售",
      "电商",
      "客服",
      "内容营销",
      "抖音",
      "工作流",
      "RPA",
      "高业务价值"
    ],
    "platforms": [
      "抖音"
    ],
    "overview": "今天我们来探讨一家美妆头部品牌遇到的RPA典型场景——竞品分析。 🔥 短视频的竞品分析的过程以往需要大量人力来查找和统计信息 ，在有RPA之后，视频的基础数据（如点赞数、粉丝数和评论）可以被自动化抓取，但想要获得更全面的监控分析，还需要了解短视频内的各类关键信息，这一步仍需人工逐条观看和统计。",
    "value": [
      "该方案解决电商美妆行业竞品分析的核心需求，匹配企业已有预算项，具有良好的规模适用性。但缺少具体的ROI量化数据和效率提升指标，影响了整体业务价值评分",
      "方案具有极强的复用价值，已沉淀为标准化模板，跨行业通用性强，交付成本低，具备平台级能力潜力。可快速复制到其他需要短视频内容分析的场景"
    ],
    "steps": [
      "AI视频处理 ：将抓取到的视频转换为音频，再将音频转换为文字。",
      "AI文本分析 ：使用大模型对文字内容进行分析，提取出关键字段。",
      "AI生成报告 ：分析统计好的全部竞品信息，生成全面的竞品短视频分析报告。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803838691658706944",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "简历筛选：非标的简历筛选，用 AI 怎么做？用 AI 的灵活性满足企业在人才甄选上的各种要求！",
    "type": "AI",
    "industry": "人事",
    "tags": [
      "人事",
      "电商",
      "内容营销",
      "提示词",
      "简历",
      "高业务价值"
    ],
    "platforms": [],
    "overview": "今天的故事来自一家食品公司，这家公司正处于快速发展阶段，每天需要筛选大量简历。了解影刀 AI Power后，他们发现了其中的提效空间。 这是一个典型的「文档分析处理」的场景，在AP场景模板库里有一个简历筛选模板，但客户在使用时遇到了一些问题：",
    "value": [
      "简历筛选方案嵌入HR招聘流程的重要环节，ROI路径清晰（筛选工作量减少68%），提效明显，适用于各规模企业，可优化现有招聘预算。",
      "简历筛选方案跨行业通用，已沉淀为标准化模板，客户可复制度高（需3-7天轻量定制），交付成本低（首单2-3人日，后续<1人日），具有一定的平台级价值。核心能力可应用于其他文档处理场景"
    ],
    "steps": [
      "AI筛选结果只有“合适”和“不合适”， 导致一些潜在人才被过滤 。",
      "针对不同判断标准设置打分权重 ，根据简历满足的分值来计算整体得分。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803839773365735424",
    "rating": "良好",
    "tier": "M2",
    "value_class": "高业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "10分钟搞定，抖音视频处理全套解决方案",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "法律",
      "内容营销",
      "抖音",
      "审核",
      "知识库",
      "Agent",
      "智能体",
      "Prompt",
      "工作流"
    ],
    "platforms": [
      "抖音"
    ],
    "overview": "链接一复制，下载的却是满屏水印、分辨率感人的“糊片”。 好不容易把视频扒下来，想二次创作，又担心一不小心踩了平台红线，账号凉凉。",
    "value": [
      "该方案解决内容运营团队的实际痛点，能优化现有人力成本支出，规模适用性强。但作为辅助工具而非核心业务流程，且缺少明确的ROI量化数据，业务价值中等偏上",
      "方案高度模块化，提供完整代码和Json包，新客户1-3天可复制。核心能力可跨平台应用，多个模块可被其他方案引用，具有很强的平台级价值和产品化潜力"
    ],
    "steps": [
      "文案合规难：平台规则变来变去，人眼审核永远追不上。",
      "找到模板中心的“ 抖音视频-无水印链接提取 ”，整段 Ctrl+C Ctrl+V 贴进去。",
      "把输入设置为「用户发送的抖音链接」，输出设置为「下载链接」。",
      "新建工作流「视频解析」。",
      "组件 1 ：上传文件（接收用户回传的视频）。",
      "组件 2 ：「视频转音频」，勾选输出 MP3。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/852475306397483008",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "38/50",
    "reuse_score": "43/50"
  },
  {
    "name": "把最强模型都\"招进组\"，一个Agent全搞定",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "内容营销",
      "PDF",
      "Agent"
    ],
    "platforms": [],
    "overview": "用 AI 用得多的朋友可能已经发现了，各家模型各有所长： ✅ 所以我们搭了这个——AI 缝合匠 Agent",
    "value": [
      "该方案解决了多AI工具订阅成本高、使用分散的痛点，主要应用于辅助业务场景。虽然能优化企业已有预算项，但缺少明确的ROI量化数据和成本节省证明，业务核心度和提效强度有限",
      "方案具有极强的跨行业通用性和客户可复制性，已沉淀为标准化模板，交付成本低。但产品化程度和平台级价值仍有提升空间，需要进一步抽象为更易用的产品形态"
    ],
    "steps": [
      "👀 先聊聊为什么做这个 Agent",
      "Claude 写代码最顺手",
      "Gemini 看长文最拿手",
      "GPT-4o 画图惊艳",
      "Deepseek 便宜还稳定",
      "多家会员一起开，贵得肉疼",
      "聊天记录分散，想找回一条都费劲",
      "没有一个地方能“一句话说完，系统自己决定该用谁来干这活儿”"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/841187229804654592",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "42/50"
  },
  {
    "name": "SEO增长技巧之关键词驱动的自动化内容工厂",
    "type": "RPA+AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "制造业",
      "销售",
      "知识库",
      "识别",
      "智能体",
      "提示词",
      "工作流",
      "RPA",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "在多数 B2B 企业的增长模型里，搜索引擎仍是获取高意向线索的关键入口。随着搜索结果竞争越来越激烈，用户搜索的问题越来越细，比如“怎么拆分销售阶段”“标签字段填哪里”，如果网站没有对应的内容，就很难被搜索引擎选中显示在前面。 因此，企业需要写更多长尾文章，来弥补空缺。丰富多样的文章内容，等于给每…",
    "value": [
      "该方案直接解决B2B企业SEO内容生产的核心痛点，可将单篇文章生产时间从3-4小时压缩至几分钟，效率提升10倍以上，匹配企业现有内容编辑预算，具有良好的规模适用性。",
      "方案具有极强的跨行业通用性和产品化潜力，已沉淀为标准化模板，新客户3-5天即可上线。"
    ],
    "steps": [
      "关键词生成选题",
      "选题生成标题",
      "标题生成大纲",
      "大纲生成文章"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/834367383059243008",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "42/50",
    "reuse_score": "45/50"
  },
  {
    "name": "彻底解放 PPT 工具人，重复做 PPT 的事情交给 AI就好了！",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "人事",
      "制造业",
      "销售",
      "客服",
      "内容营销",
      "售后",
      "报表",
      "多模态",
      "智能体"
    ],
    "platforms": [],
    "overview": "背景痛点：好案例，为何困在了PPT里？ 这是一家高速发展的SaaS公司。在服务客户的过程中，积累了海量的成功案例——这些是公司最宝贵的资产。为了将这些价值传递给更多潜在客户，每个案例都需要制作成精美的PPT，用于销售演示、文档嵌入和市场宣传。",
    "value": [
      "该方案解决内容团队PPT制作效率问题，时间节省显著（30倍提升），但属于辅助业务流程优化，非核心业务环节。ROI路径不够清晰，缺少具体的成本节省数据和投入产出比。",
      "方案具有一定的行业通用性和产品化潜力，核心能力已模块化，但客户复制仍需较多定制化工作（3-7天）。首单交付成本较高（5-7人日），后续可降至2-3人日，但边际成本未趋近于0。"
    ],
    "steps": [
      "获得生成 PPT 文案的提示词",
      "ppt文案示例 主标题： 约 XX 字",
      "PPT文案示例",
      "搭建生成 PPT 文案的工作流",
      "幻灯片整体风格",
      "顶部标题栏 此区域位于幻灯片顶部，用于展示核心主题和品牌Logo。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/838604390202236928",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "32/50"
  },
  {
    "name": "打通微信公众号，实现AI智能体自动发布每日新闻",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "内容营销",
      "微信",
      "审核",
      "Prompt",
      "工作流"
    ],
    "platforms": [
      "微信"
    ],
    "overview": "想让AI帮你更新公众号，却被API卡住了？ 你是不是也曾幻想过，让AI成为你7x24小时在线的超级小编，自动抓热点、写稿子、配图，然后“唰”地一下，文章就自动发布到了你的微信公众号上？从此，日更不再是压力，而是一种常态。",
    "value": [
      "该方案优化了公众号内容生产流程，能节省部分人力时间，但缺少量化ROI数据。适合有日更需求的内容驱动型企业，但非核心业务环节，降本提效强度中等",
      "方案已模块化并提供模板，具备一定产品化基础，但受限于微信公众号单一平台，跨行业通用性一般。新客户复制需要3-5天定制化配置，交付成本中等"
    ],
    "steps": [
      "搞定“通行证”——获取access_token",
      "建立“素材库”——自动上传封面图",
      "从AI的返回结果中，精准地把图片URL提取出来。",
      "下载图片，并调用微信API上传。",
      "打造“写作大脑”——让AI生成HTML正文",
      "技能 技能 1: 生成微信公众号内容"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/836806097619767296",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI智能体联动高德地图MCP，打造个性化旅行规划助手",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "销售",
      "知识库",
      "MCP",
      "工作流"
    ],
    "platforms": [],
    "overview": "旅游行程规划，还在给客户发干巴巴的文字列表吗？这种方式毫无吸引力，转化率极低。 为了提升客户体验，运营人员不得不为每个目的地手动寻找合适的配图，再花费大量时间进行图文排版，整个过程如同手工作坊，效率低下且难以保证出品质量。当个性化需求涌来，这种纯人工模式根本无法快速响应，很容易错失商机。",
    "value": [
      "该方案解决旅游行业行程规划的效率痛点，嵌入重要业务环节，匹配企业已有预算项，规模适用性好。但缺少量化ROI数据和具体的降本提效证明，业务价值有待进一步验证",
      "方案具有清晰的模块化结构和较好的平台级价值，展示了MCP工具与Agent结合的标准范式。但行业通用性受限于旅游场景，知识库需要定制化准备，交付成本中等。"
    ],
    "steps": [
      "效果展示",
      "行程规划agent",
      "知识库搭建",
      "图文版旅行计划生成agent"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/831809454916767744",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "35/50"
  },
  {
    "name": "利用「循环组件」批量生成广告文案",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "内容营销",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "利用AI循环组件批量生成符合竞品风格的广告文案， 将文案创作效率提升10倍以上 ，让营销团队从繁琐的改写工作中解放出来，专注于创意策略和结果分析！ 在数字营销节奏越来越快的今天， 广告文案既要保持品牌调性，又要在短时间内产出足够多的版本进行 A/B 测试 。市场部希望借鉴竞品的成熟表达方式来提升…",
    "value": [
      "该方案优化了营销部门的广告文案创作流程，效率提升10倍，但属于辅助业务环节而非核心业务。ROI数据不够完整，缺少成本节省的具体量化，主要适用于有规模化文案需求的中大型企业",
      "方案具有很强的跨行业通用性和客户可复制性，标准化程度高，交付成本低。已形成模块化工作流，但应用场景相对单一，平台级价值有限，更适合作为营销领域的独立产品"
    ],
    "steps": [
      "结果一目了然： 自动汇总进表格，一行代表一条文案。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/815855116921573376",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "RPA学习不再卡壳：AI智能助手，陪你从需求拆解到应用落地",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "医药",
      "销售",
      "知识库",
      "翻译",
      "识别",
      "报表",
      "智能体",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "影刀的技术支持用AIpower打造了 “AI答疑助手” ——帮助每一位业务小白高效快速上手RPA。 业务人员懂业务，但不懂流程设计 ：能清晰说出“我需要自动化某个报表”，但无法拆解操作步骤；",
    "value": [
      "该方案主要服务于RPA培训场景，属于辅助业务环节而非核心流程。虽然能优化企业培训预算项且具有良好的规模适用性，但缺少明确的ROI量化数据和降本提效证明，业务价值有限",
      "该方案已具备较好的模块化和产品化基础，核心逻辑可复用。但高度依赖影刀RPA的指令和课程体系，行业通用性受限。每个客户需要一定的知识库定制工作，交付成本中等。"
    ],
    "steps": [
      "背景问题",
      "业务人员懂业务，但不懂流程设计：能清晰说出“我需要自动化某个报表”，但无法拆解操作步骤；",
      "面对上千条指令，选择困难：只用基础的点击、输入等指令，忽略了更高效的“循环相似元素”“条件判断”等；",
      "课程内容丰富，但与操作断层：知道课程中讲过某功能，却找不到在哪一课、讲的哪一部分。",
      "效果展示",
      "解决方案",
      "需求翻译机（需求分析）：当您描述需求后，系统会像专业流程设计师一样，把您的话翻译成具体操作步骤。比如您说\"整理销售数据\"，它会拆解成\"打开表格-筛选日期-计算总额\"这样的步骤。",
      "智能说明书（指令推荐）：根据生成的步骤，自动匹配对应的操作指令。就像给每个步骤贴上操作指南，告诉您\"筛选日期用Ctrl+F，计算总额用SUM公式\"，让操作过程一目了然。"
    ],
    "link": "https://www.yingdao.com/yddoc/ap/808992683627941888",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "32/50"
  },
  {
    "name": "MCP集成，让你的 Agent 更强大！",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "Agent",
      "MCP",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "MCP 的全称是Model Context Protocol，也就是模型上下文协议，是由Anthropic于24年底开源发布的，MCP就是AI大模型的标准化工具箱，可以把它想象成 AI 大模型和外部数据、工具之间沟通的 “通用语言”。 MCP Server 通常就是运行在本地的一段 Nodejs…",
    "value": [
      "MCP集成是技术能力扩展，主要服务于辅助场景而非核心业务流程。文档缺少ROI数据和量化效果证明，无法评估实际商业价值。虽然具有一定的规模适用性和预算匹配潜力，但整体业务价值不够突出",
      "MCP集成具有强跨行业通用性和清晰的产品化路径，可被多个智能体复用。但配置需要一定技术能力，交付成本中等。随着工具模块MCP服务的开发完成，平台级价值将进一步提升"
    ],
    "steps": [
      "连接 Figma，将设计稿直接转成页面",
      "连接Browser use，实现浏览器自动化",
      "连接Blender，一句话完成3D 绘图",
      "连接高德地图，规划完整路线、地址补全等",
      "更多 MCP 连接"
    ],
    "link": "https://yingdao.com/yddoc/ap/808990931071299584",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "23/50",
    "reuse_score": "35/50"
  },
  {
    "name": "用「发送展示卡片」生成精美图表的 prompt！",
    "type": "AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "制造业",
      "电商",
      "内容营销",
      "小红书",
      "识别",
      "智能体",
      "Prompt",
      "高复用价值"
    ],
    "platforms": [
      "小红书"
    ],
    "overview": "AI 智能体-发送展示卡片最近悄悄上线了新的能力，支持网页类型的卡片了，还可以设定 prompt，利用 AI-coding 的能力，将文章、文档、数据进行可视化展示，生成的卡片还可以分享出去。今天就分享几个有趣的 prompt，帮助我们生成强大的网页卡片！ 首选 Claude3.7/3.5，网页…",
    "value": [
      "该方案是一个内容可视化辅助工具，主要用于生成精美的展示卡片和图表。虽然有一定的实用价值，但未嵌入核心业务流程，缺少ROI量化数据和降本提效的具体证明，业务价值有限",
      "该方案具有较强的跨行业通用性和客户可复制性，7个prompt模板覆盖多种内容可视化场景。交付成本低，已有一定产品化基础，但平台级价值有限，更适合作为功能使用技巧推广"
    ],
    "steps": [
      "要求：",
      "生成详细页面，适合分享",
      "内容要求",
      "设计风格",
      "技术规范",
      "响应式设计"
    ],
    "link": "https://yingdao.com/yddoc/ap/808964607296901120",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "18/50",
    "reuse_score": "35/50"
  },
  {
    "name": "数据库：自然语言转SQL测试快速上手指南",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "法律",
      "物流",
      "电商",
      "客服",
      "内容营销",
      "智能客服",
      "售后",
      "知识库",
      "智能问答"
    ],
    "platforms": [],
    "overview": "掌握四大提示词（Prompt）策略，显著提升知识库回答效果 在利用影刀 AI Power 搭建 AI 工作流时，我们常常会使用让大语言模型结合知识库搜索的结果进行回答。然而，如果大语言模型的提示词（Prompt）设计不够精细，模型可能产生偏差：",
    "value": [
      "该方案聚焦于AI客服提示词优化，属于辅助业务流程优化。虽然有一定应用价值，但缺乏量化ROI数据和实际降本提效证明，业务核心度和规模适用性有限",
      "提示词优化策略具有较好的行业通用性和客户可复制性，提供了可用的模板示例。但产品化程度不足，交付成本仍需人工定制，平台级价值有待提升"
    ],
    "steps": [
      "从知识库中提取相关数据片段。",
      "根据推理结果生成结构清晰的答案。",
      "明确要求模型在信息不足时直接反馈“我不知道”，而非凭空生成",
      "研究分析 ：在一些专业的研究场景下，可以确保大模型只依据现有资料作答，不随意推测。",
      "先让大语言模型根据获得的大量信息，生成一个初步结果",
      "大量参考资料汇总： 比如营销文案、企业内部详细资料库，需要从多个资料片段中提取信息并整合"
    ],
    "link": "https://yingdao.com/yddoc/ap/808952766634864640",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "22/50",
    "reuse_score": "32/50"
  },
  {
    "name": "EXCEL+AP：智能分析选中区域 - windows版本",
    "type": "AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "智能体",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "如何让Excel变得更加智能？如何让复杂的数据分析变得简单？今天和大家分享AP的一个常见应用场景——在Excel中集成AI分析能力，只需几步配置，可直接让AI分析选中区域的数据。 AP如何改变Excel数据分析体验？",
    "value": [
      "该方案为Excel增加AI数据分析能力，属于辅助业务流程优化。预算匹配度和规模适用性较好，但缺少量化的ROI数据和降本提效证明，业务价值有待进一步验证",
      "该方案具有极高的行业通用性和平台级价值，代码模块化程度高，交付成本递减明显。可以快速复制到新客户，并扩展到其他Office应用场景，复用价值突出"
    ],
    "steps": [
      "选中需要分析的数据范围，点击\"AI分析\"按钮",
      "确认所选数据，并在弹出框中输入你的分析需求",
      "AP智能体将处理你的请求并返回分析结果",
      "基础环境准备",
      "添加必要的引用库",
      "添加AP连接代码"
    ],
    "link": "https://yingdao.com/yddoc/ap/803470566957338624",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "42/50"
  },
  {
    "name": "报销问答：如何优化差旅报销知识库的AI问答效果",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "财务",
      "人事",
      "知识库",
      "RAG",
      "Prompt",
      "报销"
    ],
    "platforms": [],
    "overview": "差旅报销是企业日常运营中的常见场景。由于各地消费水平不同，报销标准也有差异。比如嘉兴的住宿餐饮标准可能是300元/天，而上海可能需要500-600元/天。这导致企业的差旅报销规定往往很复杂。 为什么直接导入文件效果不好？这里就不得不说到知识库的基础知识，详情可看以下两期科普",
    "value": [
      "该方案解决企业差旅报销查询的辅助场景，具有较好的规模适用性和预算匹配度，但缺少量化的ROI数据，降本提效强度未明确，不属于企业核心业务流程",
      "方案具有极强的跨行业通用性和客户可复制性，交付成本低，已形成清晰的产品化思路。知识库优化方法论具有平台级价值，可推广到其他复杂规则查询场景"
    ],
    "steps": [
      "直接将报销文件导入AI知识库，问答效果不理想"
    ],
    "link": "https://yingdao.com/yddoc/ap/803517682108452864",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "44/50"
  },
  {
    "name": "年终报告好帮手：5分钟搞定跨表数据查询",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "销售",
      "SQL",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "又到了年终总结的时候，各部门都在忙着准备年度数据报告。面对分散在多个Excel表格中的业务数据，传统的数据查询方式往往需要反复筛选、统计、关联，不仅耗时费力，还容易出错。本期AP101将为您介绍一个简单高效的解决方案，让您用自然语言就能轻松完成各类查询统计工作。 L经理是某零售公司的运营主管，他…",
    "value": [
      "该方案解决数据查询的辅助性需求，匹配企业年终报告预算项，但ROI路径不清晰，缺少量化的降本提效数据，规模适用性未明确说明",
      "方案具有强行业通用性和较高可复制度，已有工作流模板支持，交付成本结构较优，具备一定平台级价值，但产品化程度仍需提升"
    ],
    "steps": [
      "数据导入",
      "配置ai工作流，使用“AI查询数据库”",
      "使用ai魔方，应用ai工作流"
    ],
    "link": "https://yingdao.com/yddoc/ap/803518631881457664",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "拆解一个案例，帮助你快速掌握搭建AI智能体的技巧",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "销售",
      "客服",
      "知识库",
      "知识问答",
      "招聘",
      "简历",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "案例拆解——帮助你快速掌握搭建AI智能体的技巧​ 许多人第一次使用到AI智能体都会有些茫然，不知道有哪些场景可以用AI智能体来做，或者不知道怎么去搭建一个好用的智能体。",
    "value": [
      "该方案聚焦于员工培训和产品知识考核这一辅助业务场景，具有一定的预算匹配度和规模适用性，但缺少量化的ROI数据和降本提效证明，业务核心度较低，属于优化内部培训流程的工具型应用",
      "该方案具有极强的跨行业通用性和客户可复制性，已经具备较高的产品化程度，交付成本低且边际成本递减明显。核心能力可作为平台级模块被多个场景引用，复用价值突出"
    ],
    "steps": [
      "有一个基于知识点创建的完善的题库。",
      "将用户的回答，和正确答案进行比对，并给出评分和原因分析。",
      "搭建技能",
      "题库生成",
      "从题库里随机提取题目，对用户发起提问",
      "将用户的回答和正确答案做比对，并给出评分和原因。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803518950319181824",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "42/50"
  },
  {
    "name": "飞书群总结助手：@机器人，半分钟就能收到客户旅程总结",
    "type": "RPA+AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "客服",
      "飞书",
      "售后",
      "智能体",
      "工作流"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "今天要分享一个源于实际业务场景的智能信息助手。这个创意来自我们售后团队一位主管的日常痛点：他每天需要review大量的客户拜访记录，从客户历史接触记录到最新进展，信息量很大。为了提升阅读效率，他想到了一个巧妙的解决方案 - 利用影刀 AIPower，在每个客户专属的内部群里添加总结助手，帮他自动…",
    "value": [
      "该方案解决售后团队客户信息管理的效率问题，属于重要辅助业务流程。虽然有明确的应用场景和时间节省描述，但缺少量化的ROI数据和降本提效的具体数字，业务价值中等",
      "方案具有很强的跨行业通用性和平台级价值，核心逻辑可复用。虽然已经模块化，但新客户部署仍需要一定的技术配置工作，产品化程度有待进一步提升"
    ],
    "steps": [
      "利用影刀“高级任务计划”，触发查询任务，并获取群名称",
      "飞书消息：向此飞书群发送等待提示",
      "Http请求：发送请求，获取飞书的鉴权token",
      "将aipower总结后的内容，返回给指定的飞书群"
    ],
    "link": "https://yingdao.com/yddoc/ap/803520299776204800",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "知识库技巧：如何应对结合知识库搜索后AI回答效果不理想",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "知识库",
      "智能体",
      "Prompt",
      "提示词",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "本文将介绍， 在知识库检索场景下如何排查结果不准确的问题原因 。 如果是在AI工作流中使用，可以点击【智能搜索】组件的输出端点的小绿勾✔，检查输出结果是否正确",
    "value": [
      "本文是知识库检索优化的技术指南，适用于已部署知识库的企业进行效果调优。虽然方法实用，但缺少ROI量化数据和业务价值证明，更偏向于技术支持文档而非商业解决方案",
      "排查方法具有跨行业通用性和较好的可复制性，适合作为知识库产品的标准化运维指南。但目前仍为文档形式，未形成自动化工具或产品化模块，平台级价值有限"
    ],
    "steps": [
      "第一步 检查切片",
      "问题1：有目标切片，但相关度排名靠后",
      "明确搜索问题：可以采用手动添加索引",
      "不明确搜索问题：可利用“智能补充索引”功能，通过大语言模型的语义总结能力，往向量索引中增加额外内容，以提升搜索效果。",
      "问题2：目标切片本身不够准确",
      "问题3：目标切片不存在",
      "第二步 检查 prompt",
      "问题1：测试结果与问题完全不相关"
    ],
    "link": "https://yingdao.com/yddoc/ap/803520941135216640",
    "rating": "Showcase",
    "tier": "M3",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "热量计算：巧妙使用RPA+AI，打造专属运动饮食侦探",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "识别",
      "智能体",
      "提示词",
      "RPA"
    ],
    "platforms": [],
    "overview": "健身房会员在记录饮食热量时，需要手动在薄荷健康APP上搜索食物信息，再将结果发送给私教。这个过程繁琐且容易出错。 操作繁琐：需要在薄荷APP和通讯软件间反复切换",
    "value": [
      "该方案优化了健身房的辅助业务流程，提升会员体验和教练工作效率，但缺少量化ROI数据，业务核心度和提效强度一般，适合作为增值服务而非核心业务改造",
      "方案具有较好的复用价值，技术链路清晰且可模块化，适合作为平台能力沉淀。但行业通用性有限，且RPA部分需要针对不同客户系统定制，交付成本优化空间有限"
    ],
    "steps": [
      "调用API获取准确热量数据（接口来自第三方，请谨慎使用：食物营养识别API接口 (<",
      "大语言模型将接口返回的json数据转化为易懂的文字描述",
      "按照输入数据的字段生成营养档案",
      "RPA自动将结果推送给教练，并自动记录到教练系统中（略）"
    ],
    "link": "https://yingdao.com/yddoc/ap/803521576027377664",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "AI科普：初识RAG-大语言模型的知识库",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "医药",
      "法律",
      "客服",
      "智能客服",
      "知识库",
      "知识问答",
      "RAG",
      "数据分析",
      "智能体"
    ],
    "platforms": [],
    "overview": "想象你正在查阅一本2020年出版的百科全书。当你想了解2024年最新发布的iPhone时，显然这本书帮不上忙。同样的困境也存在于大语言模型中 - 它们的\"知识\"来自训练时的数据，就像一本\"固定版本\"的百科全书。 为了解决上述问题，我们需要RAG技术。它就像给大语言模型配备了一个\"实时图书馆\"，可以：",
    "value": [
      "这是一篇RAG技术科普文档，介绍了通用概念和多行业应用场景，但缺少具体业务场景的深入分析、量化ROI数据和实际降本提效证明，业务价值主要体现在技术普及层面",
      "RAG技术具有极强的跨行业通用性和较好的可复制性，已有一定的产品化基础。但作为科普文档，缺少交付成本、平台级价值等关键信息，复用价值主要体现在技术通用性层面"
    ],
    "steps": [
      "将行政知识相关文档上传至知识库",
      "创建一个AI智能体",
      "开始使用你的专属AI问答助手"
    ],
    "link": "https://yingdao.com/yddoc/ap/803525490487050240",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI技巧：利用HTTP请求，获取最新研究成果",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "大语言模型有个硬伤，由于TA的训练数据存在截止时间，因此如果我们想知道某个话题的最新学术研究，仅靠大语言模型是不够的。为了解决这个问题，我们可以借助一些学术文献平台，把最新的研究论文整合进来，这样就能得到我们想要的内容。 本文以arXiv为例，演示如何用「HTTP请求」组件来获取最新的研究成果。…",
    "value": [
      "该方案为学术文献检索的辅助工具，非企业核心业务，缺少ROI量化数据和成本效益分析，主要适用于科研机构和研发型企业的特定场景",
      "该方案标准化程度高，客户复制成本低，具备产品化潜力，但行业通用性局限于科研领域，平台级价值有限，更适合作为垂直领域的标准解决方案"
    ],
    "steps": [
      "连接arXiv API",
      "让大语言模型总结",
      "将搭建好的AI工作流发版，并应用至“AI魔方”"
    ],
    "link": "https://yingdao.com/yddoc/ap/803527442667491328",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "23/50",
    "reuse_score": "35/50"
  },
  {
    "name": "财报分析：如何搭建一个上市企业财报分析助手",
    "type": "AI",
    "industry": "财务",
    "tags": [
      "财务",
      "智能体",
      "工作流"
    ],
    "platforms": [],
    "overview": "在财报季，同样一个上市企业的财报，为什么二级市场有的人解读为利好，有的人又解读为利空？在财报季，投资者常常对同一份财报有不同解读。即使净利润增长，股价也可能下跌。财报中的扣非、行业景气度等专业术语让人困惑。 _ 有没有办法让AI帮我们快速看懂财报？_",
    "value": [
      "该方案解决金融投资领域的财报分析辅助需求，具有较好的规模适用性和预算匹配度，但缺少量化的ROI数据和降本提效证明，业务核心度属于重要辅助环节而非核心流程",
      "该方案具有较好的客户可复制性和产品化潜力，交付成本结构合理，但行业通用性局限于金融投资领域，平台级价值有待进一步抽象和提升"
    ],
    "steps": [
      "在AI智能体里创建一个技能，方便用户通过表单的形式上传附件，再调用后续的AI工作流来进行分析"
    ],
    "link": "https://yingdao.com/yddoc/ap/803527757785186304",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "知识库混合检索：利用AI判断更合适的检索方式，提高知识库检索准确率",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "人事",
      "电商",
      "知识库",
      "提示词",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "「语义搜索」在理解用户提问和语义匹配方面表现出色，能够高效地从知识库中找到相关信息。但是，当用户提问中包含长串数字（如手机号 _ _15666668888__ ）或字母数字组合（如产品型号 _ _ZZ66YY88__ ）时，就需要关键词搜索以准确定位相关内容，确保问答准确性。 面对这样的问题，你…",
    "value": [
      "该方案优化知识库检索准确性，属于辅助业务工具，预算匹配度和规模适用性较好，但缺少量化ROI数据和明确的降本提效证明，业务核心度一般",
      "方案具有极强的行业通用性和客户可复制性，交付成本低，产品化潜力较好，可作为知识库检索的标准优化模块，复用价值高"
    ],
    "steps": [
      "用于判断问题内容的大语言模型提示词参考如下：",
      "判断<员工提问 是否包含数字",
      "如果包含，则提取该数字输出"
    ],
    "link": "https://yingdao.com/yddoc/ap/803528079333515264",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "32/50",
    "reuse_score": "43/50"
  },
  {
    "name": "用AP搭建你的知识助理，快速知晓天下事！",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用",
      "飞书",
      "工作流"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "今天和大家分享一个AP团队自己使用的AI助理，TA可以帮团队成员搜罗24小时内发生的新闻，也能追溯几百年前的今天发生了什么，而且还是个排忧解难的摸鱼搭子！ 省时省力地获取新闻：整理并总结刚发生的各类新闻。",
    "value": [
      "这是一个内部效率工具，用于团队获取新闻和历史知识，属于边缘辅助环节。缺少量化ROI数据和降本提效证明，预算匹配度一般，规模适用性说明不足",
      "方案具有较强的跨行业通用性，核心逻辑可复用，有一定的产品化潜力。但缺少详细的实施步骤，交付成本说明不足，目前更适合作为独立产品或教学案例，尚未达到平台级核心能力"
    ],
    "steps": [
      "省时省力地获取新闻：整理并总结刚发生的各类新闻。",
      "每天学点历史：拓宽视野，还期望能将这些知识分享给其他同事。",
      "排忧解难：解答常见的问题，比如：“领导突然说XXX，是什么意思呢？”👀",
      "效果演示",
      "如何实现",
      "通过AI服务中的http组件，接入“聚合数据”的API，获取近期新闻或历史事件",
      "通过AI服务中的集成组件，对接飞书的“发送文本消息”API，将信息发送给指定的某个同事",
      "通过AI助理，让使用者通过对话的形式，实现多种功能今天发生了啥：接入了用AI服务搭建的“获取近期新闻”工作流，可以查询24小时内的新闻；利用“交互卡片”，提供多种新闻类型。历史上的今天：接入了用AI服务搭建的“获取历史事件”工作流，可以查询几百年前的今天发生过什么；接入了AI服务搭建的“发送飞书消息”工作流，能将历史事件分享给指定同事。直接对话：设置“基础规则”，让大语言模型解答各类常规问题。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803580208584310784",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI助理：强化会议小助手的理解能力",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "飞书"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "视频中，我们发现需要使用特定的时间格式（YYYY-MM-DD）并通过表单保证信息的正确输入。那么，有没有一种方法可以让AI助理更智能地理解用户意图，通过对话动态修改信息呢？",
    "value": [
      "该方案优化了企业内部会议日程管理的辅助流程，通过自然语言理解提升用户体验，匹配企业已有协作工具预算，但缺少量化ROI数据和跨平台支持说明，业务价值有限",
      "方案具备较强的跨行业通用性和客户可复制性，核心AI服务可模块化复用。但产品化程度不足，交付成本仍需优化，平台级价值尚未充分发挥"
    ],
    "steps": [
      "解决方案",
      "优化输入信息的准确性 首先，我们对已有技能进行优化，当录入信息有误时，系统会提示用户重新补充或修正信息。",
      "强化时间理解能力 我们创建了一个AI服务，能够理解用户描述的时间，例如：\"明天\"，\"后天下午\"，\"下周二晚上九点半\"等。AI服务会生成正确的日期时间和对应的时间戳，以便在创建长日程和短时间会议时使用。",
      "判断用户输入意图 我们还创建了另一个AI服务来判断用户输入的信息是肯定还是否定。这可以确保系统在接收到否定信息时，能重新提示用户修改和补充信息。",
      "实现飞书日历对接 基于以上两个服务，我们在用户确认信息的情况下自动连接飞书日历程序，避免用户重新输入与调整，实现更智能的日程创建及修改。",
      "效果展示 以下是优化后系统的最终效果展示："
    ],
    "link": "https://yingdao.com/yddoc/ap/803804066922106880",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "多Agent：多Agent协作干活，一个人就是一家公司",
    "type": "RPA+AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "人事",
      "Agent",
      "招聘"
    ],
    "platforms": [],
    "overview": "新版AI智能体上线后，小伙伴们直呼太强大了👏🏻👏🏻👏🏻 如果你还没有尝试过，今天就让我来给你show一下，现在的AI助理能实现的强大功能之一： 多Agent协作 ，本次就以多Agent协作完成一个比较有难度的思考命题为例，来详细拆解一下搭建步骤。",
    "value": [
      "该方案是一个通用的多Agent协作思考工具，用于辅助深度思考问题。但文档缺乏量化的ROI数据和降本提效证明，仅为边缘辅助工具，非企业核心业务流程，业务价值有限",
      "该方案具有较好的行业通用性和可复制性，提供了清晰的搭建步骤。但产品化程度不高，每个客户仍需要一定的定制化配置。交付成本中等，平台级价值有限，更适合作为独立案例展示"
    ],
    "steps": [
      "专家招聘:系统会自动从可用代理中选择合适的专家参与项目。",
      "行动执行:根据决策,系统会执行相应的操作更新项目状态。",
      "分工协作，执行方案",
      "将4个步骤拆解到不同的技能中，方便后续分步执行和评估",
      "第三步设置：分工协作，执行方案（该案例中未设置差异化的分工，均由一个大模型执行）"
    ],
    "link": "https://yingdao.com/yddoc/ap/806815795558502400",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI 助理小技巧：推荐问题是怎么来的？如何让 AI 助理更精准的推荐问题",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "知识库",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "当使用者对 AI 助理提了问了一个比较模糊的问题，这个问题可能有更多细节需要了解，ai如何根据使用者的问题来推荐问题呢？搭建者尝试了多个AI 助理产品后发现： AI 助理工作流的形式搭建，可以让AI 智能在该发挥的时候发挥，该控制的时候也能控制，让每个输入输出的节点变得更加灵活且可控，在复杂的企…",
    "value": [
      "该方案是知识库问答的体验优化功能，属于辅助业务流程优化。缺少ROI量化数据和降本提效证明，可优化现有预算项但非核心替代，规模适用性一般",
      "该方案具有很强的跨行业通用性和客户可复制性，已有工作流模板支持快速交付，具备一定的产品化基础和平台级价值，但还需进一步标准化"
    ],
    "steps": [
      "有些IM 平台的AI 助理倒是会智能的推荐几个问题，但推荐的效果有时候并不好， 且无法把控。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803806215729065984",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "23/50",
    "reuse_score": "38/50"
  },
  {
    "name": "阅读助理：给大脑加个快速输入的外挂，每天多读10篇文章",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用",
      "识别",
      "PDF"
    ],
    "platforms": [],
    "overview": "因为我平时上下班路上习惯看各种文章，文章太长一篇篇自己看的话比较费时，所以就会用大模型来帮忙总结文章，但是还是会遇到一些问题： 所以就用了AI助理，实现了这些功能：",
    "value": [
      "这是一个个人阅读效率工具，主要解决个人学习场景的问题，未嵌入企业核心业务流程。缺少量化的ROI数据和降本提效证明，不属于企业明确预算项，业务价值有限",
      "该方案具有很强的行业通用性和客户可复制性，已具备产品化基础。但平台级价值有限，主要作为独立应用场景存在，难以被其他解决方案引用"
    ],
    "steps": [
      "希望AI每次按照固定的结构总结文章，但是来回几轮对话它就忘记了，又得重新强调一遍结构",
      "大模型经常会有幻觉，会回复一些不在文章中的内容，难以识别到"
    ],
    "link": "https://yingdao.com/yddoc/ap/803808696622133248",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "35/50"
  },
  {
    "name": "购书小助手：个性化推荐书籍，引导消费者下单",
    "type": "RPA+AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "电商",
      "客服",
      "知识库"
    ],
    "platforms": [],
    "overview": "今天要分享的是一个来自图书出版社的案例，他们的客服每天都要解答消费者的购书问题，同时还需要根据消费者的需求推荐一些书籍。推荐书籍对客服的要求很高，需要客服熟悉每本已上架的图书。因此客户想借助AI助理的能力，搭建一个购书小助手，消费者可以通过自助咨询来淘到想要的书籍",
    "value": [
      "该方案解决图书销售中的客户咨询和推荐问题，匹配企业客服预算项，规模适用性好。但缺少ROI量化数据和降本提效的具体证明，业务价值难以准确评估",
      "该方案具有很强的跨行业通用性和客户复制能力，交付成本低，产品化潜力大。核心的'产品推荐+需求引导'能力可作为平台标准模块，复用价值高"
    ],
    "steps": [
      "根据用户的购买需求，推荐合适的书籍",
      "对于需求不明确的客户，提供一些指引",
      "如何实现？"
    ],
    "link": "https://yingdao.com/yddoc/ap/803822162208632832",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "42/50"
  },
  {
    "name": "说明书提取：纸质说明书如何电子化？大模型联手OCR，几秒钟就搞定",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "医药",
      "知识库",
      "OCR",
      "识别",
      "多模态"
    ],
    "platforms": [],
    "overview": "近期收到一个药企客户的求助，客户正在推进药品说明书的电子知识库化。目前，他们只有说明书的扫描件，急需将其转换为文字电子版。然而，传统的内容提取技术效果不理想，因此想试一试能否用AI解决。 扫描件难题 ：药品说明书都是扫描件，传统方法提取内容不够精准，且容易丢失格式。",
    "value": [
      "该方案解决医药企业知识库建设的实际需求，嵌入重要业务流程，预算匹配度高，规模适用性强。主要不足是缺少量化的ROI数据和效率提升对比",
      "方案已产品化为标准模板，跨行业通用性强，客户可快速复制，交付成本低，具有平台级价值。可作为文档智能处理的核心能力模块"
    ],
    "steps": [
      "扫描件难题：药品说明书都是扫描件，传统方法提取内容不够精准，且容易丢失格式。",
      "AI识别问题：直接用多模态大语言模型提取，虽然表格格式能保留，但汉字识别不准确。",
      "OCR技术：使用OCR技术，精准提取扫描件中的内容",
      "多模态大语言模型：根据药品说明书的排版样式，重新排版OCR提取的内容，并以markdown格式输出",
      "格式转换并下载：将markdown文件转换为常用的word文档，下载后即可导入电子知识库"
    ],
    "link": "https://yingdao.com/yddoc/ap/803825351522967552",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "舆情分析：AI和RPA的完美结合，让这个美妆品牌的舆情分析实现完全自动化！",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服",
      "电商",
      "舆情",
      "识别",
      "数据分析",
      "RPA"
    ],
    "platforms": [],
    "overview": "今天分享的案例来自国内某知名美妆品牌。该品牌在市场上拥有较高知名度，因此其营销和公关团队需要持续监控市场舆情，了解消费者的评价及社交平台上的舆论，特别是在新品发布期间，需要快速获得市场反馈以调整营销策略。 但是，这一过程中也面临传统舆情分析的痛点：",
    "value": [
      "该方案解决了美妆品牌舆情分析的重要业务需求，匹配企业已有预算项，具有良好的规模适用性。但缺少量化的ROI数据和降本提效的具体证明，业务价值的可衡量性不足",
      "方案具有很强的跨行业通用性和产品化潜力，核心逻辑可复用于所有需要舆情监控的行业。已形成清晰的三步流程，可作为平台标准解决方案。但需要针对不同客户的数据源进行定制化配置"
    ],
    "steps": [
      "步骤 ：按照时间、来源和情感（正面、中立、负面）分类，通常使用Excel等工具。",
      "数据分析 ：",
      "步骤 ：基于整理后的数据进行统计分析，识别热点话题、高频关键字及情感趋势。",
      "报告生成 ：",
      "步骤 ：将分析结果汇总成报告，供管理层及相关部门决策使用。",
      "痛点 ：人工生成报告耗时，步骤繁琐，难以及时呈现结果。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803826428004450304",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 中等复用价值",
    "business_score": "38/50",
    "reuse_score": "40/50"
  },
  {
    "name": "创意回复：电商客服的智能进化：从\"千篇一律\"到\"情绪对话\"",
    "type": "RPA+AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "电商",
      "客服"
    ],
    "platforms": [],
    "overview": "让AI化身「最懂消费者的客服专家」，告别千篇一律的回复，让评论回复更个性化、更具温度，提升客户满意度和品牌忠诚度！ 电商客服部门需要对海量商品评论进行回复，工作量巨大且重复性高。",
    "value": [
      "该方案针对电商客服回复这一重要辅助环节，能够优化企业已有预算项，具有较好的规模适用性。但最大问题是完全缺少量化ROI数据，无法评估实际降本提效强度，业务价值难以被充分证明",
      "该方案具有很强的行业通用性和客户可复制性，已沉淀为标准化模板，交付成本低。但目前仅是单一场景应用，产品化程度和平台级价值还有提升空间，需要扩展到更多客服场景形成产品矩阵"
    ],
    "steps": [
      "方案简介",
      "电商客服部门需要对海量商品评论进行回复，工作量巨大且重复性高。",
      "传统人工回复效率低，且容易陷入模板化，缺乏个性化和情感关怀，难以提升客户满意度。",
      "利用AI大模型，对评论内容和情绪进行精准分析，生成个性化回复，提升回复效率和质量，增强客户粘性。",
      "TA 们怎么用"
    ],
    "link": "https://yingdao.com/yddoc/ap/803829756490952704",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "AI技巧：巧用组件，让大模型有时间概念",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "销售",
      "工作流",
      "高复用价值"
    ],
    "platforms": [],
    "overview": "利用「AI通用处理」组件获取当前时间 在某些场景（如自然语言查询数据）中，用户常以「今天」「昨天」「这个月」等词语描述时间，例如：“帮我查询一下昨天的销售额”。然而，大模型本身无法获取 当前时间 等实时信息，且回答问题时依赖训练或上下文数据，无法感知“当前是哪天”，因此无法准确解析“昨天”“上个…",
    "value": [
      "该方案解决了AI应用中时间感知的基础技术问题，属于辅助业务流程的能力。虽然有实际应用价值且适用于不同规模企业，但缺少量化的ROI数据和明确的降本提效证明，业务核心度和预算匹配度中等",
      "该方案具有极高的复用价值，完全跨行业通用，已沉淀为标准化产品组件，客户可开箱即用，交付成本趋近于0。作为AI工作流平台的基础技术能力，可被多个场景引用，但平台级价值有限"
    ],
    "steps": [
      "拖入「AI 通用处理」组件",
      "在输入框中填写如下指令：",
      "点击“生成”，然后将该组件的输出与「大语言模型」组件或其他组件相连。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803830812213174272",
    "rating": "Showcase",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "44/50"
  },
  {
    "name": "文本拆分：拆分工作，让 AI 处理核心问题，搞定批量上架100+场景模板",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "内容营销",
      "Prompt"
    ],
    "platforms": [],
    "overview": "有位运营同学最近很是头疼，需要把 100 多条 Prompt改成 JSON，从而完成场景模板上架的工作。 这个工作量非常大，如果人工改写可能需要花上一个星期，那如何批量把 Prompt 文案变成 json 文件呢？ 📌这是一个典型的「文档分析处理」的场景，她首先想到的就是搭建 AI 服务来完成，…",
    "value": [
      "该方案解决运营人员批量内容处理问题，将一周工作量压缩至10分钟搭建+批量处理，精准度90%，token成本降低90%。",
      "方案具有很强的跨行业通用性，文本拆分和结构化处理适用于多个行业的内容处理场景。10分钟搭建时间显示标准化程度高，但产品化程度和平台级复用情况需要进一步明确。"
    ],
    "steps": [
      "JSON 文件包含了很多重要信息，让 AI 直接生成 JSON 文件，难免会错漏。",
      "上百个模板JSON 文件生成，耗费的 token 也不是一笔小数目。",
      "理解并拆分Prompt 。需要将 Prompt 文案，拆分成「角色」和「内容」两部分",
      "提取 Prompt 里需要输入的变量名，并给每一个变量设置输入提示文案。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803839407214485504",
    "rating": "Showcase",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "你的飞书，其实可以自己\"干活\"",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "电商",
      "内容营销",
      "小红书",
      "飞书",
      "工作流"
    ],
    "platforms": [
      "小红书",
      "飞书"
    ],
    "overview": "作为一名内容创作者或运营，你的飞书表格里塞满了各种绝妙的灵感和选题。但从“灵感”到“成品”，中间隔着一条漫长又琐碎的鸿沟： 打开 AI 工具： 输入指令，等待生成。",
    "value": [
      "该方案解决内容创作流程中的重复操作问题，具有一定的业务价值，但属于辅助环节优化而非核心业务流程改造。最大问题是缺少量化的ROI数据支撑，无法准确评估实际降本提效强度。规模适用性良好",
      "方案具有很强的行业通用性和平台级价值，已有较好的产品化基础（代码模板+文档）。主要不足是交付仍需本地部署，边际成本降低有限。如果改为云服务+可视化配置，复用价值可显著提升"
    ],
    "steps": [
      "执行方式（探索）："
    ],
    "link": "https://www.yingdao.com/yddoc/ap/zh-CN/869138894390616064",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "38/50"
  },
  {
    "name": "本地模型测试及提速：没有独立显卡，笔记本也能运行本地模型",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧"
    ],
    "platforms": [],
    "overview": "随着MOE架构及模型技术的快速发展，各类小模型在本地机器的部署和使用变得越来越方便。其中，MAC因为有统一内存的缘故，内存带宽接近800G/s，所以在运行大模型的基础条件上比windows系统要有很大的优势（ddr5 6400频率大概是50g/s）。 受限于高显存独立显卡的高昂费用，我们是否有办…",
    "value": [
      "这是一个面向个人开发者的技术优化方案，能在一定程度上降低本地模型测试的硬件门槛，但未嵌入企业主业务流程，ROI不够清晰，提效幅度有限（20%），主要适用于开发测试环境而非生产环境",
      "方案具有一定的通用性和可复制性，配置步骤清晰，但受限于特定硬件环境，产品化潜力不足，交付成本难以优化，平台级价值较低，更适合作为技术分享而非商业化产品"
    ],
    "steps": [
      "一、背景",
      "二、方案详情",
      "下载一个cherry studio",
      "下载ollama并安装，配置好ollama_host及ollma_models等环境变量，配置好环境变量后需要重启ollama服务",
      "下载模型，此处以modelscop社区的qwen3-8b:gguf_Q4_K_M的量化模型为例（默认都是拉取Q4量化模型），在cmd窗口下执行下面的命令ollama run modelscope.cn/Qwen/Qwen3-8B-GGUF:latest",
      "下载完成后，就能在ollama_models对应的目录下看到下载的模型文件",
      "在cherry studio的模型配置里找到ollama模型设置，在管理中添加模型",
      "在对话框配置模型并进行模型验证，用一个比较喜欢的概率计算问题来试下模型的能力："
    ],
    "link": "https://www.yingdao.com/yddoc/ap/820957142187515904",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "22/50"
  },
  {
    "name": "掌握四大提示词（Prompt）策略，显著提升知识库回答的效果！",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "法律",
      "物流",
      "电商",
      "客服",
      "内容营销",
      "智能客服",
      "售后",
      "知识库",
      "智能问答"
    ],
    "platforms": [],
    "overview": "掌握四大提示词（Prompt）策略，显著提升知识库回答效果 在利用影刀 AI Power 搭建 AI 工作流时，我们常常会使用让大语言模型结合知识库搜索的结果进行回答。然而，如果大语言模型的提示词（Prompt）设计不够精细，模型可能产生偏差：",
    "value": [
      "该方案聚焦于AI知识库问答的提示词优化，属于辅助业务流程的技术优化。虽然适用于智能客服等场景，但缺少量化ROI数据和具体降本提效证明，业务价值有限。",
      "该方案具有很强的跨行业通用性和客户可复制性，提供了标准化的策略和模板。交付成本较低，后续边际成本小。已初步沉淀为方法论，但尚未完全产品化。"
    ],
    "steps": [
      "从知识库中提取相关数据片段。",
      "根据推理结果生成结构清晰的答案。",
      "明确要求模型在信息不足时直接反馈“我不知道”，而非凭空生成",
      "研究分析 ：在一些专业的研究场景下，可以确保大模型只依据现有资料作答，不随意推测。",
      "先让大语言模型根据获得的大量信息，生成一个初步结果",
      "大量参考资料汇总： 比如营销文案、企业内部详细资料库，需要从多个资料片段中提取信息并整合"
    ],
    "link": "https://yingdao.com/yddoc/ap/803793498805080064",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 高复用价值",
    "business_score": "28/50",
    "reuse_score": "38/50"
  },
  {
    "name": "RPA与AI的\"双向奔赴\"，开启智能自动化新时代",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "财务",
      "人事",
      "法律",
      "物流",
      "制造业",
      "客服",
      "内容营销",
      "评价分类",
      "识别"
    ],
    "platforms": [],
    "overview": "近年来，企业数字化转型加速推进，RPA（Robotic process automation, 机器人流程自动化）因其高效执行规则化任务的能力，成为降本增效的利器。而随着AI技术的突破，RPA与AI的结合正从“机械手臂”进化为“智慧大脑”，推动自动化向更高维度跃迁。本文和大家聊聊RPA与AI融合…",
    "value": [
      "这是一篇科普性质的文档，介绍RPA与AI融合的概念和场景，但缺乏实际业务价值的量化证明。应用场景偏向辅助流程，未涉及核心业务，且无ROI数据支撑",
      "方案具有较好的跨行业通用性，应用场景广泛。已有一定的模块化能力，但产品化程度不足，交付成本和客户复制难度尚不明确，需要进一步标准化"
    ],
    "steps": [
      "RPA+AI——让流程机器人拥有“思考力”",
      "AI+RPA——智能体驱动的“自动化指挥官”",
      "指令拆解 ：AI解析需求，生成任务逻辑树（让RPA获取数据 将获取的数据进行分析 发送）；",
      "自动化执行 ：AI调用RPA工具接口，触发对应流程并返回分析结果。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803516399611924480",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "28/50"
  },
  {
    "name": "DeepSeek 服务器总是繁忙？用 AI 智能体复刻一个自己用吧！",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "制造业",
      "工作流",
      "供应商"
    ],
    "platforms": [],
    "overview": "最近是不是被这张图困扰？没关系，影刀AI Power已接入 DeepSeek 稳定使用近一年，由于近期 DeepSeek 访问量剧增，我们已构建\"官方API+多Maas服务商\"的双重保障体系。目前除官方通道外，我们服务端深度整合了阿里云百炼平台、火山引擎、百度智能云千帆、Microsoft Az…",
    "value": [
      "该方案是个人效率工具搭建教程，不涉及企业核心业务流程，缺少ROI数据和量化效果证明，仅能优化AI服务使用体验，业务价值有限",
      "该方案具有较好的行业通用性和客户可复制性，搭建步骤清晰，但产品化程度不高，未沉淀为标准模板，平台级价值有限，主要作为功能演示案例"
    ],
    "steps": [
      "文件读取技能"
    ],
    "link": "https://yingdao.com/yddoc/ap/803517364131467264",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "手把手实现智能体的组件级权限控制",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "销售",
      "数据分析",
      "SQL",
      "工作流"
    ],
    "platforms": [],
    "overview": "又到了年终总结的时候，各部门都在忙着准备年度数据报告。面对分散在多个Excel表格中的业务数据，传统的数据查询方式往往需要反复筛选、统计、关联，不仅耗时费力，还容易出错。本期AP101将为您介绍一个简单高效的解决方案，让您用自然语言就能轻松完成各类查询统计工作。 L经理是某零售公司的运营主管，他…",
    "value": [
      "该方案优化了企业数据查询统计的辅助流程，有明确的应用场景和预算匹配度，但缺少量化的ROI数据和降本提效证明，规模适用性偏向中大型企业",
      "方案具有极强的跨行业通用性和客户可复制性，已沉淀为标准化的工作流模板，交付成本低，具有较高的平台级价值，适合作为标准产品对外推广"
    ],
    "steps": [
      "数据导入",
      "配置ai工作流，使用“AI查询数据库”",
      "使用ai魔方，应用ai工作流"
    ],
    "link": "https://yingdao.com/yddoc/ap/803518316939763712",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "42/50"
  },
  {
    "name": "AI科普：聊聊Chunking - 知识库中的文档分段",
    "type": "AI",
    "industry": "知识库与RAG",
    "tags": [
      "知识库与RAG",
      "客服",
      "知识库",
      "RAG"
    ],
    "platforms": [],
    "overview": "认识知识库文档分段 —— Chunking 上传至知识库的文档为什么要被分割呢？为什么不直接把原始文档直接给大语言模型呢？",
    "value": [
      "本文档为知识库文档分段技术的科普性内容，未涉及具体业务场景和量化ROI数据，业务价值主要体现在技术知识普及层面，对企业主业务流程的直接贡献有限",
      "文档介绍的Chunking技术具有较强的行业通用性和一定的产品化基础，但作为纯技术科普，缺少实际应用案例和配置指南，客户复制度和平台级价值有待进一步提升"
    ],
    "steps": [
      "💡 为什么需要Chunking？",
      "从日常阅读说起",
      "把整本书都给大语言模型：模型会\"无法消化\"（超过上下文窗口限制），就像人类大脑一样，一次性接收不了太多知识。",
      "一个一个字给：太少了！就像只给我们一个\"啊\"字，没有上下文，无法理解啊！",
      "“等等，现在的大模型不是能处理很长的文本吗？”",
      "企业的知识库动辄几十GB，远不是一本小书的量级",
      "每次问答都加工这么多信息，不仅效率低，算算大语言模型的token费用也要心疼死😱",
      "所以我们需要Chunking！"
    ],
    "link": "https://yingdao.com/yddoc/ap/803524200681820160",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "28/50"
  },
  {
    "name": "AI技巧：企业内部的AI小助理，如何根据提问者的组织架构来限制可用知识权限",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "财务",
      "人事",
      "销售",
      "客服",
      "售后",
      "知识库",
      "知识问答",
      "工作流",
      "报销"
    ],
    "platforms": [],
    "overview": "如何根据企业组织架构来划分用户知识访问权限​ 在企业内部的知识问答或 AI 小助理中，不同角色通常需要访问不同的知识内容，例如销售只能查看与客户、销售相关的信息，而财务只能查看结算、报销相关的信息。针对这种情况，我们在其他文章中给出了知识库隔离的两种实现方式：",
    "value": [
      "该方案解决大型企业知识库权限管理的刚需问题，嵌入重要业务流程，有明确的预算匹配度和良好的规模适用性。但缺少量化的ROI数据和具体的降本提效指标，影响了业务价值的整体评分",
      "方案具有极强的跨行业通用性和产品化潜力，核心逻辑标准化程度高，可作为平台级权限管理能力模块。客户复制成本较低，后续交付边际成本显著下降，具有很高的复用价值"
    ],
    "steps": [
      "创建地址参数变量",
      "判断提问内容是否匹配权限"
    ],
    "link": "https://yingdao.com/yddoc/ap/803526469349523456",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "44/50"
  },
  {
    "name": "竞品扩张数据监控：AI+RPA，实现全自动化监控竞品扩张趋势",
    "type": "AI",
    "industry": "内容营销",
    "tags": [
      "内容营销",
      "RPA"
    ],
    "platforms": [],
    "overview": "今天的案例来自一家头部餐饮企业，企业每个月都需要人工提取和录入竞品的扩张数据，并基于数据进行后续的分析。那么如何才能释放人力，将这类流程化的场景实现自动化呢？ 结合RPA触发器的定时功能，就可以完成每月定时去提取所有竞品的扩张数据，并生成结构化的结果，基于这些结构化的数据，又可以进一步借助AI的…",
    "value": [
      "该方案解决餐饮企业竞品监控的人工痛点，属于重要但非核心的辅助业务。虽然实现了自动化，但缺少明确的ROI量化数据，降本提效强度无法准确评估。适合中大型餐饮企业，预算匹配度较好",
      "方案在餐饮行业内有一定复用价值，核心逻辑（AI+RPA）可复制，但依赖特定APP导致跨行业通用性差。产品化路径清晰但未完成，交付成本中等。"
    ],
    "steps": [
      "实现效果",
      "解决方案",
      "首先分析用户的场景需求，拆解步骤后，找出其中竞品关键信息的采集点，并借助AI Power搭建了一个AI服务，主要目的是提取字段信息，并结构化输出",
      "借助RPA搭建一个手机自动化的应用，主要作用是从餐饮APP上循环提取竞品的扩张数据，并循环录入到excel里。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803579856112181248",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "28/50"
  },
  {
    "name": "巧用AP模板，5分钟即可上线程序测试员",
    "type": "RPA+AI",
    "industry": "通用",
    "tags": [
      "通用",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "今天和大家分享一位客户的使用案例，他基于AI 工作流-模板中的“程度员”模板，搭建了一个程序测试员的AI应用，可快速排查RPA的报错提示。为了排查”表达式中存在无效字符”，他一开始花了半个小时逐一将表达式中的中文符号改为英文符号。有了这个AI应用，只需要输入想要解决的问题，AI就会返回问题点和修…",
    "value": [
      "该方案优化了RPA程序测试环节，将30分钟的人工校验缩短至5分钟，效率提升83%。但属于辅助开发工具，非企业核心业务流程，预算优先级较低，规模效应有限",
      "该方案已沉淀为标准化模板，客户可复制性极强（5分钟上线），交付成本趋近于0。适用于所有使用RPA的行业，但作为单点应用，平台级价值有限"
    ],
    "steps": [
      "实现效果",
      "解决方案",
      "从模板广场中搜索想要的模板，并点击“使用模板”",
      "在已有模板的基础上，调整prompt并点击发版，5分钟就可上线一名专业的程序测试员。原来需要30分钟的人工校验，可以放心交给程序测试员来完成。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803581379522711552",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "AI小技巧：如何在助理技能中实现完成多轮对话且具备上下文记忆",
    "type": "AI",
    "industry": "AI问答",
    "tags": [
      "AI问答",
      "知识问答",
      "工作流"
    ],
    "platforms": [],
    "overview": "看到这里也许很多人已经反应过来了，这和代码中的i++，++i有异曲同工之处啊",
    "value": [
      "该方案是AI助理技能的技术优化技巧，可提升多轮对话体验，但缺少量化ROI数据和业务价值证明，属于辅助工具层面的功能增强，非核心业务流程嵌入",
      "该技巧具有极强的跨行业通用性和较好的可复制性，实现逻辑清晰标准化，但产品化程度和平台级价值有待提升，目前更适合作为配置方法论推广"
    ],
    "steps": [
      "使用一个变量「上下文」来存储用户输入和AI回答的内容",
      "为防止上下文过长，新增一个AI工作流，对本轮对话总结后，再记录到「上下文」变量中"
    ],
    "link": "https://yingdao.com/yddoc/ap/803581734367649792",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "35/50"
  },
  {
    "name": "使用技巧：结合飞书多维表格+高级任务计划，把表单收集流程重新设计！",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "客服",
      "内容营销",
      "飞书",
      "工作流"
    ],
    "platforms": [
      "飞书"
    ],
    "overview": "今天的案例来自运营团队自己，日常在与客户的沟通中，会遇到挺不错的AI 应用场景，但这些场景往往是一个未成形的想法，客户暂时无法给到资料测试，而等来等去这个想法就没有了，因此运营团队希望把这些零碎的想法灵感记录下来，积少成多，整理成需求表格后，就能给到其他客户一些灵感启发了。 我们建立了一张多维表…",
    "value": [
      "该方案仅优化内部运营团队的灵感记录流程，属于边缘辅助工具，缺少量化ROI数据，不涉及企业核心业务流程，业务价值有限",
      "方案具有较好的行业通用性和产品化潜力，核心逻辑可复用，但配置较为繁琐，交付成本中等，需要进一步标准化降低实施门槛"
    ],
    "steps": [
      "只要填写描述，标题和岗位能自动生成"
    ],
    "link": "https://yingdao.com/yddoc/ap/803803718954258432",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI技巧：AI识别图中的文字信息的工作流搭建合集，看这一篇就够了！",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "财务",
      "法律",
      "OCR",
      "识别",
      "多模态",
      "工作流",
      "报销",
      "合同"
    ],
    "platforms": [],
    "overview": "许多企业需要大语言模型来分析图片中的文字信息。然而，不同业务所需识别的内容都不同，因此大家常常会问： 到底有哪些方法可以识别图片中的文字信息？ 为了帮助大家更好地选择合适的方案，AP团队整理了几种不同的解决办法，供大家参考 多模态大模型不仅可以处理文本，还能处理图片。你可以直接将图片给多模态大模…",
    "value": [
      "该方案主要服务于企业辅助业务流程（财务、行政、合同管理），预算匹配度和规模适用性较好，但缺少明确的ROI量化数据和降本提效的具体证明，业务核心度一般",
      "该方案具有极高的行业通用性和客户可复制度，已沉淀为标准化的技术模板，交付成本低，可作为平台基础能力模块被多个场景引用，复用价值显著"
    ],
    "steps": [
      "方法1：使用多模态大模型",
      "方法2：结合文件内容提取技术和大语言模型的理解能力",
      "方法3：结合OCR技术和大语言模型的理解能力"
    ],
    "link": "https://yingdao.com/yddoc/ap/803805147578249216",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "42/50"
  },
  {
    "name": "AI助理：让你的AI助理帮你预订日程",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "钉钉",
      "飞书",
      "识别"
    ],
    "platforms": [
      "钉钉",
      "飞书"
    ],
    "overview": "通常，我们都会在钉钉/飞书或企微上创建日程和会议，有没有办法让我们的AI助理可以理解我们的意图，通过AI助理就能创建不同的日程呢？ 以下的程序中，1对应为请求的接口，2对应用户的access token",
    "value": [
      "该方案优化了日程创建的辅助流程，有一定提效价值，但属于边缘效率工具，非核心业务环节，且缺少量化ROI数据支撑",
      "方案具有很强的行业通用性和可复制性，实现模式标准化程度高，可快速扩展到多个IM平台，具备良好的复用价值"
    ],
    "steps": [
      "借助交互卡片中组件的默认值，起到自动填充表单并展示信息，方便用户进行微调。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803806567345086464",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "38/50"
  },
  {
    "name": "AI运营助手：多功能集成，提升工作效率",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "电商",
      "内容营销",
      "小红书"
    ],
    "platforms": [
      "小红书"
    ],
    "overview": "今天与大家分享一个互联网公司运营的成功案例。这个公司的运营团队每天要处理内容管理和市场推广等任务，同时还需根据市场需求创作内容并分析竞争对手的策略。这对团队成员要求极高，他们需熟悉各个平台的规则，撰写高质量的文案，并有效分析竞争对手的策略。 过去，这些任务是通过多个分散的AI工具来完成的，每次使…",
    "value": [
      "该方案解决了运营团队的实际痛点，整合多个AI工具提升工作便利性，但缺少关键的ROI量化数据和成本对比，无法准确评估实际业务价值和投入产出比",
      "该方案具有较好的行业内复用价值，核心框架标准化程度较高，可快速复制到其他互联网运营场景。但缺少交付成本数据，产品化程度需进一步验证"
    ],
    "steps": [
      "竞品视频分析 ：运营人员上传竞品视频后，AI助手会进行详细分析并返回结论。",
      "违禁词检测 ：运营人员只需上传图片，AI助手会自动检测其中是否包含违禁词，并反馈结果。",
      "小红书文案生成 ：根据运营人员提供的需求，AI助手会自动生成符合要求的推广文案。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803806916030939136",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "28/50",
    "reuse_score": "35/50"
  },
  {
    "name": "AI小技巧：将AI助理安装到手机上，立即拥有一个随时随地的智能助手",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "识别",
      "PDF"
    ],
    "platforms": [],
    "overview": "因为我平时上下班路上习惯看各种文章，文章太长一篇篇自己看的话比较费时，所以就会用大模型来帮忙总结文章，但是还是会遇到一些问题： 所以就用了AI助理，实现了这些功能：",
    "value": [
      "这是一个个人阅读效率工具，主要解决个人学习场景的问题，未嵌入企业核心业务流程。缺少明确的ROI数据和量化指标，不属于企业预算范围内的优先项目，业务价值有限",
      "该方案具有很强的行业通用性和客户可复制性，交付成本较低。但产品化程度和平台级价值有待提升，目前更适合作为个人效率工具的标准案例，而非平台核心能力模块"
    ],
    "steps": [
      "希望AI每次按照固定的结构总结文章，但是来回几轮对话它就忘记了，又得重新强调一遍结构",
      "大模型经常会有幻觉，会回复一些不在文章中的内容，难以识别到"
    ],
    "link": "https://yingdao.com/yddoc/ap/803808341104537600",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "35/50"
  },
  {
    "name": "使用小技巧：当元素无法抓取文本内容时，AP来帮忙！（新组件\"文本转JSON\"的使用介绍）",
    "type": "RPA+AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "识别"
    ],
    "platforms": [],
    "overview": "今天分享的是一个真实使用场景：网页上有一些内容，希望用 rpa 抓下来。但在搭建的过程中，发现这些元素无法获取文本内容，对于 rpa 小白来说，第一时间想到的是用截图 ocr 的形式，去获取文本内容，但这样却遇到了难题： 这些步骤想想都很繁琐，逻辑判断也很复杂，如何能快速简单的解决呢？没关系，有…",
    "value": [
      "该方案解决RPA实施中的技术难题，属于辅助性工具。虽有提效作用，但缺少量化ROI数据，业务核心度较低，主要价值在于降低RPA实施复杂度",
      "该方案已产品化为标准组件，具有很强的行业通用性和客户可复制性。作为平台工具模块，可被多个场景引用，但平台级价值相对有限"
    ],
    "steps": [
      "把所有元素都截一张图， ocr识别出来 后还需要写正则提取，太难了吧！"
    ],
    "link": "https://yingdao.com/yddoc/ap/803809061425823744",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "35/50"
  },
  {
    "name": "多语言翻译：搭建你的专属多语言翻译小助手",
    "type": "RPA+AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "翻译",
      "多语言"
    ],
    "platforms": [],
    "overview": "在处理文档翻译任务时，我们通常会选择使用【X道翻译】等工具。然而，当需要将文档内容翻译成韩语、法语或其他非英语语种时，我们可能会遇到需要升级为SVIP的问题，且相关费用并不便宜 🤔那么，如何获得一个既经济实惠又支持多种语言翻译的助手呢？",
    "value": [
      "该方案解决了多语言翻译的成本问题，但业务价值有限。缺少量化的ROI数据和成本对比，未明确说明如何嵌入企业核心业务流程，规模适用性和预算匹配度说明不足",
      "方案具有较强的行业通用性和客户可复制性，搭建步骤清晰，产品化潜力较好。但缺少详细的配置说明和交付成本结构，平台级价值有待进一步挖掘"
    ],
    "steps": [],
    "link": "https://yingdao.com/yddoc/ap/803809410149142528",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "35/50"
  },
  {
    "name": "竞争航线分析助理：RPA+AI，打造行动力爆表的AI Agent！",
    "type": "AI",
    "industry": "智能体",
    "tags": [
      "智能体",
      "物流",
      "销售",
      "数据分析",
      "Agent",
      "RPA"
    ],
    "platforms": [],
    "overview": "在航空公司，市场分析和定价部门需要实时监控和分析竞争航线的机票价格。 以一条从北京到上海的航线为例，工作人员需定期访问各航空公司官网及第三方售票平台，手动记录价格信息，然后结合自身的成本、市场需求、历史销售数据等因素制定出有竞争力的机票价格策略。",
    "value": [
      "该方案直接嵌入航空公司核心定价流程，解决了价格监控的效率和时效性问题，匹配企业已有预算项，规模适用性强。但缺少具体的ROI量化数据，无法准确评估降本提效的实际强度",
      "方案具有较好的跨行业通用性和产品化潜力，展示了平台级的集成能力。但客户复制需要一定的定制化工作，交付成本有优化空间但不会趋近于0。适合作为标准解决方案模板推广"
    ],
    "steps": [
      "使用RPA自动爬取数据 ：自动从各竞争平台和航空公司网站爬取价格信息，快速获取实时数据。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803821536284258304",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "38/50"
  },
  {
    "name": "AI技巧：业务案例难梳理？让大语言模型给些思路",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "电商",
      "客服",
      "内容营销",
      "识别",
      "提示词"
    ],
    "platforms": [],
    "overview": "在利用大语言模型解决业务难题时，梳理业务逻辑并指挥AI按照需求工作常是个难点。实际上，让大语言模型担任参谋角色，给出业务场景的建议，可以更好地解决问题。 某用户希望利用AI对顾客的用餐评论进行分类，特别是识别评论中提及的具体菜品。这些评论来自第三方平台。然而，大语言模型有时会因为关键词的干扰而给…",
    "value": [
      "方案涉及辅助业务场景（评论分析、文案生成），但缺少核心业务流程嵌入。完全没有ROI量化数据和降本提效证据，仅有定性描述。可能匹配企业已有预算项，但未明确替代关系。规模适用性一般",
      "方法具有较好的跨行业通用性和客户可复制性，但需要轻量定制。产品化潜力存在但尚未实现，仍为方法论展示。交付成本可控但不趋近于0。有一定的平台级价值，可作为通用能力沉淀"
    ],
    "steps": [
      "解决方法"
    ],
    "link": "https://yingdao.com/yddoc/ap/803810583383871488",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "32/50"
  },
  {
    "name": "文章整合：让AI帮助自媒体行业提高文章生产率",
    "type": "AI",
    "industry": "制造业",
    "tags": [
      "制造业",
      "法律",
      "内容营销",
      "审核",
      "识别",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "在体育内容创作领域，每天产出优质内容就像与时间赛跑。今天我们将分享一个真实案例：某体育专栏团队通过RPA+AI自动化方案，显著提升了日更效率，实现稳定收益增长。 \"每天处理文章需要花费大量时间，而原创产出却有限\"",
    "value": [
      "该方案直接解决自媒体行业内容生产的核心痛点，实现日均300-400元稳定收益，具有明确的商业价值。但ROI数据缺少对比基准，降本提效的量化指标不够充分，影响了业务价值的完整呈现",
      "方案具有较好的复用价值，核心逻辑可跨内容领域应用，已有AI工作流模板支撑。但RPA部分需要定制化配置，产品化程度有待提升，交付成本仍有优化空间"
    ],
    "steps": [
      "信息采集耗时：人工浏览各平台抓取热点，容易遗漏重要新闻",
      "内容同质化严重：改写后的文章风格单一，难以匹配不同平台调性"
    ],
    "link": "https://yingdao.com/yddoc/ap/803811291562921984",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "38/50"
  },
  {
    "name": "多级分类：评价分类的预处理：如何把Excel 里复杂的分类标准写进 prompt 里",
    "type": "RPA+AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "客服",
      "评价分类"
    ],
    "platforms": [],
    "overview": "如何让大语言模型理解表格中的复杂分类标准 大语言模型常被用于处理分类问题，例如对用户反馈的内容进行分类。当分类类别较少时，可以直接将分类类别以自然语言形式传递给大语言模型。然而，当分类类别复杂且数量较多时，在prompt中清晰表达这些分类信息会变得困难。",
    "value": [
      "该方案解决食品行业用户反馈分类的预处理问题，属于辅助业务流程优化。虽然匹配企业已有预算且规模适用性好，但缺少ROI量化数据和明确的降本提效证明，业务价值有限",
      "方案具有极强的跨行业通用性和客户可复制性，已有模板化基础，交付成本低。可作为平台的通用数据预处理能力，在多个场景中复用。产品化潜力大，但需进一步抽象"
    ],
    "steps": [
      "转换为Markdown格式： 将Excel表格数据转为Markdown格式，并拆开合并的同类项。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803826789376516096",
    "rating": "不建议投入",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "43/50"
  },
  {
    "name": "违禁词识别：AI 处理效果不好？这样操作，傻瓜也会！（商品违禁词AI分析的优化过程）",
    "type": "AI",
    "industry": "电商",
    "tags": [
      "电商",
      "内容营销",
      "识别",
      "Prompt"
    ],
    "platforms": [],
    "overview": "今天收到一个客户的求助，他们想做商品的违禁词分析，自己搭建了 AI 服务后，发现准确率很低。而我们拿到客户的搭建截图后，组件连接、变量设置等常见的搭建问题都没有，但是大模型就是无法判断明显违反广告法的内容： 图片里有“全国最低”等违反广告法的内容",
    "value": [
      "违禁词识别是电商核心合规环节，匹配企业必备预算项，规模适用性强。但缺少量化ROI数据和具体的降本提效数字，影响了整体业务价值评分",
      "方案已高度产品化，提供标准模板和傻瓜式操作流程，客户复制成本极低（<1人日）。Prompt优化工具具有平台级价值，可跨场景复用。主要局限是聚焦电商行业，跨行业通用性有待拓展"
    ],
    "steps": [
      "进入场景模板-Prompt优化，这里提供了 3 个Prompt优化的模板，进入「优化 prompt 的专家（通用）」模板",
      "输入原来的Prompt，等待一会，就能获得一条新的 Prompt。（这里要阅读理解一下，输出的内容包括优化建议和优化后的 Prompt，只需要优化后的Prompt 内容哦~）",
      "把新的Prompt 替换，就能看到效果完全不一样了！"
    ],
    "link": "https://yingdao.com/yddoc/ap/803827867627995136",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  },
  {
    "name": "生成评论：AI生成评论这样写prompt，有效减少\"AI味\"",
    "type": "AI",
    "industry": "客服",
    "tags": [
      "客服"
    ],
    "platforms": [],
    "overview": "今天的客户是一家美妆品牌，他们的营销团队有一项重要的工作，就是策划编写引导性评论，发布到各家平台上进行产品推广宣传。这些评论往往需要针对产品特点、市场定位和目标受众来编写，才能达到好的效果。 AP团队提供了一套新方法，能够提高效率，同时优化内容质量，主要步骤包括：",
    "value": [
      "该方案解决营销推广中的评论生成问题，能直接替代现有人力投入，预算匹配度高且规模适用性好，但缺少量化的ROI数据和效率提升指标，业务核心度属于辅助营销环节",
      "方案具有很强的跨行业通用性和客户可复制性，已沉淀为标准化模板，交付成本低。适用于所有需要在线营销的行业，具有较好的产品化基础和平台级价值潜力"
    ],
    "steps": [
      "响应慢 ：监控和回应需要全天候投入，特别是面对突发热点时，顾不过来。",
      "同步帖子内容 ：让AI了解评论内容，从而生成更有互动的评论。",
      "同步产品描述 ：提供详细产品功效，使生成的内容对于消费者而言更具参考价值。",
      "增加网络语言 ：引入流行网络用语，使得生成的评论更加接地气儿，语气更自然。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803828224317984768",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "42/50"
  },
  {
    "name": "财务核对：为报销最后提交的时候省省心",
    "type": "RPA+AI",
    "industry": "财务",
    "tags": [
      "财务",
      "审核",
      "OCR",
      "识别",
      "多模态",
      "工作流",
      "发票",
      "报销"
    ],
    "platforms": [],
    "overview": "本期101给大家分享一个我们AP组内自己使用AI的小经验～ 今天是咱们公司上半年发票报销的最后一天，相信大家跟财务小姐姐都非常的忙碌",
    "value": [
      "该方案仅优化个人报销提交前的核对环节，属于边缘辅助场景，缺少量化ROI数据，不属于企业预算范围，业务价值较低",
      "该方案具有极强的行业通用性和客户可复制性，但产品化程度较低，交付成本优化空间有限，平台级价值不足"
    ],
    "steps": [],
    "link": "https://yingdao.com/yddoc/ap/803828572678230016",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "18/50",
    "reuse_score": "32/50"
  },
  {
    "name": "数据库查询：用自然语言完成数据库查询和数据分析",
    "type": "AI",
    "industry": "数据分析",
    "tags": [
      "数据分析",
      "销售",
      "SQL"
    ],
    "platforms": [],
    "overview": "这是一家生鲜企业，每天都会产生大量的销售数据， 老板需要了解销售情况时，通常依赖下属查询并汇报结果。 我们通过AP构建了一个服务平台，实现 用自然语言生成SQL进行数据查询，再由大模型分析并返回结果 。如下步骤：",
    "value": [
      "该方案解决管理层数据查询的真实痛点，预算匹配度和规模适用性优秀，但缺乏量化ROI数据和降本提效的具体证明，业务核心度属于辅助决策环节而非核心流程",
      "该方案具有极强的复用价值，跨行业通用，已沉淀为标准化模板，新客户复制成本低，具备平台级能力潜力。唯一不足是文档未提供详细的交付成本和产品化程度数据"
    ],
    "steps": [
      "通过大模型A定义角色，接收用户自然语言描述并生成SQL。",
      "大模型A需了解数据表结构（可以上传数据表结构或通过文本描述）。",
      "通过大模型B定义数据分析角色。",
      "将大模型A生成的SQL传递给“数据库数据获取”组件，进行数据查询，同时输出SQL语句。",
      "将查询数据转换为文本形式，使用“表格转文本”组件。",
      "将转换后的文本内容输入大模型B。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803828923846111232",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "38/50",
    "reuse_score": "44/50"
  },
  {
    "name": "验证码识别：用AI能力补齐传统RPA工作流——图片验证码识别",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "识别",
      "多模态",
      "工作流",
      "RPA"
    ],
    "platforms": [],
    "overview": "✌️今天又是一期补齐RPA能力的小技巧～ 在日常帮客户搭建RPA流程的过程中，遇到验证码识别是很常见的。RPA可以直接解决简单的验证码问题，但还有 一些比较复杂的图片识别验证码 ， 需要动动脑的 （如下图） RPA就无能为力了🥹",
    "value": [
      "验证码识别是RPA流程中的辅助环节，对已使用RPA的企业有明确价值，规模适用性强。但文档缺少量化ROI数据和降本提效的具体证明，业务核心度一般",
      "验证码识别具有极高的复用价值，跨行业通用，已沉淀为标准化模板，客户可快速复制，交付成本低。可作为RPA平台的标准能力模块，具有较强的平台级价值"
    ],
    "steps": [
      "首先使用多模态大模型的图片分析能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803830113590022144",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "32/50",
    "reuse_score": "44/50"
  },
  {
    "name": "抓取提炼：让AI成为你的资讯小助手",
    "type": "AI",
    "industry": "通用",
    "tags": [
      "通用",
      "内容营销",
      "RPA"
    ],
    "platforms": [],
    "overview": "今天的故事来自一位做自媒体的用户，他 每天都要花费大量的时间在各类资讯和文档的浏览、记录及摘要上 。如果没有足够的题材，就没有足够的灵感来支撑他每天的工作。 🤔 但是在每天的浏览资讯工作上又一直存在以下痛点：",
    "value": [
      "该方案主要服务于自媒体个人工作效率优化，不属于企业核心业务流程。缺少量化的ROI数据和提效证明，预算匹配度一般。规模适用性较好，但行业局限于内容创作领域",
      "方案具有较好的行业通用性和客户可复制性，适用于所有信息收集场景。产品化路径清晰但需进一步抽象。交付成本可控，后续边际成本有所降低。平台级价值一般，更适合作为独立工具"
    ],
    "steps": [
      "搭建一个AI资讯助手的服务，主要作用是 把抓取到的文章内容做摘要。",
      "创建一个定时触发器， 每天固定时间触发应用执行 。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803830462790680576",
    "rating": "不建议投入",
    "tier": "M1",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "23/50",
    "reuse_score": "32/50"
  },
  {
    "name": "AI技巧：让小白用户快速掌握大模型调试prompt的技巧！",
    "type": "AI",
    "industry": "AI技巧",
    "tags": [
      "AI技巧",
      "制造业",
      "审核",
      "知识库",
      "知识问答",
      "向量检索",
      "智能体",
      "工作流"
    ],
    "platforms": [],
    "overview": "某平台通过AI重构内容生产流程，将专业知识转化为通俗内容，成功将人工审核通过率提升20%，每月节省超100小时人力成本。这一实践揭示了AI落地行业场景的核心逻辑：用技术复现人类思考路径。 一个修车知识问答平台的AI 落地实践：在汽车维修行业，修车师傅常因专业文档晦涩难懂而求助知识问答平台，平台需…",
    "value": [
      "该方案直接优化内容生产核心流程，ROI清晰（效率提升5倍，月省100+工时），人工审核通过率从60%升至80%。",
      "方案具有极强的跨行业通用性（知识转化场景广泛），核心逻辑可快速复制（3-7天），产品化结构清晰（知识库+搜索+工作流），交付成本优秀（后续<1人日），具备平台级能力潜力，但需进一步…"
    ],
    "steps": [
      "人力瓶颈凸显 ：5人内容团队每月处理3000+问答需求，相当于每人每天需完成20条技术文档转化。",
      "知识库优先 ：强制AI先检索内部知识库",
      "智能兜底 ：未命中时自动触发联网搜索，抓取可信数据",
      "AI智能体 （决策逻辑具象化） 的三位一体，将人的经验转化为可持续复用的系统能力。"
    ],
    "link": "https://yingdao.com/yddoc/ap/803837619442737152",
    "rating": "不建议投入",
    "tier": "M2",
    "value_class": "低业务价值 × 低复用价值",
    "business_score": "42/50",
    "reuse_score": "44/50"
  }
];

window.SCENARIOS = SCENARIOS;
