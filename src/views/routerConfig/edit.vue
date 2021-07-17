<template>
  <div>
    <form>
      <div class="form-group">
        <label for="scopeSelector">{{$t('routerConfig.modal.scope')}}</label>
        <select name="scopeSelector" id="scopeSelector" class="form-control" v-model="entity.scope">
          <option value="APPLICATION">{{$t('routerConfig.modal.APPLICATION')}}</option>
          <option value="INSTANCE">{{$t('routerConfig.modal.INSTANCE')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="affectTarget">{{$t('routerConfig.modal.affectTarget')}}</label>
        <input type="text" class="form-control" id="affectTarget" :placeholder="$t('routerConfig.modal.affectTarget')"
               v-model="entity.affectTarget">
      </div>
      <div class="form-group">
        <label for="originService">{{$t('routerConfig.modal.originService')}}</label>
        <input type="text" class="form-control" id="originService" :placeholder="$t('routerConfig.modal.originService')"
               v-model="entity.originService">
      </div>
      <div class="form-group">
        <label for="targetService">{{$t('routerConfig.modal.targetService')}}</label>
        <input type="text" class="form-control" id="targetService" :placeholder="$t('routerConfig.modal.targetService')"
               v-model="entity.targetService">
      </div>
      <div class="form-group">
        <label for="keySourceSelector">{{$t('routerConfig.modal.keySource')}}</label>
        <select name="keySourceSelector" id="keySourceSelector" class="form-control" v-model="entity.keySource">
          <option value="HEADER">HEADER</option>
          <option value="QUERY">QUERY</option>
        </select>
      </div>
      <div class="form-group">
        <label for="keyName">{{$t('routerConfig.modal.keyName')}}</label>
        <input type="text" class="form-control" id="keyName" :placeholder="$t('routerConfig.modal.keyName')"
               v-model="entity.keyName">
      </div>
      <div class="form-group">
        <label for="matchTypeSelector">{{$t('routerConfig.modal.matchType')}}</label>
        <select name="matchTypeSelector" id="matchTypeSelector" class="form-control" v-model="entity.matchType">
          <option value="equals">{{$t('routerConfig.modal.equals')}}</option>
          <option value="regex">{{$t('routerConfig.modal.regex')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="expression">{{$t('routerConfig.modal.expression')}}</label>
        <input type="text" class="form-control" id="expression" :placeholder="$t('routerConfig.modal.expression')"
               v-model="entity.expression">
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
    name: "RouterConfigEdit",
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
          "originService": "",
          "targetService": "",
          "keySource": "HEADER",
          "keyName": "",
          "matchType": "equals",
          "expression": "",
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
