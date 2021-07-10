<template>
  <div class="position-sticky pt-3">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link v-for="route in routes" :key="route.path" :to="route.path"
                     class="nav-link" active-class="active">
          <i v-if="route.hasLogo" :class="route.icon" role="img"></i> &nbsp;{{$t('menu.' + route.name)}}
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
          let r = this.$router.options.routes[i];
          if (r.path !== '/') {
            routes[index] = this.$router.options.routes[i];
            if (r.icon) {
              routes[index].hasLogo = true;
              routes[index].logo = r.icon;
            }
            index++;
          }
        }
        return routes
      },
    },
  }
</script>
<style scoped>

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
</style>
