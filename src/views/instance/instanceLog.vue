<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('log.title')}}</h1>
    </div>
    <form class="row col-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{{$t('commons.keyword')}}</span>
        </div>
        <input type="text" class="form-control" :placeholder='$t("log.keyword")'
               v-model="queryObject.keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button">{{$t('commons.search')}}
          </button>
        </div>
      </div>
    </form>
    <div class="card text-white bg-dark" style="overflow-y: auto;" id="logarea">
      <div class="card-body" style="padding-top: 0">
        <p v-html="log" class="log-content"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Convert from 'ansi-to-html'

  const convert = new Convert()
  export default {
    name: "instanceLog",
    data() {
      return {
        queryObject: {
          "applicationName": "",
          "identity": "",
          "ip": "",
          "keywords": ""
        },
        log: "",
        pageResult: {
          list: []
        }
      }
    },
    mounted: function () {
      const that = this;
      let logarea = document.getElementById("logarea");
      logarea.style.height = window.innerHeight - 200 + "px";
      logarea.scrollTop = logarea.scrollHeight + 100;
      window.onresize = function () {
        logarea.style.height = window.innerHeight - 200 + "px";
        logarea.scrollTop = logarea.scrollHeight + 100;
      }
      let instanceId = this.$route.params.id;
      let isSecure = 'https:' === document.location.protocol;
      let protocol = isSecure ? "wss://" : "ws://";
      let url = protocol + window.location.host + "/log/" + instanceId;
      let ws = new WebSocket(url);
      let tmp = null;
      ws.onmessage = function (data) {
        if (data.data instanceof Blob) {
          let blob = data.data;
          blob.text().then(string => {
            //以换行标识完整数据包
            if (string.charAt(string.length - 1) === "\n") {
              if (tmp == null) {
                that.log = convert.toHtml(that.log + string);
              } else {
                that.log = convert.toHtml(that.log + (tmp += string));
                tmp = null;
              }
            } else {
              tmp += string;
            }
            logarea.scrollTop = logarea.scrollHeight + 100;
          })
        }
      }
      ws.onclose = function () {
        console.log("websocket closed!!");
      }
      ws.onerror = function (err) {
        console.debug(err)
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .log-content {
    padding-top: -15px;
    white-space: pre;
    font-family: 'monospace';
    letter-spacing: 1q;
    line-height: 20q;
    font-size: 14px;
    padding-bottom: 30px;
  }
</style>
