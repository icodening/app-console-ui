<template>
  <div>
    <router-view :key="viewKey"></router-view>
  </div>
</template>

<script>
  export default {
    name: "AppMain",
    computed: {
      viewKey() {
        return this.$route.fullPath;
      }
    }
  }
</script>

<style scoped>

</style>
