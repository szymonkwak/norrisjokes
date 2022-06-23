<script>
import Categories from './components/Categories.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Categories,
    Footer,
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
  <Footer />
</template>
