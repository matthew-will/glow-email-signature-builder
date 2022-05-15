import { reactive } from "vue";

export const activePerson = reactive({
  name: "",
  title: "",
  email: "",
  phone: "",
});

export const modalState = reactive({
  isOpen: false,
});
