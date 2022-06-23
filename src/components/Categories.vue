<template>
  <div v-if="categories.length" class="container">
    <ui-button outlined v-for="category in categories" :key="category">{{ category }}</ui-button>
  </div>
  <ui-spinner active class="container" v-else />
</template>

<script>
export default {
  data() {
    return {
      categories: [],
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
