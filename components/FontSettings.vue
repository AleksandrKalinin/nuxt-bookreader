<template>
  <h5 class="text-h5 text-center">Font Settings</h5>
  <div class="settings-input">
    <div class="py-5 settings-input__item settings-input">
      <span class="pr-5 settings-input__caption">Font size</span>
      <v-slider
        v-model="size"
        color="#ff6347"
        step="1"
        min="16"
        max="32"
      ></v-slider>
    </div>
    <div class="py-5 settings-input__item settings-input">
      <span class="pr-5 settings-input__caption">Font weight</span>
      <v-slider
        v-model="weight"
        color="#ff6347"
        step="100"
        min="300"
        max="900"
      ></v-slider>
    </div>
    <div class="py-5 settings-input__item settings-input">
      <span class="pr-5 settings-input__caption">Font weight</span>
      <v-select
        v-model="family"
        :items="settings.availableFonts"
        density="compact"
      ></v-select>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
