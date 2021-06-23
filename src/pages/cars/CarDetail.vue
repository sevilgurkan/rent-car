<template>
  <div>
    <section>
      <base-card>
        <h2>{{ carName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header v-if="$route.name === 'card-detail'">
          <h2>No detail, just that. Sorry.</h2>
        </header>
        <header v-if="$route.name === 'contact-seller'">
          <h2>The roads are waiting for you.</h2>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCar: null,
      isChildComp: false,
    };
  },
  computed: {
    carName() {
      return `${this.selectedCar.brand} ${this.selectedCar.model}`;
    },
    areas() {
      return this.selectedCar.areas;
    },
    rate() {
      return this.selectedCar.hourlyRate;
    },
    description() {
      return this.selectedCar.description;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
  created() {
    this.selectedCar = this.$store.getters['cars/cars'].find(
      (car) => car.id === this.id,
    );
  },
};
</script>
