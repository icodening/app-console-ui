module.exports = {
  menu: {
    "instanceList": "应用概览",
    "rateLimit": "流量控制",
    "config": "动态配置",
    "routerConfig": "路由配置",
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
  applicationOverview: {
    table: {
      "applicationName": "应用名",
      "identity": "应用标识",
      "ip": "IP",
      "port": "端口",
      "pid": "进程号",
      "viewLog": "查看日志"
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
    table: {
      "scope": "作用范围",
      "affectTarget": "影响目标",
      "createTime": "创建时间",
      "modifyTime": "上次修改",
      "originService": "原调用服务",
      "targetService": "目标调用服务",
      "keyName": "Key名",
      "matchType": "匹配方式",
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
      "keySource": "KEY源头",
      "keyName": "KEY名",
      "matchType": "匹配类型",
      "equals": "精确匹配",
      "regex": "正则匹配",
      "expression": "表达式",
    }
  }
}
