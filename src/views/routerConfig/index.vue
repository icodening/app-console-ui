<template>
  <div>
    <Modal ref="modal" :formViewName="'RouterConfigEdit'" @onSave="save"></Modal>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.routerConfig')}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-primary"
                  @click="showModal($t('routerConfig.modal.title'),{},false)">
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
        <input type="text" class="form-control" :placeholder='$t("routerConfig.input.keyword")'
               v-model="queryObject.keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" @click="query">{{$t('commons.search')}}
          </button>
        </div>
      </div>
    </form>
    <small id="routerConfigTips" class="form-text text-muted mb-3">{{$t('routerConfig.tips')}}</small>
    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
<!--          <th>{{$t('routerConfig.table.scope')}}</th>-->
          <th>{{$t('routerConfig.table.affectTarget')}}</th>
          <th>{{$t('routerConfig.table.originService')}}</th>
          <th>{{$t('routerConfig.table.targetService')}}</th>
          <th>{{$t('routerConfig.table.keySource')}}</th>
          <th>{{$t('routerConfig.table.keyName')}}</th>
          <th>{{$t('routerConfig.table.matchType')}}</th>
          <th>{{$t('routerConfig.table.expression')}}</th>
          <th>{{$t('routerConfig.table.enable')}}</th>
<!--          <th>{{$t('routerConfig.table.createTime')}}</th>-->
          <th>{{$t('routerConfig.table.modifyTime')}}</th>
          <th>{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
<!--          <td>{{item.scope}}</td>-->
          <td>{{item.affectTarget}}</td>
          <td>{{item.originService}}</td>
          <td>{{item.targetService}}</td>
          <td>{{item.keySource}}</td>
          <td>{{item.keyName}}</td>
          <td>{{$t('routerConfig.table.'+item.matchType)}} </td>
          <td>{{item.expression}}</td>
          <td>
            <span :class="{'text-success':item.enable,'text-danger':!item.enable}">
                   {{item.enable? $t('commons.enabled'):$t('commons.disabled')}}
           </span>
          </td>
<!--          <td>{{item.createTime | dateFormat}}</td>-->
          <td>{{item.modifyTime | dateFormat}}</td>
          <td>
            <div class="btn-group btn-group-sm" role="group">
              <button class="btn btn btn-outline-success"
                      @click="showModal($t('routerConfig.modal.title'),item, true)">
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
  import {RouterConfigService} from "@/service";
  import Modal from "../../components/Modal";
  import edit from "./edit";

  export default {
    name: "routerConfig",
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
      this.query();
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
            "affectTarget": "",
            "originService": "",
            "targetService": "",
            "keySource": "HEADER",
            "keyName": "",
            "matchType": "equals",
            "expression": "",
            "enable": "true"
          }
        }
        this.$refs.modal.modalToggle({
          title: title,
          data: data,
          editFlag: editFlag
        });
      },
      query() {
        const that = this;
        RouterConfigService.query(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      },
      addRecord(item) {
        const that = this;
        RouterConfigService.addRecord(item).then(response => {
          if (response.data.success) {
            that.query();
          } else {
            alert(response.data.message)
          }
        })
      },
      editRecord(item) {
        const that = this;
        RouterConfigService.editRecord(item).then(response => {
          if (response.data.success) {
            that.query();
          } else {
            alert(response.data.message)
          }
        })
      },
      deleteRecord(id) {
        const that = this;
        //FIXME confirm
        if (confirm("delete a record? ")) {
          RouterConfigService.deleteRecord(id).then(response => {
            that.query();
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
