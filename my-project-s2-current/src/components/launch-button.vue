<template>
  <div>
      <div id = "bg-container">

          <router-link to="/selection"><button id = "find-out-btn" v-on:click = "test"></button></router-link>
        </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods:  {
    test: function() {
      console.log("Working")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#find-out-btn{
  padding: 25px;
  width: 250px;
  margin: 0 auto;
  position: relative;
  transform: translateY(250px);
}

div {
  width: 100%;
  text-align: center;
  height: 100%;
  position: fixed;
}

#bg-container {
  height: 100vh;
  z-index: -100;
}

.particles-js-canvas-el {
  height: 100% !important;
}
</style>
