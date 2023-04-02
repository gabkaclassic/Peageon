<template>

  <div class="modal" tabindex="-1" role="dialog" id="modalWindow">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> <slot name="title" /> </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><slot name="content" /></p>
        </div>
        <div class="modal-footer">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {Popover} from "bootstrap";

export default {
  name: "ModalWindow",
  methods: {
    close() {
      let mod = document.getElementById('modalWindow')
      let myModal = new Popover().Modal(mod, {
        keyboard: false
      })
      myModal.hide()
    }
  }
}
</script>

<style scoped>

</style>