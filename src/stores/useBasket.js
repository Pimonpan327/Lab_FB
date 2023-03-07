import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBasket = defineStore("basket", () => {
  const basket = ref([]);

  const getState = computed(() => basket.value);
  const storeState = (state) => basket.value.push(state);
  const popState = (index) => basket.value.pop(index);
  return { basket, getState, storeState, popState };
});
