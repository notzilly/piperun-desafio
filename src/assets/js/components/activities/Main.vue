<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Atividades</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'ActivitiesMain'
  }
</script>


<style scoped>
  .page-header {
    margin-top: 20px;
  }
 .main {
    padding-right: 40px;
    padding-left: 40px;
  }
</style>
