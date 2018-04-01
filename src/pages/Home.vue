<template>
  <sui-container class="content">
    <sui-grid :stackable="true">
      <sui-grid-row :columns="2">
        <sui-grid-column :width="11">
          <sui-card class="myCard">
            <h1>{{ msg }}</h1>
          </sui-card>
        </sui-grid-column>
        <sui-grid-column :width="5">
          <sui-card class="myCard">
            <h1>Ranking</h1>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
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
