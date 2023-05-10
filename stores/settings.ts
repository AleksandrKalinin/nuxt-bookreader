import { defineStore } from "pinia";

export const useSettinsStore = defineStore("settings", () => {
  const fontColor = ref("black");
  const fontSize = ref(24);
  const lineHeight = ref(fontSize.value * 1.5);
  const fontWeight = ref(400);
  const fontFamily = ref("Times New Roman");
  return {
    fontColor,
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily,
  };
});
