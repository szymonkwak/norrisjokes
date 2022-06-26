<template>
  <h2 v-if="categories === null">Can't fetch the data</h2>

  <div v-else-if="categories.length" class="container">
    <p>Select the category from the list do display a joke:</p>
    <div class="category-list">
      <ui-button
        unelevated
        v-for="category in categories"
        :key="category"
        @click="displayModal(category)"
        class="btn-category"
        >{{ category }}</ui-button
      >
    </div>
    <div class="sort-container">
      <p class="p-sort">Sort:</p>
      <ui-button @click="sortAscending" class="btn-sort">
        <ui-icon light>arrow_downward</ui-icon>
      </ui-button>
      <ui-button @click="sortDescending" class="btn-sort">
        <ui-icon light>arrow_upward</ui-icon>
      </ui-button>
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

  data() {
    return {
      categories: [],
      joke: null,
      modalOpened: false,
    };
  },

  mounted() {
    const response$ = fetchUsingRxJS('https://api.chucknorris.io/jokes/categories');
    response$.subscribe((data) => (this.categories = data));
  },

  methods: {
    async displayModal(category) {
      this.joke = null;
      this.modalOpened = true;
      const response$ = fetchUsingRxJS(`https://api.chucknorris.io/jokes/random?category=${category}`);
      response$.subscribe((data) => (this.joke = data));
    },
    sortAscending() {
      this.categories = this.categories.sort((a, b) => a.localeCompare(b));
    },
    sortDescending() {
      this.categories = this.categories.sort((a, b) => b.localeCompare(a));
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

.btn-category {
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

.sort-container {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.p-sort {
  font-size: 1rem;
  margin: 0 8px;
}

button {
  min-width: 20px;
  padding: 0;
}

h2 {
  text-align: center;
}
</style>
