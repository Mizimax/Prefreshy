<template>
  <div>
    <sui-card class="problem-card">
        <div class="space-header"></div>
        <sui-card-header class="bold">
          {{ problems['level'] }}
        </sui-card-header>
        <div v-for="problem, index in problems['data']">
          <div class="pointer card-content">
            <div class="left font-small color primary">
              {{ problem['title'] }}
            </div>
            <div class="right">
              <sui-button v-if="problemStatus === 0" @click="setModalProblem({ type: {type: 'problem'} , problem: { level: levelIndex, id: index }, modal: { modal:'modal'} })" color="pink" style="font-size: 13px" inverted>
                <sui-icon name="hand point left" />
                Practice
              </sui-button>
              <sui-label v-if="problemStatus === 1" color="blue">
                <sui-icon name="notched circle" loading />
                Pending
              </sui-label>
              <sui-label v-if="problemStatus === 2" color="green">
                <sui-icon name="check circle" />
                Complete
              </sui-label>
              <sui-label v-if="problemStatus === 3" color="red">
                <sui-icon name="times circle" />
                Incorrect
              </sui-label>
            </div>
          </div>
          <sui-divider v-if="index > 0" />
        </div>
    </sui-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ProblemCard",
  props: ['problems', 'levelIndex'],
  data() {
    return {
      problemStatus: 0
    }
  },
  methods: {
    ...mapActions([
      'setModalProblem'
    ])
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.problem-card {
  width: 100%;
  padding: 20px;
}

.header {
  color: #c58ec3;
}

div.left {
  float: left;
}

div.right {
  float: right;
}

.card-margin .divider {
  border-color: black;
}

.space-header {
  height: 40px;
}

.header {
  position: absolute;
  left: 50%;
  top: 25px;
  font-size: 16px;
  font-weight: lighter;
  transform: translateX(-50%);
}

.problem-card:hover .header:after {
  opacity: 1;
  width: 100%;
}

.card-content {
  transition: .2s all;
}

.card-content > div.right { 
  padding: 12px 20px;
}

.card-content > div.left { 
  padding: 19px 20px;
}

.header:after {
    opacity: 0;
    content: " ";
    position: absolute;
    top: 23px;
    left: 0;
    width: 0;
    height: 4px;
    background: #ffa7b3;
    transition: .5s all;
}

.divider {
  margin: 0 !important;
}

</style>
