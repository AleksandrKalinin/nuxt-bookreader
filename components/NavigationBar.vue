<template>
  <div class="navigation">
    <v-container>
      <v-row>
        <v-col>
          <div class="navigation-wrapper d-flex align-center">
            <div class="navigation-wrapper__input">
              <v-slider
                v-model="store.currentPageIndex"
                color="#ff6347"
                step="1"
                min="1"
                :max="store.totalPages"
              ></v-slider>
            </div>
            <div class="page_count d-flex justify-center text-h5 text-white">
              {{ store.currentPageIndex }}/{{ store.totalPages }}
            </div>
            <div
              class="navigation-items d-flex align-center justify-space-between text-white"
            >
              <div class="navigation-items__icon navigation-icon">
                <v-icon
                  icon="mdi-arrow-left-thin"
                  size="40px"
                  @click="prevPage"
                ></v-icon>
              </div>
              <div class="navigation-items__icon navigation-icon">
                <v-icon
                  icon="mdi-arrow-right-thin"
                  size="40px"
                  @click="nextPage"
                ></v-icon>
              </div>
              <div class="navigation-items__icon navigation-icon">
                <v-icon icon="mdi-format-letter-case" size="40px"></v-icon>
              </div>
              <div class="navigation-items__icon navigation-icon">
                <v-icon icon="mdi-palette-outline" size="40px"></v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useBooksStore } from "~/stores/books";
const store = useBooksStore();

const currentPage = computed(() => {
  return store.currentPageIndex;
});

const nextPage = () => {
  if (currentPage.value < store.totalPages) {
    store.setCurrentPageIndex(store.currentPageIndex + 1);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    store.setCurrentPageIndex(store.currentPageIndex - 1);
  }
};

const setActivePage = () => {
  console.log("fafeef");
};
</script>

<style scoped>
.navigation {
  background: #444444;
  width: 100%;
}

.navigation-wrapper__input {
  width: calc(100% - 200px - 160px);
}

.navigation-items {
  color: #ffffff;
  width: 200px;
}

.navigation-icon {
  cursor: pointer;
}
.page_count {
  width: 160px;
}

.v-slider {
  max-height: 32px;
}
</style>
