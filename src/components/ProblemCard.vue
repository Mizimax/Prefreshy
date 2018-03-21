<template>
    <sui-card class="problem-card">
        <div v-for="problem of problems">
        {{ problem['.value'] }}
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
