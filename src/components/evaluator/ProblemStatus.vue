<template>
  <div>
    <div class="name">Student : {{ name }}</div>
    <div class="status" style="margin-top: 7px;">
      Status : {{ status[problem_status] }}
      <sui-button v-if="problem_status !== 0" class="font-smaller" size="small" color="pink">
        Comment
      </sui-button>
    </div>
    <sui-button class="font-smaller" size="small" color="pink" style="margin: 10px">
        Download Code
    </sui-button>
    <sui-button class="font-smaller" size="small" color="pink" style="margin-top: 10px;">
        ตรวจ<span v-if="problem_status !== 0">อีกครั้ง</span>
    </sui-button>
  </div>
</template>

<script>

export default {
  name: "EvaluatorProblemStatus",
  data() {
    return {
      problem_status: 0,
      name: '',
      status: ['ยังไม่ตรวจ', 'ผ่านการตรวจ', 'ไม่ผ่านการตรวจ']
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar {
  position: fixed;
}


</style>
