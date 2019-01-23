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
import SideBar from './SideBar.vue';

export default {
  name: 'App',
  components: {SideBar}
}
</script>

<style src="../../sass/app.scss" lang="sass"></style>
<style>
  body {
		color: #fff;
		background: #3598dc;
	}
</style>

