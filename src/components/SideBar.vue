<template>
  <div class="position-sticky pt-3">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link v-for="route in routes" :key="route.path" :to="route.path"
                     class="nav-link" active-class="active" exact>
          {{$t('menu.' + route.name)}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    computed: {
      routes() {
        let routes = [];
        let index = 0;
        for (let i = 0; i < this.$router.options.routes.length; i++) {
          if (this.$router.options.routes[i].path !== '/') {
            routes[index] = this.$router.options.routes[i];
            index ++;
          }
        }
        return routes
      },
    },
  }
</script>
