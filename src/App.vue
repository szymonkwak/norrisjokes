<script>
import fetchUsingRxJS from './utils/fetchUsingRxJS';
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
    const response$ = fetchUsingRxJS('https://api.chucknorris.io/jokes/categoriess');
    response$.subscribe((data) => (this.categories = data));
  },
};
</script>

<template>
  <Header />
  <h2 v-if="categories === null">Can't fetch the data</h2>
  <Categories v-else :categories="categories" />
  <Footer />
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
