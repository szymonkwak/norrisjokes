<template>
  <div v-if="categories.length" class="container">
    <ui-button outlined v-for="category in categories" :key="category" @click="displayModal(category)">{{
      category
    }}</ui-button>
  </div>
  <ui-spinner active class="container" v-else />
  <Joke :open="modalOpened" :joke="joke" @closing="modalOpened = false" />
</template>

<script>
import Joke from './Joke.vue';
export default {
  components: {
    Joke,
  },

  props: ['categories'],

  data() {
    return {
      joke: null,
      modalOpened: false,
    };
  },

  methods: {
    async displayModal(category) {
      this.joke = null;
      this.modalOpened = true;
      this.fetchJoke(`https://api.chucknorris.io/jokes/random?category=${category}`);
    },

    async fetchJoke(url) {
      const response = await fetch(url);
      const data = await response.json();
      this.joke = data;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 680px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
}
button {
  width: 130px;
}
</style>
