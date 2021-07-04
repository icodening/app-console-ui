<template>
  <div>
    <Modal :title="'abc'" ref="modal"></Modal>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.rateLimit')}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-primary" @click="showModal">
            {{$t('button.add')}}
          </button>
        </div>
      </div>
    </div>
    <form class="row col-3">
      <div class="input-group mb-3">
        <span class="input-group-text">{{$t('commons.keyword')}}</span>
        <input type="text" class="form-control" :placeholder='$t("rateLimit.input.keyword")'
               v-model="queryObject.keywords">
        <button class="btn btn-outline-primary" type="button" @click="queryRateLimits">{{$t('commons.search')}}
        </button>
      </div>
    </form>
    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
          <th>{{$t('rateLimit.table.scope')}}</th>
          <th>{{$t('rateLimit.table.affectTarget')}}</th>
          <th>{{$t('rateLimit.table.endpoint')}}</th>
          <th>{{$t('rateLimit.table.frequency')}}</th>
          <th>{{$t('rateLimit.table.dimension')}}</th>
          <th>{{$t('rateLimit.table.enable')}}</th>
          <th>{{$t('rateLimit.table.createTime')}}</th>
          <th>{{$t('rateLimit.table.modifyTime')}}</th>
          <th>{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
          <td>{{item.scope}}</td>
          <td>{{item.affectTarget}}</td>
          <td>{{item.endpoint}}</td>
          <td>{{item.frequency}}</td>
          <td>{{item.dimension}}</td>
          <td>
            <span class="badge"
                  :class="{'bg-success':item.enable,'bg-danger':!item.enable}">
            {{item.enable? $t('commons.enabled'):$t('commons.disabled')}}</span>
          </td>
          <td>{{item.createTime | dateFormat}}</td>
          <td>{{item.modifyTime | dateFormat}}</td>
          <td>
            <div class="btn-group btn-group-sm" role="group">
              <button class="btn btn btn-outline-primary">{{$t('commons.edit')}}</button>
              <button class="btn btn btn-outline-danger" @click="deleteRecord(item.id)">{{$t('commons.delete')}}
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {RateLimitService} from "@/service";
  import Modal from "../../components/Modal";

  export default {
    name: "rateLimit",
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
    components: {Modal},
    mounted() {
      this.queryRateLimits();
    },
    methods: {
      showModal(){
        this.$refs.modal.modalToggle();
      },
      queryRateLimits() {
        const that = this;
        RateLimitService.queryRateLimits(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      },
      deleteRecord(id) {
        const that = this;
        RateLimitService.deleteRecord(id).then(response => {
          that.queryRateLimits();
        })
      }
    }
  }
</script>

<style scoped>

</style>
