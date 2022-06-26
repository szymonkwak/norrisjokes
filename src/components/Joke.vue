<template>
  <ui-dialog v-model="open" @close="closeModal" maskClosable>
    <ui-button @click="closeModal" id="btn-close"><ui-icon>close</ui-icon></ui-button>

    <div v-if="joke" class="modal">
      <h2>Chuck Norris funny fact from {{ joke.categories[0] }} category</h2>
      <p class="p-date">{{ joke.created_at.split(' ')[0] }}</p>
      <p>{{ joke.value }}</p>
      <a :href="joke.url"> {{ joke.url }} </a>
    </div>

    <div v-else class="modal">
      <h2>Loading...</h2>
    </div>

    <ui-dialog-content id="empty" />
  </ui-dialog>
</template>

<script>
export default {
  props: ['open', 'joke'],
  emits: ['closing'],
  methods: {
    closeModal() {
      this.$emit('closing');
    },
  },
};
</script>

<style scoped>
.modal {
  text-align: center;
  padding: 1.5rem;
}

p {
  margin-top: 0;
  font-size: 1.1rem;
}

.p-date {
  margin: 0;
  font-size: 0.8rem;
  color: #00000099;
  text-align: right;
}

a {
  color: #00000099;
  text-decoration: none;
  font-size: 0.9rem;
  overflow-wrap: break-word;
}
a:hover {
  color: rgb(39, 44, 138);
}

#btn-close {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 10px;
  margin-left: auto;
}

#empty {
  padding: 0;
}
</style>
