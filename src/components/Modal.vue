<script setup>
import { ref } from "vue";
import { modalState } from "../store.js";

const showModal = function () {
  console.log("close");
};

const steps = [
  {
    id: 1,
    title: "Copy the Signature",
    copy: "Verify the information in your signature is correct, then click the `Copy Signature` button to copy it to your clipboard.",
  },
  {
    id: 2,
    title: "Open Gmail Settings",
    copy: "In Gmail, click Settings (Gear icon) in the top right corner, then click 'See all Settings'. Scroll down until you see options for 'Signature'.",
  },
  {
    id: 3,
    title: "Create New Signature",
    copy: " Click '+ Create New' and name your signature accordingly. Then in the text field to the right, paste your signature (CMD + V for Mac, Cntrl + V for PC). It should look the same as in the preview window. If it doesn't ensure you selected all elements.",
  },
  {
    id: 4,
    title: "Set Signature Defaults",
    copy: "Open the 'For New Emails Use' dropdown and select your saved signature.",
  },
  {
    id: 5,
    title: "Save Changes",
    copy: "Scroll down to the bottom of the page and click 'Save Changes'. You should now see the email signature on newly composed emails.",
  },
];
</script>

<template>
  <div class="modal-bg" :show="modalState.isOpen">
    <div class="modal">
      <div class="close-btn" @click="modalState.isOpen = false">
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="modal-inner">
        <p class="modal-headline">How to Add Your Signature to Gmail</p>
        <div class="step-module" v-for="step in steps" :key="step.title">
          <div class="image">
            <video
              playsinline
              muted
              autoplay
              :src="`../src/assets/video/step-${step.id}.mp4`"
              alt=""
            />
          </div>
          <div class="info">
            <p class="title">{{ step.title }}</p>
            <p class="copy">{{ step.copy }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 101;
  background: rgba(0, 0, 0, 0.85);
  .modal {
    height: 80vh;
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    max-width: 1400px;
    max-height: 1100px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    &-inner {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      padding-right: 35px;
    }
  }
  .modal-headline {
    text-align: center;
    font-size: 36px;
  }
  .close-btn {
    position: fixed;
    cursor: pointer;
    z-index: 102;
    svg {
      height: 30px;
    }
  }
}

.step-module {
  display: flex;
  align-items: center;
  padding: 50px 0;
  border-bottom: 1px solid var(--black-200);
  .image {
    width: 50%;
    video {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  .info {
    width: 50%;
    padding-left: 25px;

    .title {
      font-size: 28px;
      padding-bottom: 10px;
    }
    .copy {
      font-size: 18px;
      line-height: 1.4;
    }
  }
}
</style>
