<template>
  <v-app>
    <div id="teleportId">
      <Header />
      <NavigationBar />
      <SelectedBook :selectedBook="selectedBook" />
    </div>
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
