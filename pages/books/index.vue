<template>
  <v-container>
    <v-row>
      <v-col>
        <main class="d-flex py-12">
          <BookSidebar />
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
