<template>

</template>

<script>
export default {
name: "Logout",
  methods: {
  async logout()
  {
    this.$cookies.set("jwt",null);
    this.$router.push("/login");
    // this.$router.go();
  }
  },
  beforeMount() {
    this.logout()
  }
}
</script>

<style scoped>

</style>
