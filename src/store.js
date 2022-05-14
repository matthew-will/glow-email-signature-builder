import { reactive } from "vue";

export const signature = reactive({
  name: "name",
  title: "title",
  email: "email",
  phone: "123.456.789",
});

export const modalState = reactive({
  isOpen: false,
});
