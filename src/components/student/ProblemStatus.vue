<template>
  <div>
      <div align="center" v-if="upload_status === 1 || (upload_status === 1 && upload_again)">
        <span v-if="upload_status === 1 || upload_again">
            Status : <sui-icon name="notched circle big" color="pink" loading /> รอการตรวจคำตอบ...
        </span>
        <br>
      <div style="margin-top: 20px" v-if="upload_again"></div>
        <sui-button v-if="upload_status === 1 && !upload_again" @click="upload_again = !upload_again" class="font-smaller" size="small" color="pink" style="margin-top: 20px;">
        ส่งคำตอบอีกครั้ง
        </sui-button>
      </div>
      <div style="height: 40px; margin: 0 20px" v-if="upload_status === 2">
        <div class="left">
          Status : <sui-icon name="check big" color="green" /> <span class="bold">Correct...</span> + 100 point
        </div>
        <div class="right">
          <sui-button @click="showCommentModal()" class="font-smaller" size="small" color="green">
            Comment
          </sui-button>
          <sui-button class="font-smaller" size="small" color="orange">
          สอบถามคนตรวจ
          </sui-button>
        </div>
      </div>
      <div v-if="upload_status === 3 || (upload_status === 3 && upload_again)">
        <div class="right">
          <sui-button v-if="upload_status === 3 && !upload_again" @click="upload_again = !upload_again" class="font-smaller" size="small" color="pink">
          ส่งคำตอบอีกครั้ง
          </sui-button>
        </div>
        <div style="height: 40px" v-if="upload_status === 3 || upload_again">
          <div class="left" style="margin-left: 20px">
            Status : <sui-icon name="times big" color="red" /> Incorrect...
          </div>
          <div :align="upload_again ? 'right': 'center'">
            <sui-button @click="showCommentModal()" class="font-smaller" size="small" color="green">
            Comment
            </sui-button>
            <sui-button class="font-smaller" size="small" color="orange">
            สอบถามคนตรวจ
            </sui-button>
          </div>
        </div>
      </div>
      <sui-form align="center" v-if="upload_status === 0 || upload_again">
        <sui-form-field class="relative">
            <input type="file" ref="myFiles" placeholder="First Name" class="file-hidden" @change="previewFiles">
            <input class="upload relative" type="text"  :placeholder="file_name" disabled>
            <sui-button color="pink" class="browse">
            Browse
            </sui-button>
            <sui-button @click="uploadCode()" color="pink">
            Submit
            </sui-button>
        </sui-form-field>
      </sui-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "StudentProblemStatus",
  data() {
    return {
      upload_status: 0,
      upload_again: false,
      file_name: 'คลิกเพื่อส่งไฟล์คำตอบ'
    }
  },
  computed: {
    ...mapGetters({
      open: 'getModalStatus'
    })
  },
  methods: {
    previewFiles() {
        this.file_name = this.$refs.myFiles.files[0].name
    },
    showCommentModal() {
      this.$store.dispatch(
        'setModalProblem', 
        {
          modal: { modal: 'modal2'},
          type: { type: 'comment'}
        }
      )
    }
  },
  created () {
    this.$watch('open', open => {
      if(!open)
        setTimeout(()=>this.upload_again = false, 200);
    });
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

.upload {
    width: 400px !important;
    margin: 0 10px !important;
    border-color: #555 !important;
}

.browse {
    position: relative;
    margin-left: -85px;
    margin-right: 20px;
    font-size: 10px;
    z-index: 1;
}

.file-hidden {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(calc(-50% - 45px));
    opacity: 0;
    z-index: 4;
    width: 400px !important;
    height: 37px;
    cursor: pointer;
}

.upload::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #000 !important;
    opacity: 1; /* Firefox */
}

.upload:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #000 !important;
}

.upload::-ms-input-placeholder { /* Microsoft Edge */
    color: #000 !important;
}


</style>
