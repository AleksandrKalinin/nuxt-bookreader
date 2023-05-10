<template>
  <v-card v-for="(item, index) in books" class="mx-6 mb-12" max-width="400">
    <v-img cover height="250" :src="item.image"></v-img>
    <v-card-item>
      <div class="py-2">
        <v-card-title class="text-h5 font-weight-bold py-1">{{
          item.title
        }}</v-card-title>
        <v-card-subtitle class="text-body-1">
          By {{ item.author }}
        </v-card-subtitle>
      </div>
      <div class="d-flex align-center">
        <v-rating
          v-model="ratings[index]"
          color="blue"
          bg-color="orange-lighten-1"
          half-increments
          readonly
          size="25"
        ></v-rating>
        <span class="text-h5 px-4">{{ ratings[index] }}</span>
        <span class="text-body-1 text-blue-grey-lighten-2"
          >{{ reviews[index] }} reviews</span
        >
      </div>
    </v-card-item>
    <v-card-text class="pb-0">
      <div class="text-subtitle-1 book-description">
        {{ item.content }}
      </div>
    </v-card-text>
    <div class="px-4">
      <v-chip-group class="">
        <v-chip>{{ item.genre }}</v-chip>
      </v-chip-group>
    </div>
    <v-card-actions>
      <NuxtLink :to="routes[index]" class="btn-link">Open</NuxtLink>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps(["books"]);

const ratings = computed(() => {
  return props.books.map((item) => {
    return (
      item.rating.reduce((sum, el) => {
        return (sum += el.score);
      }, 0) / item.rating.length
    );
  });
});

const reviews = computed(() => {
  return props.books.map((item) => {
    return item.rating.length;
  });
});

const routes = computed(() => {
  return props.books.map((item) => {
    return `/books/${item.id}`;
  });
});

const consoleRatings = () => {
  const val = props.books.map((item) => {
    return (
      item.rating.reduce((sum, el) => {
        return (sum += el.score);
      }, 0) / item.rating.length
    );
  });
};
</script>

<style scoped>
.book-description {
  max-height: 118px;
  overflow: hidden;
}

.btn-link {
  background-color: #ff6347;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  text-align: center;
}
</style>
