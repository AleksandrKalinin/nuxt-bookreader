<template>
  <div class="selected-book">
    <v-container>
      <v-row>
        <v-col>
          <div
            class="selected-book__content book-content"
            :style="{
              color: fontColor,
              fontSize: fontSize + 'px',
              fontWeight: fontWeight,
              lineHeight: lineHeight + 'px',
              fontFamily,
            }"
          >
            <div class="book-content__inner" v-if="currentPage.length > 0">
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
const props = defineProps(["selectedBook"]);

const fontColor = ref("black");
const fontSize = ref(24);
const lineHeight = ref(fontSize.value * 1.5);
const fontWeight = ref(400);
const fontFamily = ref("Times New Roman");

const currentPage = ref([]);
const pageIndexes: Ref<number[]> = ref([]);
const pages: Ref<string[]> = ref([]);

const selectedBook = computed(() => {
  return props.selectedBook;
});

const splitIntoPages = () => {
  const tempPages = [];
  const tempIndexes = [];
  let text = selectedBook.value;
  console.log("text", text.length);
  let value = Math.ceil(1600 / lineHeight.value);
  const step = value;
  let pagesCount = Math.ceil(text.length / value);
  console.log("value", value);
  console.log("pagesCOunt", pagesCount);
  let min = 0;
  let max = value;
  for (let i = 0; i < pagesCount; i++) {
    let txt = text.slice(min, max);
    tempPages.push(txt);
    min += step;
    max += step;
  }
  for (let i = 0; i < pagesCount; i++) {
    tempIndexes.push(i);
  }
  pages.value = tempPages;
  pageIndexes.value = tempIndexes;
  currentPage.value = tempPages[0];
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
