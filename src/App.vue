<template>
  <div @androidback="back">
    <stbui-header title="工作台"></stbui-header>
    <transition>
      <router-view style="flex:1"></router-view>
    </transition>
    <stbui-footer></stbui-footer>
  </div>
</template>

<style>
/*.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
  opacity: 1;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}*/
</style>

<script>
export default {
  methods: {
    back: function () {
      this.$router.back()
    }
  }
}
</script>
