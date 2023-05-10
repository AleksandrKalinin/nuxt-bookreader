<template>
  <v-app>
    <Header />
    <NavigationBar />
    <SelectedBook :selectedBook="selectedBook" />
  </v-app>
</template>

<script setup lang="ts">
import { useBooksStore } from "~/stores/books";
const route = useRoute();
const id = ref(route.params.id);

const store = useBooksStore();

const selectedBook = computed(() => {
  return store.selectedBook;
});

onMounted(() => {
  store.fetchSelectedBook(id.value as string);
});
</script>

<style scoped></style>
