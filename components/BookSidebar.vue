<template>
  <aside class="sidebar">
    <div class="selection">
      <div class="selection-item">
        <v-select
          clearable
          label="Выберите жанр"
          :items="['fantasy', 'comedy', 'drama', 'detective', 'horror']"
          return-object
          @update:model-value="store.setGenre"
        ></v-select>
      </div>
      <div class="selection-item">
        <v-select
          clearable
          label="Выберите размер"
          :items="sizeOptions"
          item-title="title"
          item-value="max"
          return-object
          @update:model-value="store.setSize"
        ></v-select>
      </div>
      <div class="selection-item">
        <v-select
          clearable
          label="Возрастной рейтинг"
          :items="['Teen', 'Mature', 'General audience']"
          return-object
          @update:model-value="store.setAudience"
        ></v-select>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useBooksStore } from "~/stores/books";
const store = useBooksStore();

const sizeOptions = [
  {
    title: "более 100 страниц",
    max: 100,
  },
  {
    title: "более 200 страниц",
    max: 200,
  },
  {
    title: "более 500 страниц",
    max: 500,
  },
];
</script>

<style scoped></style>
