<template>
  <div>
    <sui-modal-header>{{ Title }}</sui-modal-header>
    <sui-modal-content image>
    <sui-image wrapped size="medium" src="static/images/avatar/large/rachel.png" />
    <sui-modal-description>
        <sui-header>{{ Title }}</sui-header>
        <p>{{ Description }}</p>
    </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
    <sui-form>
        <sui-form-field>
        <input type="file" placeholder="First Name" >
        <input class="upload" type="text"  placeholder="โปรดเลือกไฟล์" disabled>
        <sui-button color="pink" class="font-smaller">
        Browse
        </sui-button>
        <sui-button color="pink">
        Upload
        </sui-button>
        </sui-form-field>
    </sui-form>
    </sui-modal-actions>
  </div>
</template>

<script>

export default {
  name: "ProblemModal",
  props: ["Title", "Description"],
  data() {
    return { open: true };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.upload {
    width: 400px !important;
}

</style>
