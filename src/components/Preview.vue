<script setup>
import { ref } from "vue";
import { activePerson } from "../store.js";
import Clipboard from "clipboard";

new Clipboard(".btn");

const showTooltip = function () {
  let tooltip = document.querySelector(".tooltip");
  tooltip.style.display = "block";
  setTimeout(() => {
    tooltip.style.display = "none";
  }, 1000);
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
    <div>
      <button
        class="btn"
        @click="showTooltip"
        data-clipboard-target=".preview-sig"
        aria-label="This is the tooltip on the South side."
      >
        Copy Signature
      </button>
      <div class="tooltip">
        <h3>Copied to the clipboard!</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  background: var(--black-700);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: 20px;
  padding: 8px 20px;
  background: white;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    background: var(--glow-pink);
    color: white;
  }
}
.tooltip {
  display: none;
  position: absolute;
}
</style>
