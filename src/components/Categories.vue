<template>
  <div v-if="categories.length" class="container">
    <ui-button outlined v-for="category in categories" :key="category" @click="displayModal(category)">{{
      category
    }}</ui-button>
  </div>
  <ui-spinner active class="container" v-else />
  <Joke :open="modalOpened" :category="selectedCategory" />
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
      modalOpened: false,
      selectedCategory: 'movie',
    };
  },

  methods: {
    displayModal(category) {
      this.selectedCategory = category;
      this.modalOpened = true;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
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
