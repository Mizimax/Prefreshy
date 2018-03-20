<template>
  <div class="hello">
    <nav id="Menu">
        <div class="container">
            <ul class="relative">
                <router-link to="/" exact>
                    <li>Home</li>
                </router-link>
                <router-link to="/problems">
                    <li>Problem</li>
                </router-link>
                <router-link to="/submissions">
                    <li>Submission</li>
                </router-link>
                <li class="center">Prefreshy</li>
                <router-link to="/login">
                    <li class="right">Login</li>
                </router-link>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Navbar"
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Menu */

#Menu {
    height: 50px;
    background-color: #c58ec3;
}

#Menu ul {
    line-height: 50px;
    margin: 0;
    padding: 0;
}

#Menu ul li {
    float: left;
    list-style: none;
    padding: 0 20px;
}

#Menu a {
  color: #D5D8CC;
}

#Menu .right {
    float: right;
}

#Menu .center {
    font-size: 20px;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

#Menu .router-link-active,
#Menu .router-link-exact-active {
  color: #FFF;
  cursor: pointer;
  font-weight: bold;
}

</style>
