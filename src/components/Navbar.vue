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
                <li class="right pointer">Login</li>
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
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
}

#Menu ul {
    margin: 0;
    padding: 0;
}

#Menu ul li {
    float: left;
    list-style: none;
    position: relative;
    margin: 0 15px;
    padding: 15.5px 0px;
    font-weight: bold;
    transition: .5s all;
}

#Menu ul li:not(.right):hover {
    color: white;
}

#Menu ul li:not(.right):hover:after {
    opacity: 1;
    width: 100%;
}

#Menu a {
  color: #444;
}

#Menu .right {
    float: right;
    color: #c58ec3;
    padding: 6px 15px;
    margin-top: 10px;
    background: #fff;
    border-radius: 20px;
}

#Menu .center {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
}

#Menu .router-link-active li,
#Menu .router-link-exact-active li {
  color: white !important;
  cursor: pointer;
  font-weight: bold;
}

#Menu .router-link-active li:not(.right), #Menu ul li:not(.right):hover {
    padding: 15.5px 0px;
    margin-top: 0;
}

#Menu ul li:after {
    opacity: 0;
    content: " ";
    position: absolute;
    top: 37px;
    left: 0;
    width: 0;
    height: 4px;
    background: white;
    transition: .5s all;
}

#Menu .router-link-active li:after {
    opacity: 1;
    width: 100%;
}



</style>
