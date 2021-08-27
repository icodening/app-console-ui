<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.instanceList')}}</h1>
    </div>
    <form class="row col-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{{$t('commons.keyword')}}</span>
        </div>
        <input type="text" class="form-control" :placeholder='$t("applicationOverview.input.keyword")'
               v-model="queryObject.keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" @click="queryInstances">{{$t('commons.search')}}
          </button>
        </div>
      </div>
    </form>

    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
          <th>{{$t('applicationOverview.table.applicationName')}}</th>
          <th>{{$t('applicationOverview.table.identity')}}</th>
          <th>{{$t('applicationOverview.table.ip')}}</th>
          <th>{{$t('applicationOverview.table.port')}}</th>
          <th>{{$t('applicationOverview.table.pid')}}</th>
          <th>{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
          <td>{{item.applicationName}}</td>
          <td>{{item.identity}}</td>
          <td>{{item.ip}}</td>
          <td>{{item.port}}</td>
          <td>{{item.pid}}</td>
          <td>
            <div class="btn-group btn-group-sm" role="group">
              <router-link class="btn btn btn-outline-success"
                           :to="{name:'instanceLog', params:{instance: item, id:item.id}, path:'/instance/:id/log'}">
                {{$t('applicationOverview.table.viewLog')}}
              </router-link>
              <!--              <router-link class="btn btn btn-outline-success" :to="{params:{instance:1}, path:'/instance/'+item.id+'/log'}">-->
              <!--                {{$t('applicationOverview.table.viewLog')}}-->
              <!--              </router-link>-->

              <router-link class="btn btn btn-outline-success" :to="'/instance/'+item.id+'/sqlMonitor'">
                {{$t('applicationOverview.table.sqlMonitor')}}
              </router-link>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {InstanceService} from "@/service";

  export default {
    name: "instanceList",
    data() {
      return {
        queryObject: {
          "applicationName": "",
          "identity": "",
          "ip": "",
          "keywords": ""
        },
        pageResult: {
          list: []
        },
      }
    },
    mounted() {
      this.queryInstances();
    },
    computed: {
      routes() {
        return this.$router.options.routes
      },
    },
    methods: {
      queryInstances() {
        const that = this;
        InstanceService.queryInstances(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
