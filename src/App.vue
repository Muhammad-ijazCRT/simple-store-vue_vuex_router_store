<template>
  <NavbarPage />
  <router-view />
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue";

export default {
  name: "App",
  components: {
    NavbarPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
