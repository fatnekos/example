<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Success"/>
    <img :src="image.url">
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
