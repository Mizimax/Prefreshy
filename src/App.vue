<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
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

.pointer {
  cursor: pointer;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
}

@media (max-width: 1100px) {
  .container {
    margin: 0 20px;
  }
}

.content {
  margin-top: 15px;
}

</style>
