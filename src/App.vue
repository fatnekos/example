<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img :src="image.url">
    <HelloWorld msg="聽說你們在開車咪~蛤"/>

    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { loadCatImage } from './api/api'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      image: { url: "" },
    }
  },
  async created() {
    this.image = await loadCatImage();
  },
  methods:{
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: yellowgreen;
  margin-top: 60px;
  font-size: 10px;
}

</style>
