<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-default-button">
              <button class=" btn short" @click="$emit('close')">
                OK
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>

</style>