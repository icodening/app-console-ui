<template>
  <div>
    <form>
<!--      <div class="form-group">-->
<!--        <label for="scopeSelector">{{$t('routerFilterConfig.modal.scope')}}</label>-->
<!--        <select name="scopeSelector" id="scopeSelector" class="form-control" v-model="entity.scope">-->
<!--          <option value="APPLICATION">{{$t('routerFilterConfig.modal.APPLICATION')}}</option>-->
<!--          <option value="INSTANCE">{{$t('routerFilterConfig.modal.INSTANCE')}}</option>-->
<!--        </select>-->
<!--      </div>-->
      <div class="form-group">
        <label for="affectTarget">{{$t('routerFilterConfig.modal.affectTarget')}}</label>
        <input type="text" class="form-control" id="affectTarget"
               :placeholder="$t('routerFilterConfig.modal.affectTarget')"
               v-model="entity.affectTarget">
      </div>
      <div class="form-group">
        <label for="originService">{{$t('routerFilterConfig.modal.serviceId')}}</label>
        <input type="text" class="form-control" id="originService"
               :placeholder="$t('routerFilterConfig.modal.serviceId')"
               v-model="entity.serviceId">
      </div>

      <div class="form-group">
        <label for="keySourceSelector">{{$t('routerFilterConfig.modal.keySource')}}</label>
        <select name="keySourceSelector" id="keySourceSelector" class="form-control" v-model="entity.keySource">
          <option value="HEADER">HEADER</option>
          <option value="QUERY">QUERY</option>
        </select>
      </div>
      <div class="form-group">
        <label for="keyName">{{$t('routerFilterConfig.modal.keyName')}}</label>
        <input type="text" class="form-control" id="keyName" :placeholder="$t('routerFilterConfig.modal.keyName')"
               v-model="entity.keyName">
      </div>
      <div class="form-group">
        <label for="matchTypeSelector">{{$t('routerFilterConfig.modal.matchType')}}</label>
        <select name="matchTypeSelector" id="matchTypeSelector" class="form-control" v-model="entity.matchType">
          <option value="equals">{{$t('routerFilterConfig.modal.equals')}}</option>
          <option value="regex">{{$t('routerFilterConfig.modal.regex')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="expression">{{$t('routerFilterConfig.modal.expression')}}</label>
        <input type="text" class="form-control" id="expression" :placeholder="$t('routerFilterConfig.modal.expression')"
               v-model="entity.expression">
      </div>
      <div class="form-group">
        <label for="filterTypeSelector">{{$t('routerFilterConfig.modal.filterType')}}</label>
        <select name="filterTypeSelector" id="filterTypeSelector" class="form-control" v-model="entity.filterType">
          <option value="host">{{$t('routerFilterConfig.modal.host')}}</option>
          <option value="metadata">{{$t('routerFilterConfig.modal.metadata')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="signatureKey">{{$t('routerFilterConfig.modal.signatureKey')}}</label>
        <input type="text" class="form-control" id="signatureKey"
               :placeholder="$t('routerFilterConfig.modal.signatureKey')"
               v-model="entity.signatureKey">
      </div>
      <div class="form-group">
        <label for="serverInstanceSignature">{{$t('routerFilterConfig.modal.serverInstanceSignature')}}</label>
        <input type="text" class="form-control" id="serverInstanceSignature"
               :placeholder="$t('routerFilterConfig.modal.serverInstanceSignature')"
               v-model="entity.serverInstanceSignature">
      </div>
      <div class="form-group">
        <label for="enableSelector">{{$t('commons.status')}}</label>
        <select name="enableSelector" id="enableSelector" class="form-control" v-model="entity.enable">
          <option value="true">{{$t('commons.enabled')}}</option>
          <option value="false">{{$t('commons.disabled')}}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RouterFilterConfigEdit",
    props: {
      data: {
        type: Object
      }
    },
    data() {
      return {
        entity: {
          "scope": "APPLICATION",
          "affectTarget": "",
          "serviceId": "",
          "keySource": "HEADER",
          "keyName": "",
          "matchType": "equals",
          "expression": "",
          "filterType": "host",
          "signatureKey": "",
          "serverInstanceSignature": "",
          "enable": "true"
        },
        pageResult: {
          list: []
        },
      }
    },
    mounted() {
      this.entity = this.data;
    },
    methods: {},
    watch: {
      "data": {
        handler: function () {
          this.entity = this.data;
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
