<script>
import Categories from './components/Categories.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
    Categories,
  },
  data() {
    return {
      categories: [],
      modalOpened: true,
    };
  },

  mounted() {
    this.fetchCategories('https://api.chucknorris.io/jokes/categories');
  },

  methods: {
    async fetchCategories(url) {
      const response = await fetch(url);
      const data = await response.json();
      this.categories = data;
    },
  },
};
</script>

<template>
  <Header />
  <Categories :categories="categories" />
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
