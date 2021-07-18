<template>
  <div>
    <Modal ref="modal" :formViewName="'RouterFilterConfigEdit'" @onSave="save"></Modal>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.routerFilterConfig')}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-primary"
                  @click="showModal($t('routerFilterConfig.modal.title'),{},false)">
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
        <input type="text" class="form-control" :placeholder='$t("routerFilterConfig.input.keyword")'
               v-model="queryObject.keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" @click="query">{{$t('commons.search')}}
          </button>
        </div>
      </div>
    </form>
    <small id="routerConfigTips" class="form-text text-muted mb-3">{{$t('routerFilterConfig.tips')}}</small>
    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
<!--          <th>{{$t('configurableScope.scope')}}</th>-->
          <th>{{$t('routerFilterConfig.table.affectTarget')}}</th>
          <th>{{$t('routerFilterConfig.table.serviceId')}}</th>
          <th>{{$t('routerFilterConfig.table.keySource')}}</th>
          <th>{{$t('routerFilterConfig.table.keyName')}}</th>
          <th>{{$t('routerFilterConfig.table.matchType')}}</th>
          <th>{{$t('routerFilterConfig.table.expression')}}</th>
          <th>{{$t('routerFilterConfig.table.filterType')}}</th>
          <th>{{$t('routerFilterConfig.table.signatureKey')}}</th>
          <th>{{$t('routerFilterConfig.table.serverInstanceSignature')}}</th>
          <th>{{$t('routerFilterConfig.table.enable')}}</th>
<!--          <th>{{$t('routerFilterConfig.table.createTime')}}</th>-->
          <th>{{$t('routerFilterConfig.table.modifyTime')}}</th>
          <th>{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
<!--          <td>{{item.scope}}</td>-->
          <td>{{item.affectTarget}}</td>
          <td>{{item.serviceId}}</td>
          <td>{{item.keySource}}</td>
          <td>{{item.keyName}}</td>
          <td>{{$t('routerFilterConfig.table.'+item.matchType)}} </td>
          <td>{{item.expression}}</td>
          <td>{{$t('routerFilterConfig.table.'+ item.filterType)}}</td>
          <td>{{item.signatureKey===''? '*':item.signatureKey}}</td>
          <td>{{item.serverInstanceSignature}}</td>
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
  import {RouterFilterConfigService} from "@/service";
  import Modal from "../../components/Modal";
  import edit from "./edit";

  export default {
    name: "routerFilterConfig",
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
            "filterType": "host",
            "signatureKey": "",
            "serverInstanceSignature": "",
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
        RouterFilterConfigService.query(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      },
      addRecord(item) {
        const that = this;
        RouterFilterConfigService.addRecord(item).then(response => {
          if (response.data.success) {
            that.query();
          } else {
            alert(response.data.message)
          }
        })
      },
      editRecord(item) {
        const that = this;
        RouterFilterConfigService.editRecord(item).then(response => {
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
          RouterFilterConfigService.deleteRecord(id).then(response => {
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
