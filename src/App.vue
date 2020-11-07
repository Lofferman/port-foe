<template>
    <Nav />
    <router-view></router-view>
</template>


<script setup>
export { default as Nav } from './common/Nav.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
  Nav{

  }
  router-view{
    padding-top: -6vh;
  }

</style>
