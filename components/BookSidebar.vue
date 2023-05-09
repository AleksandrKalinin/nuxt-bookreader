<template>
  <aside class="sidebar">
    <div class="selection">
      <div class="selection-item">
        <v-select
          clearable
          label="Выберите жанр"
          :items="['fantasy', 'nonfiction', 'drama', 'detective']"
        ></v-select>
      </div>
      <div class="selection-item">
        <v-select
          clearable
          label="Выберите размер"
          :items="[
            'до 10000 слов',
            'от 10000 до 50000 слов',
            'более 50000 слов',
          ]"
        ></v-select>
      </div>
      <div class="selection-item">
        <v-select
          clearable
          label="Возрастной рейтинг"
          :items="['Teen', 'Mature', 'General audience']"
        ></v-select>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
