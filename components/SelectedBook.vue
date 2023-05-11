<template>
  <div
    class="selected-book"
    tabindex="0"
    @keydown.left="store.prevPage"
    @keydown.right="store.nextPage"
  >
    <SettingsModal v-if="modalOpen === true" />
    <v-container
      :style="{
        backgroundColor: settings.backgroundColor,
        color: settings.fontColor,
        fontSize: settings.fontSize + 'px',
        fontWeight: settings.fontWeight,
        lineHeight: settings.lineHeight + 'px',
        fontFamily: settings.fontFamily,
      }"
    >
      <v-row>
        <v-col>
          <div class="selected-book__content book-content">
            <div class="book-content__inner" v-if="currentPage">
              <p v-for="item in currentPage">
                {{ item }}
              </p>
            </div>
            <div v-else>Loading...</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useBooksStore } from "~/stores/books";
import { useSettingsStore } from "~/stores/settings";

const props = defineProps(["selectedBook"]);
const store = useBooksStore();
const settings = useSettingsStore();

const modalOpen = computed(() => settings.modalOpen);

const pageIndexes: Ref<number[]> = ref([]);
const pages: Ref<string[]> = ref([]);

const selectedBook = computed(() => {
  return props.selectedBook;
});

const currentPage = computed(() => {
  return store.currentPage;
});

const splitIntoPages = () => {
  const tempPages = [];
  const tempIndexes = [];
  let text = selectedBook.value;
  let value = Math.ceil(1600 / settings.lineHeight);
  const step = value;
  let pagesCount = Math.ceil(text.length / value);
  let min = 0;
  let max = value;

  for (let i = 0; i < pagesCount; i++) {
    let txt = text.slice(min, max);
    tempIndexes.push(i);
    tempPages.push(txt);
    min += step;
    max += step;
  }

  pages.value = tempPages;
  pageIndexes.value = tempIndexes;
  store.setCurrentBook(tempPages);
};

watch(selectedBook, () => {
  if (selectedBook.value !== null) {
    splitIntoPages();
  }
});
</script>

<style scoped>
.book-content__inner {
  text-align: justify;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
