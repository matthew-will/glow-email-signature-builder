<script setup>
import { ref, computed } from "vue";
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

const phoneHREF = computed(() => {
  return activePerson.phone.replace(/\./g, "");
});

const count = ref(0);
</script>

<template>
  <div class="preview">
    <div class="email-window">
      <div class="preview-sig">
        <table
          id="sig"
          width="525"
          cellspacing="0"
          cellpadding="0"
          border-spacing="0"
          style="
            width: 525px;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: transparent;
          "
        >
          <tr>
            <td
              valign="bottom"
              style="
                margin: 0;
                padding: 0;
                vertical-align: bottom;
                width: 128px;
              "
            >
              <a
                href="https://weareglow.com"
                style="border: none; text-decoration: none"
              >
                <img
                  moz-do-not-send="true"
                  src="https://weareglow-assets.s3.amazonaws.com/email-logo/glow-logo-a.png"
                  alt="GLOW"
                  width="128"
                  style="border: none; display: block; width: 128px"
                />
              </a>
            </td>

            <td style="height: 60px; width: 10px"></td>

            <td valign="bottom" style="margin: 0; padding: 0">
              <table
                id="sig2"
                cellspacing="0"
                cellpadding="0"
                border-spacing="0"
                style="padding:0;margin:0;font-family:'Arial,sans-serif;mso-border-collapse:collapse;-webkit-text-size-adjust:none;line-height:1 !important;"
              >
                <tr style="margin: 0; padding: 0">
                  <td
                    style="
                      margin: 0;
                      padding: 0 0 2px 0;
                      font-family: Arial, sans-serif;
                      white-space: nowrap;
                      line-height: 15px;
                    "
                  >
                    <span
                      style="
                        font-size: 14px;
                        letter-spacing: 0.5px;
                        margin: 0;
                        color: #333;
                      "
                      >{{ activePerson.name }}</span
                    >
                  </td>
                </tr>
                <tr style="margin: 0; padding: 0">
                  <td
                    style="
                      margin: 0;
                      padding: 0 0 3px 0;
                      font-family: Arial, sans-serif;
                      white-space: nowrap;
                      line-height: 12px;
                    "
                  >
                    <span
                      style="
                        font-size: 11px;
                        letter-spacing: 0.5px;
                        margin: 0;
                        color: #333;
                      "
                      >{{ activePerson.title }}</span
                    >
                  </td>
                </tr>
                <tr style="margin: 0; padding: 0">
                  <td
                    style="
                      margin: 0;
                      padding: 0 0 2px 0;
                      font-family: Arial, sans-serif;
                      white-space: nowrap;
                      line-height: 11px;
                    "
                  >
                    <span
                      style="
                        font-size: 10px;
                        letter-spacing: 0.5px;
                        margin: 0;
                        color: #333;
                      "
                      >{{ activePerson.email }}</span
                    >
                  </td>
                </tr>

                <tr style="margin: 0; padding: 0">
                  <td
                    style="
                      margin: 0;
                      padding: 0;
                      font-family: Arial, sans-serif;
                      white-space: nowrap;
                      line-height: 10px;
                    "
                  >
                    <span
                      style="
                        font-size: 9px;
                        letter-spacing: 0.2px;
                        margin: 0;
                        color: #333;
                      "
                      ><a :href="`tel:${phoneHREF}`">{{
                        activePerson.phone
                      }}</a>
                      • 333 Hudson St. 302 NY, NY 10013</span
                    >
                  </td>
                </tr>
              </table>
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
  background: var(--black-800);
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
    box-shadow: rgba(0, 0, 0, 1) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
  background: rgba(0, 0, 0, 0.25);
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
