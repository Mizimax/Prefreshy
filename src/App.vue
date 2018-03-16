<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    Navbar
  }
};

</script>

<style>

body {
  margin: 0;
  padding: 0;
}

.router-link-active,
.router-link-exact-active {
  color: indianred;
  cursor: pointer;
}
</style>
