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
  background-color: #D5D8CC;
}

a {
  color: #c58ec3;
}

.bg.primary a {
  color: #D5D8CC;
}

.bg.primary {
  background-color: #c58ec3;
}

.bg.secondary {
  background-color: #D5D8CC;
}

.color.primary {
  color: #656360;
}

.color.secondary {
  color: #D5D8CC;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.middle {
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.container {
  margin: 0 auto;
  max-width: 1024px;
}

</style>
