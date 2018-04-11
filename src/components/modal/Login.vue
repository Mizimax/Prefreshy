<template>
  <sui-modal v-model="open" :size="size">
    555
  </sui-modal>
</template>

<script>
export default {
  name: "Login",
  props: ["open", "size"],
  data() {
    return {
      msg: "Login"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
