<template>
    <sui-modal class="problem-modal" v-model="open" size="standart" :closeIcon="true">
        <sui-modal-header>
            <div style="display:inline-block; width:100%; margin-bottom: -10px">
            <div @click="previousProblem()" class="left font-smaller pointer">
                <sui-icon name="arrow left" color="pink" /> ข้อก่อนหน้า
            </div>
            <div class="center">
                {{ problem_detail['title'] }}
            </div>
            <div @click="nextProblem()" class="right font-smaller pointer" align="right">
                ข้อต่อไป <sui-icon name="arrow right" color="pink" style="float:right" />
            </div>
            </div>
        </sui-modal-header>
        <sui-modal-content image>
        <div v-if="problem_detail['image']" class="ui big image">
            <img :src="problem_detail['image']" style="margin-bottom: 20px">
        </div>
        <sui-modal-description v-if="problem_detail['title'] !== 'Loading...'" style="width: 100%">
            <sui-header>{{ problem_detail['title'] }}</sui-header>
            <p class="text-wrap">
                {{ problem_detail['description'] }}
            </p>
            <sui-form>
                <sui-form-field>
                    <label for="input">Input</label>
                    <input type="text" :value="problem_detail['input']" name="input" style="margin-bottom: 7px" disabled>
                    <label for="output">Output</label>
                    <input type="text" :value="problem_detail['output']" name="output" disabled>
                </sui-form-field>
            </sui-form>
        </sui-modal-description>
        <sui-modal-description v-if="problem_detail['title'] === 'Loading...'" style="width: 100%; height:200px">
            <div class="absolute middle">
                <sui-icon name="notched circle big" color="pink" loading />
            </div>
        </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
            <div class="actions" v-if="problem_detail['title'] !== 'Loading...'">
                <StudentProblemStatus v-if="role === 'student'" />
                <EvaluatorProblemStatus v-if="role === 'evaluator'" />
            </div>
        </sui-modal-actions>
    </sui-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../../firebase'
import StudentProblemStatus from '../../components/student/ProblemStatus'
import EvaluatorProblemStatus from '../../components/evaluator/ProblemStatus'

export default {
  name: "ProblemModal",
  components: {
    StudentProblemStatus,
    EvaluatorProblemStatus
  },
  data() {
    return {
        role: 'student',
        problem_detail: {
            title: "Loading...",
            description: "",
            input: "",
            output: "",
            image: ""
        }
    };
  },
  computed: {
    open: {
        get: function () {
          return this.opened && this.type === 'problem'
        },
        set: function () {
          this.$store.dispatch('setModalToggle', {modal:'modal'})
        }
    },
    ...mapGetters({
      opened: 'getModalStatus',
      type: 'getModalType',
      problem: 'getProblem'
    })
  },
  created () {
    this.$watch('open', open => {
      if(open)
        this.$bindAsObject('problem_detail', db.ref('problems/' + this.problem.level + '/data/' + this.problem.id))
    });
    this.$watch('problem.id', id => {
        this.$bindAsObject('problem_detail', db.ref('problems/' + this.problem.level + '/data/' + this.problem.id))
    });
  },
  methods: {
    nextProblem() {
        const offset = 4;
        let level = this.problem.level;
        let id = this.problem.id + 1;
        if(id >= offset){
          level++;
          id = id - offset;
        }
        if(level === offset) {
          this.$store.dispatch('setModalToggle', {modal:'modal'});
          return 0;
        }
        this.$store.dispatch('setProblem', { level: level, id: id })
    },
    previousProblem() {
        const offset = 4;
        let level = this.problem.level;
        let id = this.problem.id - 1;
        if(id < 0) {
            level--;
            id = id + offset;
        }
        if(level === offset-offset-1) {
          this.$store.dispatch('setModalToggle', {modal:'modal'});
          return 0;
        }
        this.$store.dispatch('setProblem', { level: level, id: id })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.problem-modal {
    overflow-y: auto;
}

.problem-modal > .ui.modal {
    height: 100% !important;
}

@media only screen and (max-width: 767px){
    .ui.modal>.actions {
        padding: 1rem !important;
    }
}

.left {
    float: left;
    width: 20%;
}

.center {
    width: 60%;
    float: left;
    word-break: break-word;
}

.right {
    float: left;
    width: 20%;
}

</style>
