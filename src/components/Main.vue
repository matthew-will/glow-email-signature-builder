<script setup>
import { ref } from "vue";
import SidePanel from "./SidePanel.vue";
import Preview from "./Preview.vue";

const count = ref(0);
</script>

<template>
  <div class="mobile-message">
    <img
      class="phone-gif"
      src="../assets/no-phone.gif"
      alt="No Phone Support"
    />
    <p>
      Unfortunately, updating Gmail email signatures isn't support on mobile
      devices. Please use this builder on a laptop or desktop.
    </p>
  </div>
  <div class="desktop">
    <div class="desktop-inner flex w-100vw h-100vh">
      <SidePanel />
      <Preview />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .mobile-message {
    display: none;
    @media (max-width: 599px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: var(--black-900);
      height: 100vh;
      width: 100vw;
      color: white;
      padding: 30px;
    }
    img {
      width: 70%;
      border-radius: 10px;
    }
    p {
      margin-top: 20px;
      text-align: center;
      font-size: 1.25rem;
    }
  }
  .desktop {
    display: block;
    @media (max-width: 599px) {
      display: none;
    }
  }
  .desktop-inner {
    flex-direction: row;
    @media (max-width: 920px) {
      flex-direction: column;
    }
  }
}
</style>
