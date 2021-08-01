<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('sqlMonitor.name')}}</h1>
    </div>
<!--    <form class="row col-3">-->
<!--      <div class="input-group mb-3">-->
<!--        <div class="input-group-prepend">-->
<!--          <span class="input-group-text">{{$t('commons.keyword')}}</span>-->
<!--        </div>-->
<!--        <input type="text" class="form-control" :placeholder='$t("sqlMonitor.input.keyword")'-->
<!--               v-model="queryObject.keywords">-->
<!--        <div class="input-group-append">-->
<!--          <button class="btn btn-outline-primary" type="button">{{$t('commons.search')}}-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->

    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
          <th style="width: 50%">{{$t('sqlMonitor.table.sql')}}</th>
          <th style="width: 10%">{{$t('sqlMonitor.table.parameters')}}</th>
          <th style="width: 5%">{{$t('sqlMonitor.table.costTime')}}</th>
          <th style="width: 25%">{{$t('sqlMonitor.table.jdbcUrl')}}</th>
          <th style="width: 10%">{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
          <td style="white-space: nowrap;word-break: keep-all;overflow: hidden" :title="item.sql"><small class="text-muted">{{item.sql}}</small></td>
          <td><small class="text-muted">{{item.parameters}}</small></td>
          <td><small class="text-muted">{{item.costTime}} ms</small></td>
          <td style="white-space: nowrap;word-break: keep-all;overflow: hidden"><small class="text-muted">{{item.jdbcUrl}}</small></td>
          <td>
            <button class="btn btn btn-outline-success btn-sm">
             {{$t('sqlMonitor.table.explain')}}
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import Convert from 'ansi-to-html'
  import {SQLMonitorService} from "@/service";

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
      let instanceId = this.$route.params.id;
      this.querySQLMonitor(instanceId);
    },
    methods: {
      querySQLMonitor(instanceId) {
        const that = this;
        SQLMonitorService.query(instanceId).then(response => {
          that.pageResult = response.data.data;
        });
      }
    }
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
