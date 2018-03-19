<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="problem of problems">
        {{ problem['.value'] }}
      </li>
    </ul>
    <sui-button color="yellow" inverted>ทดสอบ</sui-button>
  </div>
</template>

<script>

import { db } from '../firebase'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Problem",
      problems: {}
    };
  },
  firebase: {
    problems: {
      source: db.ref('Problems'),
      readyCallback: function() {
          console.log(this.problems);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
