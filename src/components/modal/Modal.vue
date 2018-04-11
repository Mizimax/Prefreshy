<template>
  <div class="modal">
      <ProblemModal v-if="type === 'problem'">
      </ProblemModal>
      <Login v-if="type === 'login'"></Login>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProblemModal from './ProblemModal';
import Login from './Login';

export default {
  name: "Modal",
  computed: {
    ...mapGetters({
      type: 'getModalType'
    })
  },
  components: {
    ProblemModal,
    Login
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.upload {
    width: 400px !important;
}

</style>
