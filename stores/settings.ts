import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const fontColor = ref("black");
  const backgroundColor = ref("white");
  const fontSize = ref(24);
  const lineHeight = computed(() => fontSize.value * 1.5);
  const fontWeight = ref(400);
  const fontFamily = ref("Times New Roman");
  const availableFonts = ref([
    "Times New Roman",
    "Arial",
    "Verdana",
    "Georgia",
    "Courier new",
    "Lucida Console",
  ]);

  const modalOpen = ref(false);
  const colorModal = ref(false);

  return {
    backgroundColor,
    fontColor,
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily,
    availableFonts,
    modalOpen,
    colorModal,
  };
});
