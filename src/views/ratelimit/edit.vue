<template>
  <div>
    <form>
      <div class="form-group">
        <label for="scopeSelector">{{$t('rateLimit.modal.scope')}}</label>
        <select name="scopeSelector" id="scopeSelector" class="form-control" v-model="entity.scope">
          <option value="APPLICATION">{{$t('rateLimit.modal.APPLICATION')}}</option>
          <option value="INSTANCE">{{$t('rateLimit.modal.INSTANCE')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="affectTarget">{{$t('rateLimit.modal.affectTarget')}}</label>
        <input type="text" class="form-control" id="affectTarget" :placeholder="$t('rateLimit.modal.affectTarget')"
               v-model="entity.affectTarget">
      </div>
      <div class="form-group">
        <label for="dimensionSelector">{{$t('rateLimit.modal.dimension')}}</label>
        <select name="dimensionSelector" id="dimensionSelector" class="form-control" v-model="entity.dimension">
          <option value="YEAR">{{$t('commons.date.YEAR')}}</option>
          <option value="MONTH">{{$t('commons.date.MONTH')}}</option>
          <option value="DAY">{{$t('commons.date.DAY')}}</option>
          <option value="HOUR">{{$t('commons.date.HOUR')}}</option>
          <option value="MINUTE">{{$t('commons.date.MINUTE')}}</option>
          <option value="SECOND">{{$t('commons.date.SECOND')}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="frequency">{{$t('rateLimit.modal.frequency')}}</label>
        <input type="number" class="form-control" id="frequency" :placeholder="$t('rateLimit.modal.frequency')"
               v-model="entity.frequency">
      </div>
      <div class="form-group">
        <label for="endpoint">{{$t('rateLimit.modal.endpoint')}}</label>
        <input type="text" class="form-control" id="endpoint" :placeholder="$t('rateLimit.modal.endpoint')"
               v-model="entity.endpoint">
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
    name: "RateLimitEdit",
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
          "dimension": "MINUTE",
          "frequency": 1,
          "endpoint": "",
          "enable": "true"
        },
        pageResult: {
          list: []
        },
      }
    },
    mounted() {
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
