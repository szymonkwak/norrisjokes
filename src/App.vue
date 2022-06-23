<script setup>
import Categories from './components/Categories.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <Categories />
</template>

<style>
* {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  color: #fff;
  background-color: #373d43;
}
</style>
