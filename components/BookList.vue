<template>
  <div class="cards-wrapper">
    <BookCard v-if="isLoaded" :books="filteredBooks" />
    <template v-else>
      <div class="preloader">
        <img src="./preloader.gif" />
      </div>
    </template>
  </div>
</template>
<script setup>
import { useBooksStore } from "~/stores/books";

const store = useBooksStore();

const books = computed(() => store.books);
const isLoaded = computed(() => store.isLoaded);

const filteredBooks = computed(() => {
  const filtered = books.value
    .filter((item) =>
      store.size !== null ? item.page_number > store.size : item
    )
    .filter((item) =>
      store.genre !== null ? item.genre === store.genre : item
    )
    .filter((item) =>
      store.audience !== null ? item.audience === store.audience : item
    );
  return filtered;
});

onMounted(() => {
  store.fetchBooks();
});
</script>
<style lang="scss" scoped>
.cards-wrapper {
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
</style>
