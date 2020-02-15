<template>
  <div :id="name" class="overlay">
    <div class="modals">
      <slot></slot>

      <slot name="footer"></slot>

      <a href="#" class="close-btn">&times;</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="css">
.overlay {
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 1s;
  opacity: 0;
}

.modals {
  position: relative;
  border-radius: .7rem;
  padding: 1.5rem;
  background: #fff;
  width: 90%;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 1rem 0 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}
</style>
