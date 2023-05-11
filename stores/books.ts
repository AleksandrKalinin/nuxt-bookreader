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

  const setGenre = (value: string | null) => {
    genre.value = value;
  };

  const setAudience = (value: string | null) => {
    audience.value = value;
  };

  const setSize = (value: { title: string; max: number } | null) => {
    if (value?.max) {
      size.value = value.max;
    } else {
      size.value = null;
    }
  };

  const selectedBook: Ref<null | string | string[]> = ref(null);

  const fetchSelectedBook = (id: string) => {
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
  };

  const currentBook: Ref<string[]> = ref([]);
  const currentPageIndex = ref(1);
  const totalPages = computed(() => currentBook.value.length);

  const currentPage = computed(
    () => currentBook.value[currentPageIndex.value - 1]
  );

  const setCurrentBook = (book: string[]) => {
    currentBook.value = book;
  };

  const setCurrentPageIndex = (index: number) => {
    currentPageIndex.value = index;
  };

  const nextPage = () => {
    if (currentPageIndex.value < totalPages.value) {
      setCurrentPageIndex(currentPageIndex.value + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPageIndex.value > 1) {
      setCurrentPageIndex(currentPageIndex.value - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

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
    currentPageIndex,
    setCurrentPageIndex,
    totalPages,
    currentPage,
    currentBook,
    setCurrentBook,
    nextPage,
    prevPage,
  };
});
