<template>
  <sui-container class="content">
    <sui-grid :stackable="true">
      <sui-grid-row :columns="2">
        <sui-grid-column class="card-margin" v-for="problem of problems">
          <ProblemCard v-bind:problems="problem"></ProblemCard>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
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

.card-margin {
  margin-bottom: 20px !important;
}


</style>
