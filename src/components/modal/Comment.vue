<template>
    <sui-modal-content>
      <sui-form align="center">
          <sui-form-field class="relative">
            <div class="info">
              <div>Name : {{ name }}</div>
              <div>Problem : {{ problem }}</div>
              <div>Status : {{ status[problem_status] }}</div>
            </div>
            <textarea name="comment" id="comment" cols="30" rows="10">{{ comment }}</textarea>
            <!-- if evaluator will show -->
            <div class="checkform">
              <br>
              <label class="pointer">
                <input type="radio" name="check" value="0"> ผ่านการตรวจ
              </label>
              <label class="pointer">
                <input type="radio" name="check" value="1"> ไม่ผ่านการตรวจ
              </label>
              <br><br>
              <sui-button class="font-smaller" size="small" color="pink">
                บันทึก
              </sui-button>
            </div>
          </sui-form-field>
        </sui-form>
    </sui-modal-content>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      name: '',
      problem: '',
      comment: '',
      problem_status: 0,
      status: ['ยังไม่ตรวจ', 'ผ่านการตรวจ', 'ไม่ผ่านการตรวจ']
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.checkform label {
  margin: 0 10px;
}

.info div {
  margin-bottom: 7px;
}

</style>
