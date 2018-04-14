<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view></router-view>
    <Modal></Modal>
    <Footer></Footer>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Modal from './components/modal/Modal'

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer,
    Modal
  },
  computed: {
    ...mapGetters([
      'getModalStatus'
    ])
  },
  created () {
    //hidden scroll when modal open
    this.$watch('getModalStatus', open => {   
      if(open){
        document.body.style.overflowY = 'hidden';
        document.body.style.marginRight = '.5em';
      }
      else {
        document.body.style.overflowY = 'auto';
        document.body.style.marginRight = '0';
        
      }
    })
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
  height:100%;
  background-color: #D5D8CC;
}

::-webkit-scrollbar {
    width: .5em;
}
 
::-webkit-scrollbar-track {
    
}
 
::-webkit-scrollbar-thumb {
  background-color: rgb(245, 70, 99);
}

#app {
  position: relative;
  min-height: 100%;
}

.scroll {
  overflow-y: hidden;
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

.text-wrap {
  word-break: break-all;
}

.hide {
  display: none;
}

.container {
  margin: 0 auto;
  max-width: 1024px;
}

.center {
  text-align: center !important;
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

.ui.modal {
  max-height: 100%;
}

.ui.pink.button:not(.inverted), .ui.pink.buttons .button {
  background-color: rgb(245, 70, 99) !important;
}

</style>
