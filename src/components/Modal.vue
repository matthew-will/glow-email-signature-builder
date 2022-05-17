<script setup>
import { ref, onUpdated } from "vue";
import { modalState } from "../store.js";
import gsap from "gsap";

import step0 from "../assets/video/step-0.mp4";
import step1 from "../assets/video/step-1.mp4";
import step2 from "../assets/video/step-2.mp4";
import step3 from "../assets/video/step-3.mp4";
import step4 from "../assets/video/step-4.mp4";

const steps = [
  {
    video: step0,
    title: "Copy the Signature",
    copy: "Verify the information in your signature is correct, if it isnt, make updates in the `Edit Signature Details` fields. Once correct, click the `Copy Signature` button to copy it to your clipboard.",
  },
  {
    id: 1,
    video: step1,
    title: "Open Gmail Settings",
    copy: "In Gmail, click Settings (Gear icon) in the top right corner, then click 'See all Settings'. Scroll down until you see options for 'Signature'.",
  },
  {
    id: 2,
    video: step2,
    title: "Create New Signature",
    copy: " Click '+ Create New' and name your signature. In the text field to the right, paste your signature (CMD + V for Mac, Cntrl + V for PC). It should look the same as in the preview window.",
  },
  {
    id: 3,
    video: step3,
    title: "Set Signature Defaults",
    copy: "Open the 'For New Emails Use' dropdown and select your saved signature.",
  },
  {
    id: 4,
    video: step4,
    title: "Save Changes",
    copy: "Scroll down to the bottom of the page and click 'Save Changes'. When composing a new email, you should now see your signature applied",
  },
];
</script>

<template>
  <div class="modal-bg" :show="modalState.isOpen">
    <div class="modal">
      <div class="close-btn" @click="modalState.isOpen = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
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
        <p class="modal-subhead">
          The following are the steps to create, copy, and implement your email
          signature for Gmail. If you have any trouble doing this reach, out to
          <a href="https://weareglow.freshdesk.com/support/home" target="_blank"
            >Helpdesk</a
          >
        </p>
        <div class="step-module" v-for="step in steps" :key="step.title">
          <div class="image">
            <video playsinline muted loop autoplay :src="step.video" alt="" />
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
    height: 75vh;
    width: 75vw;
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
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .modal-headline {
    text-align: center;
    font-size: 36px;
    @media (max-width: 920px) {
      font-size: 30px;
    }
  }
  .modal-subhead {
    color: var(--black-500);
    max-width: 700px;
    padding: 3px 10px;
    text-align: center;
    font-size: 1.1rem;
    @media (max-width: 920px) {
    }
    a {
      color: var(--glow-pink);
    }
  }
  .close-btn {
    position: fixed;
    cursor: pointer;
    z-index: 102;
    svg {
      height: 30px;
      stroke: var(--black-800);
      transition: all 300ms;
    }
    &:hover svg {
      stroke: var(--glow-pink);
    }
  }
}

.step-module {
  display: flex;
  max-width: 900px;
  flex-direction: column;
  padding: 40px 20px;
  border-bottom: 1px solid var(--black-100);
  .image {
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
  }
  .info {
    margin-top: 25px;
    .title {
      font-size: 28px;
      padding-bottom: 5px;
    }
    .copy {
      font-size: 17px;
      line-height: 1.5;
      color: var(--black-700);
      padding-right: 15%;
      margin-bottom: 50px;
      @media (max-width: 1200px) {
        margin-bottom: 10px;
      }
      @media (max-width: 920px) {
        padding-right: 25px;
      }
    }
  }
}
</style>
