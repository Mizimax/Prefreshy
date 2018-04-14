<template>
  <div align="center">
    <div class="name left" align="left">
      Student : {{ name }}<br>
      Status : {{ status[problem_status] }}
    </div>
    <div class="right">
      <sui-button class="font-smaller" size="small" color="pink">
          ตรวจ<span v-if="problem_status !== 0">อีกครั้ง</span>
      </sui-button>
    </div>
      <sui-button class="font-smaller" size="small" color="blue">
          Download Code
      </sui-button>
      <sui-button v-if="problem_status !== 0" @click="showCommentModal()" class="font-smaller" size="small" color="green">
        Comment
      </sui-button>
      <sui-button class="font-smaller" size="small" color="orange">
          คุยกับน้อง
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
  methods: {
    showCommentModal() {
      this.$store.dispatch(
        'setModalProblem', 
        {
          modal: { modal: 'modal2'},
          type: { type: 'comment'}
        }
      )
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.left {
  float: left;
}

.right {
  float: right;
}


</style>
