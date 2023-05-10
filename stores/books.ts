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

  const selectedBook: Ref<null | string | string[]> = ref(null);

  function fetchSelectedBook(id: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain; charset=UTF-8");
    fetch(`./${id}.txt`)
      .then((response) => response.arrayBuffer())
      .then(function (buffer) {
        const decoder = new TextDecoder("iso-8859-1");
        let text = decoder.decode(buffer).split("\n");
        return text;
      })
      .then((txt) => (selectedBook.value = txt));
    /*
    fetch(`./${id}.txt`)
      .then((res) => res.text())
      .then((txt) => (selectedBook.value = txt)); */
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
    fetchSelectedBook,
    selectedBook,
  };
});
