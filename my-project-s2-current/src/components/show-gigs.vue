<template>
  <div>
      <div id = "bg-container">
        <h1>I am the render gigs page</h1>
        
        <div v-if="punkToggle" v-for="punk in punks">
            <h1>{{punk.artist}}</h1>
            <h2>{{punk.date}}</h2>
        </div>            
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
        punkToggle: false, 
        punks: [
            {artist: "NOFX", date: "01/05/2019"},
            {artist: "The Misfits", date: "01/06/2019"},
        ]
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

div {
  width: 100%;
  text-align: center;
}

#bg-container {
  height: 100vh;
  z-index: -100;
}

.particles-js-canvas-el {
  height: 100% !important;
}
</style>