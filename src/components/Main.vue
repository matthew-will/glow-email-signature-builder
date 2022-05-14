<script setup>
import { ref } from "vue";
import SidePanel from "./SidePanel.vue";
import Preview from "./Preview.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex w-100vw h-100vh">
    <SidePanel />
    <Preview />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
