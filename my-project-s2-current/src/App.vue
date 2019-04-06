<template>
  <div id = "app">

  <app-header></app-header>

  <router-view id = "move-router"></router-view>

  </div>

</template>

<script>

import Header from './components/Header-nav.vue';

export default {
  components: {
    'app-header': Header,
  },
  data() {
    return {

    }
  }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#move-router {
  position: relative;
  height: 100%;
  margin-top: 50px; 
}

body {
  margin: 0;
  padding: 0;
}

#bg-container {
  height: 100vh;
  z-index: -100;
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
}

</style>
