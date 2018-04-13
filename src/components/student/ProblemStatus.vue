<template>
  <div>
      <sui-form v-if="upload_status === 0 || upload_again">
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
      <br v-if="upload_again">
      <div v-if="upload_status === 1 || (upload_status === 1 && upload_again)">
        <span v-if="upload_status === 1 || upload_again">
            status : <sui-icon name="notched circle big" color="pink" loading /> รอการตรวจคำตอบ...
        </span>
        <br>
        <sui-button v-if="upload_status === 1 && !upload_again" @click="upload_again = !upload_again" class="font-smaller" size="small" color="pink" style="margin-top: 20px;">
        ส่งคำตอบอีกครั้ง
        </sui-button>
      </div>
      <div v-if="upload_status === 2">
        status : <sui-icon name="check big" color="green" /> <span class="bold">Correct...</span>
        <br><br>
        + 100 point
      </div>
      <div v-if="upload_status === 3 || (upload_status === 3 && upload_again)">
        <span v-if="upload_status === 3 || upload_again">
            status : <sui-icon name="times big" color="red" /> Incorrect...
        </span>
        <br>
        <sui-button v-if="upload_status === 3 && !upload_again" @click="upload_again = !upload_again" class="font-smaller" size="small" color="pink" style="margin-top: 20px;">
        ส่งคำตอบอีกครั้ง
        </sui-button>
      </div>
  </div>
</template>

<script>

export default {
  name: "StudentProblemStatus",
  data() {
    return {
      upload_status: 0,
      upload_again: false,
      file_name: 'คลิกเพื่อส่งไฟล์คำตอบ'
    }
  },
  methods: {
    previewFiles() {
        this.file_name = this.$refs.myFiles.files[0].name
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
