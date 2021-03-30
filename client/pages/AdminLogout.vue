<template></template>

<script>
export default {
  name: "Logout",
  methods: {
    async logout() {
      this.$cookies.set("jwt", null);
      this.$router.push("/AdminLogin");
    },
  },
  beforeMount() {
    this.logout();
  },
};
</script>

<style scoped>
</style>
