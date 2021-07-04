<template>
  <div>
    <Modal ref="modal" :formViewName="'RateLimitEdit'" @onSave="save"></Modal>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.rateLimit')}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-primary"
                  @click="showModal($t('rateLimit.modal.title'),{},false)">
            {{$t('button.add')}}
          </button>
        </div>
      </div>
    </div>
    <form class="row col-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{{$t('commons.keyword')}}</span>
        </div>
        <input type="text" class="form-control" :placeholder='$t("rateLimit.input.keyword")'
               v-model="queryObject.keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" @click="queryRateLimits">{{$t('commons.search')}}
          </button>
        </div>
      </div>
    </form>
    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
          <th>{{$t('rateLimit.table.scope')}}</th>
          <th>{{$t('rateLimit.table.affectTarget')}}</th>
          <th>{{$t('rateLimit.table.endpoint')}}</th>
          <th>{{$t('rateLimit.table.rule')}}</th>
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
          <td>{{item.frequency}}{{$t('commons.unit.times')}} / {{convertDimension(item.dimension)}}</td>
          <td>
            <span :class="{'text-success':item.enable,'text-danger':!item.enable}">
                   {{item.enable? $t('commons.enabled'):$t('commons.disabled')}}
           </span>
          </td>
          <td>{{item.createTime | dateFormat}}</td>
          <td>{{item.modifyTime | dateFormat}}</td>
          <td>
            <div class="btn-group btn-group-sm" role="group">
              <button class="btn btn btn-outline-success"
                      @click="showModal($t('rateLimit.modal.title'),item, true)">
                {{$t('commons.edit')}}
              </button>
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
  import edit from "./edit";

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
    components: {Modal, edit},
    mounted() {
      this.queryRateLimits();
    },
    methods: {
      save(data) {
        if (data.editFlag) {
          this.editRecord(data.data)
        } else {
          this.addRecord(data.data)
        }
      },
      showModal(title, data, editFlag) {
        if (Object.keys(data).length === 0
          && data.constructor === Object) {
          data = {
            "scope": "APPLICATION",
            "dimension": "MINUTE",
            "frequency": 1,
            "enable": true
          }
        }
        this.$refs.modal.modalToggle({
          title: title,
          data: data,
          editFlag: editFlag
        });
      },
      queryRateLimits() {
        const that = this;
        RateLimitService.queryRateLimits(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      },
      addRecord(item) {
        const that = this;
        RateLimitService.addRecord(item).then(response => {
          if (response.data.success) {
            that.queryRateLimits();
          } else {
            alert(response.data.message)
          }
        })
      },
      editRecord(item) {
        const that = this;
        RateLimitService.editRecord(item).then(response => {
          if (response.data.success) {
            that.queryRateLimits();
          } else {
            alert(response.data.message)
          }
        })
      },
      deleteRecord(id) {
        const that = this;
        //FIXME confirm
        if (confirm("delete a record? ")) {
          RateLimitService.deleteRecord(id).then(response => {
            that.queryRateLimits();
          })
        }
      },
      convertDimension(en) {
        return this.$i18n.t('commons.date.' + en);
      }
    }
  }
</script>

<style scoped>

</style>
