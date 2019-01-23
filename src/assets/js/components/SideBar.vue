<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active"><a href="#">Pipeline</a></li>
      <li><a href="#">Atividades</a></li>
      <li><a href="#">Empresas</a></li>
      <li><a href="#">Pessoas</a></li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#!" @click.prevent="logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
}
</script>

<style scoped>
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }

  /* Sidebar navigation */
  .nav-sidebar {
    margin-right: -21px; /* 20px padding + 1px border */
    margin-bottom: 20px;
    margin-left: -20px;
  }
  .nav-sidebar > li > a {
    padding-right: 20px;
    padding-left: 20px;
  }

  /*
  * Main content
  */

  .main {
    padding: 20px;
  }
  @media (min-width: 768px) {
    .main {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  .main .page-header {
    margin-top: 0;
  }
</style>
