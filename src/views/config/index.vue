<template>
  <div>
    <Modal ref="modal" @onSave="save"></Modal>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h4">{{$t('menu.config')}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-primary"
                  @click="showModal($t('config.modal.title'),{},false)">
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
          <button class="btn btn-outline-primary" type="button" @click="queryConfigs">{{$t('commons.search')}}
          </button>
        </div>
      </div>

    </form>
    <div class="table-responsive">
      <table class="table table-hover table-bordered" style="table-layout: fixed">
        <thead>
        <tr>
          <th>{{$t('config.table.scope')}}</th>
          <th>{{$t('config.table.affectTarget')}}</th>
          <th>{{$t('config.table.content')}}</th>
          <th>{{$t('config.table.enable')}}</th>
          <th>{{$t('config.table.createTime')}}</th>
          <th>{{$t('config.table.modifyTime')}}</th>
          <th>{{$t('table.option')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pageResult.list">
          <td>{{item.scope}}</td>
          <td>{{item.affectTarget}}</td>
          <td>
            <button class="btn btn-link btn-sm text-decoration-none text-info" @click="showDetail($t('config.name')+$t('commons.detail'),item, true)">
              {{$t('config.name')+$t('commons.detail')}}
            </button>
          </td>
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
                      @click="showModal($t('config.modal.title'),item, true)">
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
  import {ConfigService} from "@/service";
  import Modal from "../../components/Modal";
  import edit from "./edit";
  import detail from "./detail";

  export default {
    name: "config",
    data() {
      return {
        queryObject: {
          "applicationName": "",
          "identity": "",
          "keywords": ""
        },
        pageResult: {
          list: []
        },
      }
    },
    components: {Modal, edit, detail},
    mounted() {
      this.queryConfigs();
    },
    methods: {
      save(data) {
        if (data.editFlag) {
          this.editRecord(data.data)
        } else {
          this.addRecord(data.data)
        }
      },
      showDetail(title, data, editFlag) {
        this.$refs.modal.modalToggle({
          title: title,
          data: data,
          viewName: "ConfigDetail",
          showSaveBtn: false,
          editFlag: editFlag
        });
      },
      showModal(title, data, editFlag) {
        if (Object.keys(data).length === 0
          && data.constructor === Object) {
          data = {
            "scope": "APPLICATION",
            "dimension": "MINUTE",
            "content": "",
            "enable": true
          }
        }
        this.$refs.modal.modalToggle({
          title: title,
          data: data,
          viewName: "ConfigEdit",
          editFlag: editFlag
        });
      },
      queryConfigs() {
        const that = this;
        ConfigService.query(this.queryObject).then(response => {
          that.pageResult = response.data.data;
        })
      },
      addRecord(item) {
        const that = this;
        ConfigService.addRecord(item).then(response => {
          if (response.data.success) {
            that.queryConfigs();
          } else {
            alert(response.data.message)
          }
        })
      },
      editRecord(item) {
        const that = this;
        ConfigService.editRecord(item).then(response => {
          if (response.data.success) {
            that.queryConfigs();
          } else {
            alert(response.data.message)
          }
        })
      },
      deleteRecord(id) {
        const that = this;
        //FIXME confirm
        if (confirm("delete a record? ")) {
          ConfigService.deleteRecord(id).then(response => {
            that.queryConfigs();
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
