<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <car-filter @change-filter="setFilters"></car-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="flat" @click="loadCars(true)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 0 24 24"
              width="32px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </base-button>
          <base-button
            mode="register-link"
            link
            to="/auth?redirect=register"
            v-if="!isLoggedIn"
            >Sign in to more</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCars">
          <car-item
            v-for="car in filteredCars"
            :key="car.id"
            :id="car.id"
            :car-brand="car.brand"
            :car-model="car.model"
            :rate="car.hourlyRate"
            :areas="car.areas"
          ></car-item>
        </ul>
        <h3 v-else>No cars found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CarItem from '../../components/cars/CarItem.vue';
import CarFilter from '../../components/cars/CarFilter.vue';

export default {
  components: {
    CarItem,
    CarFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        manuel: true,
        automatic: true,
        petrol: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters['cars/isCar'];
    },
    filteredCars() {
      const cars = this.$store.getters['cars/cars'];
      return cars.filter((car) => {
        if (this.activeFilters.manuel && car.areas.includes('manuel')) {
          return true;
        }
        if (this.activeFilters.automatic && car.areas.includes('automatic')) {
          return true;
        }
        return false;
      });
    },
    hasCars() {
      return !this.isLoading && this.$store.getters['cars/hasCars'];
    },
  },
  created() {
    // this.loadCars();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCars(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('cars/loadCars', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }

      this.error += ' (TODO: Database connection)';
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
.controls button > svg {
  fill: rgb(255, 255, 255);
}
.controls button > svg:hover {
  fill: rgb(204, 204, 204);
}
</style>
