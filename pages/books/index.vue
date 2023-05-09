<template>
  <v-container>
    <v-row>
      <v-col>
        <main class="d-flex py-12">
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
          <BookList />
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const items = ref([]);
</script>
<style scoped>
.sidebar {
  width: 300px;
}
</style>
