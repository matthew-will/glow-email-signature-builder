import { reactive } from "vue";

export const activePerson = reactive({
  name: "Active Name",
  title: "Active Title",
  email: "active@weareglow.com",
  phone: "123.456.789",
});

export const modalState = reactive({
  isOpen: false,
});
