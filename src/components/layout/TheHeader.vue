<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">RENT A CAR</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/cars">All Cars</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/cars');
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #22272e;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  position: relative;
}

header ul a:active::before,
header ul a:hover::before,
header ul a.router-link-active::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: 0;
  background-color: rgb(138, 136, 136);
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  font-size: 35px;
  background: #1FA2FF;
  background: -webkit-linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
  background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
