<template>
   <div>
    <div id = "header-wrap">
        <div id = "menu-icon" v-on:click = "burgerToggle = !burgerToggle"><p>Icon</p></div>
    </div>
    <ul v-if = "burgerToggle">
        <router-link to="/" id = "no-underline"><li>Home</li></router-link>
        <router-link to="/" id = "no-underline"><li>Discover</li></router-link>
        <router-link to="/" id = "no-underline"><li>Contact</li></router-link>
    </ul>
    </div>
</template>

<script>


export default {
  name: 'app',
    
  data() {
    return {
        burgerToggle: false
        }
    },
    
  methods: {
        },
    }

</script>

<style scoped>
    
    ul {
        padding: 0px;  
        margin: 0px; 
        margin-top: 50px; 
        transition: 1s all; 
    }

    li {
        list-style: none;
        width: 100%; 
        text-align: left; 
        color: gray; 
        margin-top: 2px; 
        letter-spacing: 2px; 
        padding-left: 15px;
        border-bottom: 1px solid gray; 
        
        
    }
    
    #no-underline{
        text-decoration: none; 
    }
    
    #header-wrap {
        width: 100%; 
        height: 75px; 
        background-color: black; 
    }
    
    #menu-icon{
        width: 75px; 
        height: 100%; 
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white; 
        
    }
    
    .white {
        color: white; 
    }

</style>
