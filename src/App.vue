<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view></router-view>
    <Modal :size="size" :type="type" :title="title" :description="description"></Modal>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Modal from './components/modal/Modal'

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Modal
  },
  data () {
    return {
      size: "standart",
      type: "problem",
      title: "",
      description: ""
    }
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

.font-small {
  font-size: 14px !important;
}

.font-smaller {
  font-size: 12px !important;
}

.bold {
  font-weight: bold !important;
}

.hide {
  display: none;
}

.container {
  margin: 0 auto;
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

.myCard {
  width: 100% !important;
  padding: 20px !important;
}

</style>
