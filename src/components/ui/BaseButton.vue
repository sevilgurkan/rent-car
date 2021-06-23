<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 3px 12px;
  font: inherit;
  line-height: 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  margin-right: 0.5rem;
  display: inline-block;
}

.flat {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
}

.primary-btn{
  background-color: rgb(55, 62, 71);
  border: 1px solid rgb(68, 76, 86);
  color: rgb(83, 155, 245);
  transition: .2s cubic-bezier(.3,0,.5,1);
  transition-property: color,background-color,border-color;
  font-weight: 500;
}
.primary-btn:hover{
  background-color: rgb(68, 76, 86);
}

.register-link{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #539bf5;
}
.register-link:hover{
  background: none;
  color: #5f82ad;
}
</style>
