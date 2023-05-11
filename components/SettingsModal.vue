<template>
  <Teleport to="#teleportId">
    <div class="overlay">
      <div
        class="pa-12 bg-grey-lighten-5"
        width="750px"
        min-height="350"
        height="auto"
      >
        <div class="settings-block">
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
        </div>
        <div class="settings-block">
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
        </div>

        <div
          class="d-flex justify-center align-center text-preview text-center"
          :style="{
            backgroundColor,
            color: fontColor,
            fontWeight: weight,
            fontFamily: family,
            fontSize: size,
          }"
        >
          Sample text
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

const basicColor = [0, 0, 0];
const backgroundColor = computed(() => settings.backgroundColor);
const fontColor = computed(() => settings.fontColor);
const fontWeight = computed(() => settings.fontWeight);
const fontFamily = computed(() => settings.fontFamily);

const colors = computed(() => {
  let arr = [];
  for (let i = 0; i < 15; i++) {
    const item = [];
    for (let j = 0; j < 3; j++) {
      item.push(basicColor[j] + 17 * (i + 1));
    }
    arr.push(item);
  }
  return arr;
});

const setBackgroundColor = (e: MouseEvent) => {
  if (e.target instanceof Element) {
    const bgColor = e.target.getAttribute("data-color");
    bgColor !== null
      ? (settings.backgroundColor = bgColor)
      : settings.backgroundColor;
  }
};

const setFontColor = (e: MouseEvent) => {
  if (e.target instanceof Element) {
    const fontColor = e.target.getAttribute("data-color");
    fontColor !== null ? (settings.fontColor = fontColor) : settings.fontColor;
  }
};

const applySettings = () => {
  settings.fontSize = size.value;
  settings.fontWeight = weight.value;
  settings.fontFamily = family.value;
  settings.modalOpen = false;
};
</script>
<style scoped>
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

.text-preview {
  height: 150px;
}

.colors-container {
  width: 460px;
}

.color-options {
  width: 220px;
  height: 130px;
  display: grid;
  justify-items: stretch;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(40px, 1fr));
}
.color-option {
  width: 40px;
  height: 40px;
  border: 1px solid black;
}

.settings-block {
  margin-bottom: 24px;
}
</style>
