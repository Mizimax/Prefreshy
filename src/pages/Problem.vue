<template>
  <div class="container content">
  <ProblemCard v-bind:problems="problems"></ProblemCard>
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
  firebase: {
    problems: {
      source: db.ref('Problems'),
      readyCallback: function() {
          console.log(this.problems);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
