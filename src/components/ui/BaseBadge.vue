<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: transparent;
  color: #adbac7;
  padding: 0.2rem 1.2rem;
  display: inline-block;
  font-size: 15px;
  border: 1px solid #444c56;
}

.badge:first-child{
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.badge:last-child{
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
