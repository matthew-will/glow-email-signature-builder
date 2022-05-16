<script setup>
import { ref } from "vue";
import { activePerson, modalState } from "../store.js";
import Clipboard from "clipboard";
import gsap from "gsap";
import Modal from "./Modal.vue";

new Clipboard(".copy-btn");

const showTooltip = function () {
  let tooltip = document.querySelector(".tooltip");
  gsap.set(tooltip, { display: "block" });
  gsap.fromTo(tooltip, { opacity: 0 }, { opacity: 1, duration: 0.25 });
  gsap.to(tooltip, {
    opacity: 0,
    duration: 0.5,
    delay: 1.25,
    onComplete: () => {
      gsap.set(tooltip, { display: "none" });
    },
  });
};

const count = ref(0);
</script>

<template>
  <div class="preview">
    <div class="email-window">
      <div class="preview-sig">
        <table width="400" cellspacing="0" border="0">
          <tr>
            <td class="logo">
              <a HREF="http://www.weareglow.com"
                ><img
                  src="https://weareglow-assets.s3.amazonaws.com/email-logo/glow-logo-a.png"
                  alt="GLOW"
              /></a>
            </td>
            <td id="copy-sig" class="name">
              {{ activePerson.name }}<br />
              <p class="title">{{ activePerson.title }}</p>
              <p class="info lowercase">{{ activePerson.email }}</p>
              <p class="address">
                {{ activePerson.phone }} • 333 Hudson St. 302 NY, NY 10013
              </p>
            </td>
          </tr>
        </table>
      </div>

      <img
        class="email-bg"
        src="../assets/email-preview.svg"
        alt="Email Preview"
      />
    </div>
    <div class="button-container">
      <button
        class="btn copy-btn"
        @click="showTooltip"
        data-clipboard-target=".preview-sig"
        aria-label="This is the tooltip on the South side."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
        Copy Signature
      </button>
      <button class="btn white" @click="modalState.isOpen = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        How to Add to Gmail
      </button>
      <div class="tooltip">Copied To Your Clipboard</div>
    </div>
    <Modal v-show="modalState.isOpen" />
  </div>
</template>

<style scoped lang="scss">
.preview {
  background: var(--black-700);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    padding: 20px 0;
  }

  .email-bg {
    position: relative;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.4) 0px 30px 60px -30px;
  }
  .preview-sig {
    position: absolute;
    z-index: 10;
    width: 300px;
    height: 130px;
    top: 190px;
    left: 14px;
  }
  .email-window {
    position: relative;
    margin-top: 30px;
  }
  .logo {
    width: 128px;
    padding-right: 10px;
  }

  .logo img {
    height: 100%;
    width: 100%;
  }
  .preview-sig a {
    margin: 0;
    padding: 0;
    border: none !important;
    text-decoration: none !important;
    color: #8a8a8a;
  }
  p {
    margin: 0;
  }
  .preview-sig table,
  .preview-sig tr,
  .preview-sig td,
  .preview-sig a,
  .preview-sig span {
    font-family: "Arial", sans-serif;
    text-decoration: none !important;
    color: #333;
    background: #fff;
  }

  .name {
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.5px;
  }

  .title {
    font-size: 11px;
    letter-spacing: 0.5px;
  }

  .info {
    font-size: 9px;
    letter-spacing: 0.4px;
    padding-top: 5px;
  }
  .address {
    font-size: 7.5px;
    letter-spacing: 0.2px;
    padding-top: 4px;
  }
}
.btn {
  all: unset;
  margin: 0 15px;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  font-size: 17px;
  background: rgba(255, 20, 130, 0.15);
  outline: 1px solid var(--glow-pink);
  color: rgba(255, 255, 255, 0.85);
  z-index: 10;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: rgba(255, 20, 130, 0.75);
    color: white;
  }
  svg {
    height: 21px;
    padding-right: 6px;
  }
  &.white {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 25px;
    outline: 1px solid white;
    &:hover {
      color: black;
      background: rgba(255, 255, 255, 1);
    }
    svg {
      height: 20px;
      padding-right: 8px;
    }
  }
}

.tooltip {
  display: none;
  position: absolute;
  color: rgba(255, 255, 255, 0.75);
  background: var(--black-800);
  font-size: 14px;
  padding: 8px 12px;
  margin-left: 26px;
  margin-top: 65px;
  border-radius: 5px;
  z-index: 100;
}

.button-container {
  display: flex;
  margin-top: 30px;
}
</style>
