<template>
  <div class="container content">
    <sui-card class="myCard">
      <h1>{{ msg }}</h1>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Scoreboard"
    };
  },
  mounted () {
    this.$Progress.finish()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
