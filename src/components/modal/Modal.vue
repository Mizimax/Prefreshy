<template>
  <div class="modal">
    <sui-modal v-model="open" :size="size">
      <ProblemModal v-if="type === 'problem'" :title="title" :description="description"></ProblemModal>
      <Login v-if="type === 'login'"></Login>
    </sui-modal>
  </div>
</template>

<script>
import ProblemModal from './ProblemModal';
import Login from './Login';

export default {
  name: "Modal",
  components: {
    ProblemModal,
    Login
  },
  props: ["size", "type", "title", "description"],
  data() {
    return { open: true };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.upload {
    width: 400px !important;
}

</style>
