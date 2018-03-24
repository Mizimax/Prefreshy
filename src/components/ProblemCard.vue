<template>
    <sui-card class="problem-card">
        <h3 style="text-align:center">{{ problems['title'] }}</h3>
        <div v-for="problem of problems['data']">
        {{ problem }}
        <sui-divider />
        </div>
    </sui-card>
</template>

<script>
export default {
  name: "ProblemCard",
  props: ['problems']
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.problem-card {
  width: 100%;
  padding: 20px;
}

</style>
