<template>
  <div id = "parent">

          <div id = "wrapper">
            <div class = "speech-wrapper">
            <div class = "speech-bubble">
              <h3>Tell me what you love</h3>
            </div>
            </div>

            <div id = "selections-container">
              <div class = "selection-item" v-on:click=" selectedItem">Punk</div>

              <div class = "selection-item" v-on:click="selectedItem">Rock</div>


              <div class = "selection-item" v-on:click="selectedItem">Metal</div>
              <div class = "selection-item" v-on:click="selectedItem">RNB</div>
              <div class = "selection-item" v-on:click="selectedItem">Pop</div>
              <div class = "selection-item" v-on:click="selectedItem">Rap</div>
              <div class = "selection-item" v-on:click="selectedItem">Dance</div>
              <div class = "selection-item" v-on:click="selectedItem">Retro</div>
            </div>
          </div>

          <div class = "button-wrap">
            <router-link to="/show-gigs"><button id = "get-listings" v-on:click="getValue"> {{name}} </button></router-link>
          </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: "test",
      selectedItems: []
    }
  },
  methods:{
    getValue() {
      console.log(this.selectedItems);
      //Put items into session store here.
      sessionStorage.setItem("music_Selection", JSON.stringify(this.selectedItems)); 
      
    },
    selectedItem(event){
        
        let item = event.target.textContent; 
        let arr = this.selectedItems; 
        
        if (arr.includes(item)){
            return
        }
        
      this.selectedItems.push(event.target.textContent);
      event.target.style.backgroundColor = "green";
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#parent {
  width: 100%;
  text-align: center;
  height: 100%;
  position: fixed;
}

#bg-container {
  height: 100vh;
  z-index: -100;
}

#wrapper {
  position: relative;
}

.speech-bubble {
  width: 200px;
  height: 75px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 75% 87%, 75% 100%, 49% 86%, 0 86%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 75% 87%, 75% 100%, 49% 86%, 0 86%);
  background-color: darkcyan;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#selections-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}

#selections-container div {
  min-width: 125px;
  background-color:red;
  padding: 25px;
  margin: 5px;
}

#get-listings{
  padding: 25px;
  width: 150px;
  margin: 0 auto;
  position: relative;
}

.button-wrap {
 text-align: center;
    margin: 15px; 
}

.i-am-active {
  background-color:green !important;
}

</style>
