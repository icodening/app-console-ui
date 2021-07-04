<template>
  <div>
    <div class="modal fade" id="editModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{modalOption.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <component :is="formViewName" v-bind:data="modalOption.data"></component>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{$t('button.close')}}</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save">{{$t('button.save')}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Modal} from 'bootstrap'

  export default {
    name: "Modal",
    props: {
      "formViewName": {
        type: String
      },
    },
    data() {
      return {
        modalOption: {
          title: "",
          data: {},
          editFlag: false
        },
        modalWindow: {}
      }
    },
    mounted() {
      this.modalWindow = new Modal(document.getElementById('editModal'));
    },
    methods: {
      modalToggle(option) {
        this.modalOption = option;
        this.modalWindow.toggle();
      },
      save() {
        let data = {
          "data": this.modalOption.data,
          "editFlag": this.modalOption.editFlag
        }
        this.$emit("onSave", data);
      }
    }
  }
</script>

<style scoped>

</style>
