<template>
  <div class="container content">
    <ProblemCard v-for="problem of problems" v-bind:problems="problem"></ProblemCard>
  </div>
</template>

<script>

import { db } from '../firebase'
import ProblemCard from '../components/ProblemCard'

export default {
  name: "HelloWorld",
  components: {ProblemCard: ProblemCard},
  data() {
    return {
      msg: "Problem",
      problems: {}
    };
  },
  mounted () {
    this.$Progress.finish()
  },
  beforeRouteEnter (to, from, next) {
    db.ref('problems').on('value',(snapshot)=> {
      next(vm => vm.problems = snapshot.val());
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
