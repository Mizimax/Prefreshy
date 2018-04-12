<template>
  <div class="hello">
    <nav id="Menu">
        <sui-container>
            <div id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="relative">
                <router-link to="/" class="menu" exact>
                    <li>Home</li>
                </router-link>
                <router-link to="/problems" class="menu">
                    <li>Problem</li>
                </router-link>
                <router-link to="/submissions" class="menu">
                    <li>Submission</li>
                </router-link>
                <li class="center">Prefreshy</li>
                <router-link to="/login">
                <li class="right pointer">Login</li>
                </router-link>
            </ul>
        </sui-container>
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
    color: white;
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
    margin-right: 5px;
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

#Menu .router-link-active li:not(.right),
#Menu .router-link-exact-active li:not(.right) {
  color: #ffa7b3 !important;
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
    background: #ffa7b3;
    transition: .5s all;
}

#Menu .router-link-active li:not(.right):after, #Menu .router-link-exact-active li:not(.right):after {
    opacity: 1;
    width: 100%;
}

@media (max-width: 665px) {
    #nav-icon3 {
        display: block !important;
    }
    .menu {
        display: none !important;
    }
}

#nav-icon3 {
  width: 60px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  float: left;
  display: none;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 26px;
  background: white;
  opacity: 1;
  left: 20%;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 17px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 24px;
}

#nav-icon3 span:nth-child(4) {
  top: 31px;
}

#nav-icon3.open span:nth-child(1) {
  top: 24px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 26px;
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 26px;
}

#nav-icon3.open span:nth-child(4) {
  top: 38px;
  width: 0%;
  left: 50%;
}


</style>
