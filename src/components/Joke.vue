<template>
  <ui-dialog v-model="open" @close="closeModal" maskClosable>
    <div v-if="joke">
      <ui-dialog-title
        >Chuck Norris funny fact from <strong>{{ joke.categories[0] }}</strong> category</ui-dialog-title
      >
      <ui-dialog-content>
        <div :class="$tt('body1')">
          {{ joke.value }}
        </div>
        <div :class="$tt('body2')">
          {{ joke.created_at.split(' ')[0] }}
        </div>
        <a :href="joke.url">
          {{ joke.url }}
        </a>
      </ui-dialog-content>
    </div>

    <div v-else>
      <ui-progress active />
      <ui-dialog-title> Loading </ui-dialog-title>
    </div>

    <ui-dialog-content />
    <ui-dialog-actions>
      <ui-button @click="closeModal">Close</ui-button>
    </ui-dialog-actions>
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
