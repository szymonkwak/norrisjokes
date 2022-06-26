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
};
</script>

<template>
  <Header />
  <Categories />
  <Footer />
</template>
