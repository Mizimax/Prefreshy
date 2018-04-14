<template>
  <div class="modal">
      <ProblemModal>
      </ProblemModal>
      <sui-modal class="login" v-model="open" size="tiny" :closeIcon="true">
        <Login v-if="type === 'login'"></Login>
        <Comment v-if="type === 'comment'"></Comment>
      </sui-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProblemModal from './ProblemModal';
import Login from './Login';
import Comment from './Comment';

export default {
  name: "Modal",
  components: {
    ProblemModal,
    Login,
    Comment
  },
  data () {
    return {
      
    }
  },
  computed: {
    open: {
        get: function () {
          return this.opened && this.type === 'comment'
        },
        set: function () {
          this.$store.dispatch('setModalToggle', {modal:'modal2'})
        }
    },
    ...mapGetters({
      opened: 'getModal2Status',
      type: 'getModal2Type'
    })
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.upload {
    width: 400px !important;
}

</style>
