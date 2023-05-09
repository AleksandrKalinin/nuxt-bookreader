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

  const genre: Ref<string | null> = ref(null);
  const audience: Ref<string | null> = ref(null);
  const size: Ref<number | null> = ref(null);

  function setGenre(value: string | null) {
    genre.value = value;
  }

  function setAudience(value: string | null) {
    audience.value = value;
  }

  function setSize(value: { title: string; max: number } | null) {
    if (value?.max) {
      size.value = value.max;
    } else {
      size.value = null;
    }
  }

  return {
    fetchBooks,
    isLoaded,
    books,
    setSize,
    setGenre,
    setAudience,
    genre,
    audience,
    size,
  };
});
