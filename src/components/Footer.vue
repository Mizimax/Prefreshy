<template>
  <div id="footer">
    <div class="footer-fake"></div>
    <div class="footer">
        <sui-container class="footer-container" color="pink">
            <div class="left">Computer Engineer KMUTT</div>
            <div class="right">Prefreshy 2018</div>
        </sui-container>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer"
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer-fake {
    height: 43px;
}

.footer-container {
    color: white;
    display: flex;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 43px;
    background: rgb(245, 70, 99);
}

.left, .right {
    padding-top:12px !important;
}

.left {
    flex: 1 1 auto;
}

.right {
    flex: 0 1 auto;
}

</style>
