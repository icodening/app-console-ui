<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  table th, td {
    text-align: center;
  }

  table .btn-sm, .btn-group-sm > .btn {
    padding: 0.05rem 0.5rem !important;
    font-size: 0.875rem !important;
    border-radius: 0 !important;
  }

  .form-control:focus,
  .btn:focus,
  .has-success .form-control:focus,
  .has-warning .form-control:focus,
  .has-error .form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
</style>
