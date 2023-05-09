<template>
  <v-app>
    <Header />
    <NavigationBar />
    <SelectedBook />
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
console.log(route.params.id);
</script>

<style scoped></style>
