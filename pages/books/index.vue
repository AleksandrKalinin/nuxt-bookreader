<template>
  <v-container>
    <v-row>
      <v-col>
        <main class="d-flex py-12 fullscreen">
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
.fullscreen {
  width: 100%;
  height: 100%;
}
</style>
