<template>
  <base-card>
    <h2>What are you looking for?</h2>
    <span class="filter-option">
      <input type="checkbox" id="automatic" checked @change="setFilter" />
      <label for="automatic">Automatic</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="manuel" checked @change="setFilter" />
      <label for="manuel">Manuel</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        automatic: true,
        manuel: true,
        petrol: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
