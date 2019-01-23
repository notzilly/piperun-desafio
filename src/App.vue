<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <SideBar/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {SideBar}
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
