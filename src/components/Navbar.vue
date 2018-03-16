<template>
  <div class="hello">
    <nav id="Menu">
        <ul>
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
}

#Menu ul li {
    float: left;
    list-style: none;
    padding: 0 20px;
}

</style>
