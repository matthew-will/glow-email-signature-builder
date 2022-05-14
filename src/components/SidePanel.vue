<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="side-panel">
    <div class="panel-inner">
      <div class="logo">
        <img src="../assets/logo.svg" alt="GLOW Logo" />
        <div class="headline">Email Signature Builder</div>
      </div>
      <div class="fields">
        <div class="field">
          <label for="email" class="form-label">Full Name</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Full Name"
            autocomplete="email"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Title</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Job Title"
            autocomplete="email"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your GLOW email"
            autocomplete="email"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
            autocomplete="email"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-panel {
  width: 475px;
  height: 100vh;
  padding: 1.5rem;
  background: var(--black-900);
  .panel-inner {
    display: flex;
    flex-direction: column;
  }
}
.fields {
  padding: 20px 0;
  .field {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    label {
      color: rgba(255, 255, 255, 0.35);
      letter-spacing: 0.2px;
      font-size: 14px;
      padding-bottom: 2px;
    }
  }
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 75%;
  }
  .headline {
    padding-top: 10px;
  }
}
</style>
