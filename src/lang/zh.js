module.exports = {
  menu: {
    "instanceList": "应用概览",
    "rateLimit": "流量控制",
    "config": "动态配置",
    "routerConfig": "路由配置",
    "routerFilterConfig": "路由过滤",
    "sqlMonitor": "SQL监控",
  },
  button: {
    "add": "新增",
    "update": "编辑",
    "delete": "删除",
    "close": "关闭",
    "save": "保存",
  },
  table: {
    option: "操作"
  },
  commons: {
    "date": {
      "YEAR": "年",
      "MONTH": "月",
      "DAY": "日",
      "HOUR": "时",
      "MINUTE": "分",
      "SECOND": "秒",
    },
    "unit": {
      "times": "次"
    },
    "status": "当前状态",
    "keyword": "关键字",
    "search": "查询",
    "enabled": "启用",
    "disabled": "禁用",
    "edit": "编辑",
    "delete": "删除",
    "detail": "详情"
  },
  configurableScope: {
    "scope": "作用范围",
    "affectTarget": "影响目标",
  },
  applicationOverview: {
    table: {
      "applicationName": "应用名",
      "identity": "应用标识",
      "ip": "IP",
      "port": "端口",
      "pid": "进程号",
      "viewLog": "查看日志",
      "sqlMonitor": "SQL监控",
    },
    input: {
      "keyword": "请输入应用名、实例标识、IP"
    }
  },
  log: {
    title: "日志",
    keyword: "请输入日志关键字"
  },
  rateLimit: {
    table: {
      "scope": "作用范围",
      "affectTarget": "影响目标",
      "endpoint": "影响端点",
      "frequency": "限流次数",
      "dimension": "时间纬度",
      "rule": "限流规则",
      "enable": "当前状态",
      "createTime": "创建时间",
      "modifyTime": "上次修改",
    },
    input: {
      "keyword": "请输入关键字"
    },
    modal: {
      "title": "编辑限流规则",
      "scope": "作用范围",
      "APPLICATION": "应用",
      "INSTANCE": "实例",
      "affectTarget": "影响目标",
      "dimension": "时间维度",
      "frequency": "限流次数",
      "endpoint": "限流端点",
    }
  },
  config: {
    name: "配置",
    table: {
      "scope": "作用范围",
      "affectTarget": "影响目标",
      "content": "配置信息",
      "createTime": "创建时间",
      "modifyTime": "上次修改",
      "enable": "当前状态"
    },
    input: {
      "keyword": "请输入关键字"
    },
    modal: {
      "title": "编辑配置项",
      "scope": "作用范围",
      "APPLICATION": "应用",
      "INSTANCE": "实例",
      "affectTarget": "影响目标",
      "content": "配置内容",
    }
  },
  routerConfig: {
    name: "路由配置",
    tips: "提示：当请求中存在对应的值时则将改变调用的服务名不会改变资源标志符(URI), 可用于多版本应用的部分流量转发",
    table: {
      "scope": "作用范围",
      "affectTarget": "应用名",
      "createTime": "创建时间",
      "modifyTime": "上次修改",
      "originService": "原调用服务",
      "targetService": "目标调用服务",
      "keySource": "参数源",
      "keyName": "参数名",
      "matchType": "匹配方式",
      "equals": "精确匹配",
      "regex": "正则匹配",
      "expression": "表达式",
      "enable": "当前状态"
    },
    input: {
      "keyword": "请输入关键字"
    },
    modal: {
      "title": "编辑路由配置",
      "scope": "作用范围",
      "APPLICATION": "应用",
      "INSTANCE": "实例",
      "affectTarget": "影响目标",
      "originService": "原始服务",
      "targetService": "目标服务",
      "keySource": "参数源",
      "keyName": "参数名",
      "matchType": "匹配类型",
      "equals": "精确匹配",
      "regex": "正则匹配",
      "expression": "表达式",
    }
  },
  routerFilterConfig: {
    name: "路由配置",
    tips: "提示：当应用调用指定服务时将判断请求参数对应的值,若存在则根据过滤类型在负载算法执行前过滤服务列表. 可用于针对请求特点负载至特定节点，如蓝绿发布",
    table: {
      "scope": "作用范围",
      "affectTarget": "服务名",
      "createTime": "创建时间",
      "modifyTime": "上次修改",
      "serviceId": "调用服务",
      "keySource": "参数源",
      "keyName": "参数名",
      "matchType": "匹配方式",
      "equals": "精确匹配",
      "regex": "正则匹配",
      "expression": "表达式",
      "filterType": "过滤类型",
      "host": "主机名",
      "metadata": "元数据",
      "signatureKey": "服务参数名",
      "serverInstanceSignature": "服务参数值",
      "enable": "当前状态"
    },
    input: {
      "keyword": "请输入关键字"
    },
    modal: {
      "title": "编辑路由配置",
      "scope": "作用范围",
      "APPLICATION": "应用",
      "INSTANCE": "实例",
      "affectTarget": "服务名",
      "serviceId": "调用服务名",
      "keySource": "参数源",
      "keyName": "参数名",
      "matchType": "匹配类型",
      "equals": "精确匹配",
      "regex": "正则匹配",
      "expression": "表达式",
      "filterType": "过滤类型",
      "host": "主机名",
      "metadata": "元数据",
      "signatureKey": "服务参数名",
      "serverInstanceSignature": "服务参数值",
    }
  },
  sqlMonitor: {
    name: "SQL监控",
    input: {
      "keyword": "请输入sql关键字"
    },
    table: {
      "sql": "SQL语句",
      "costTime": "耗时",
      "jdbcUrl": "JDBC连接",
      "parameters": "参数",
      "explain": "explain",
    }
  }
}
