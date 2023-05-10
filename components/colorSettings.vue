<template>
  <h5 class="text-h5 text-center">Color Settings</h5>
  <div class="d-flex justify-space-between colors-container">
    <div class="d-flex flex-column colors-section py-5 d-flex">
      <h6 class="text-h6 mb-4 text-center">Font color</h6>
      <div class="colors-section__items color-options">
        <div
          v-for="item in colors"
          class="color-options__item color-option"
          :style="{ backgroundColor: 'rgb(' + item.join(', ') + ')' }"
          :data-color="'rgb(' + item.join(', ') + ')'"
          @click="setFontColor($event)"
        ></div>
      </div>
    </div>
    <div class="d-flex flex-column colors-section py-5">
      <h6 class="text-h6 mb-4 text-center">Background color</h6>
      <div class="colors-section__items color-options">
        <div
          v-for="item in colors"
          class="color-options__item color-option"
          :style="{ backgroundColor: 'rgb(' + item.join(', ') + ')' }"
          :data-color="'rgb(' + item.join(', ') + ')'"
          @click="setBackgroundColor($event)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
