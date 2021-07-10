<template>
  <div>
    <form>
      <div class="form-group">
        <label for="scopeSelector">{{$t('config.modal.scope')}}</label>
        <select name="scopeSelector" id="scopeSelector" class="form-control" v-model="entity.scope">
          <option value="APPLICATION">{{$t('config.modal.APPLICATION')}}</option>
          <option value="INSTANCE">{{$t('config.modal.INSTANCE')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="affectTarget">{{$t('config.modal.affectTarget')}}</label>
        <input type="text" class="form-control" id="affectTarget" :placeholder="$t('config.modal.affectTarget')"
               v-model="entity.affectTarget">
      </div>
      <div class="form-group">
        <label for="content">{{$t('config.modal.content')}}</label>
        <textarea rows="12" style="resize: none" type="text" class="form-control" id="content" :placeholder="$t('config.modal.content')"
               v-model="entity.content">
        </textarea>
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
    name: "ConfigEdit",
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
          "content": "",
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
