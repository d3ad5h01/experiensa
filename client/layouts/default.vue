<template>
  <div>
    <Navbar />
    <login />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import login from "~/components/login";
export default {
  components: {
    Navbar,
    Footer,
    login
  }
};
</script>

<style></style>
