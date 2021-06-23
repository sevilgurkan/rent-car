<template>
  <li>
    <h3>{{ carName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="primary-btn" link :to="carRentLink">Rent</base-button>
      <base-button mode="primary-btn" link :to="carDetailLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'carBrand', 'carModel', 'rate', 'areas'],
  computed: {
    carName() {
      return `${this.carBrand} ${this.carModel}`;
    },
    carRentLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    carDetailLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 1px solid #424242;
}

li:last-child{
  border-bottom: none;
}

h3 {
  font-size: 1.6rem;
}

h4{
  color: #bec1c7;
}
h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}
</style>
