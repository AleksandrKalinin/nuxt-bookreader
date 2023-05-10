<template>
  <Teleport to="#teleportId">
    <div v-if="settings.modalOpen" class="overlay">
      <div
        class="pa-12 bg-grey-lighten-5"
        width="750px"
        min-height="350"
        height="auto"
      >
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
          <div
            class="d-flex justify-center align-center text-preview text-center"
            :style="{
              fontSize: size + 'px',
              fontFamily: family,
              fontWeight: weight,
            }"
          >
            Sample text
          </div>
        </div>
        <v-btn
          class="text-white"
          block
          rounded="0"
          size="x-large"
          color="#ff6347"
          variant="flat"
          @click="applySettings"
          >Apply</v-btn
        >
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";
const settings = useSettingsStore();

const size = ref(settings.fontSize);
const weight = ref(settings.fontWeight);
const family = ref(settings.fontFamily);
const applySettings = () => {
  settings.fontSize = size.value;
  settings.fontWeight = weight.value;
  settings.fontFamily = family.value;
  settings.modalOpen = false;
};
</script>
<style>
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  background: rgba(51, 51, 51, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.settings-input__item {
  width: 400px;
  display: flex;
  align-items: center;
}

.settings-input__caption {
  width: 140px;
  font-size: 20px;
}

.v-input {
  height: 32px;
}

.text-preview {
  height: 150px;
}
</style>
