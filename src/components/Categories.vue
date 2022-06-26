<template>
  <div v-if="categories.length" class="container">
    <p>Select the category from the list do display a joke:</p>
    <div class="category-list">
      <ui-button unelevated v-for="category in categories" :key="category" @click="displayModal(category)">{{
        category
      }}</ui-button>
    </div>
  </div>
  <div v-else class="loader">
    <ui-spinner active />
  </div>
  <Joke :open="modalOpened" :joke="joke" @closing="modalOpened = false" />
</template>

<script>
import fetchUsingRxJS from '../utils/fetchUsingRxJS';
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
      const response$ = fetchUsingRxJS(`https://api.chucknorris.io/jokes/random?category=${category}`);
      response$.subscribe((data) => (this.joke = data));
    },
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
}

.container {
  padding: 16px;
  text-align: center;
  background-color: #222;
}
.category-list {
  max-width: 680px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  gap: 8px;
}

button {
  width: 130px;
  height: 50px;
  font-size: 1.1rem;
}

p {
  font-size: 2rem;
  background-color: #222;
  color: white;
  margin-top: 0;
}
</style>
