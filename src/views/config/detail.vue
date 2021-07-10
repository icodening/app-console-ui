<template>
  <div>
    <form>
      <div class="form-group">
        <textarea rows="12" style="resize: none" disabled type="text" class="form-control" id="content"
                  :placeholder="$t('config.modal.content')"
                  v-model="entity.content">
        </textarea>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ConfigDetail",
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
