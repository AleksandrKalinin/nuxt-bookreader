import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", () => {
  const books = ref([]);
  const isLoaded = ref(false);
  function fetchBooks() {
    fetch("./books.json")
      .then((res) => res.json())
      .then((json) => {
        (isLoaded.value = true), (books.value = json);
      });
  }
  return { fetchBooks, isLoaded, books };
});
