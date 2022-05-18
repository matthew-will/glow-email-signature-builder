<script setup>
import { ref } from "vue";
import { activePerson } from "../store.js";
import { employees } from "../employees.js";
import vSelect from "vue-select";

const selected = ref("");

const options = ["foo", "bar", "baz"];

let listOptions = [];

const updateStore = function (selected) {
  let selectedPerson = employees.filter(
    (employee) => employee.name === selected
  );
  activePerson.name = selectedPerson[0].name;
  activePerson.title = selectedPerson[0].title;
  activePerson.email = selectedPerson[0].email;
  activePerson.phone = selectedPerson[0].phone;
};
</script>

<template>
  <div class="side-panel">
    <div class="panel-inner">
      <div class="logo">
        <a href="https://weareglow.com/"
          ><img class="glow-logo" src="../assets/logo.svg" alt="GLOW Logo"
        /></a>
        <div class="headline">Email Signature Builder</div>
      </div>

      <div class="picker">
        <!-- <v-select
          class="style-chooser"
          :options="options"
          :value="activePerson.name"
          transition=""
          placeholder="Select Your Name"
          @input="updateMe(selected)"
        ></v-select> -->

        <div class="divider"></div>
        <p class="subhead">Employee Roster</p>
        <p class="help-text">
          If you don’t see your name listed or would like it displayed
          differently, edit the fields below. If you believe that any of the
          information is incorrect please contact Ann so we can update our
          records
        </p>
        <select
          class="minimal"
          v-model="selected"
          @change="updateStore(selected)"
          required
        >
          <option disabled value="" class="placeholder">
            Select Your Name
          </option>
          <option
            v-for="employee in employees"
            v-bind:key="employee.id"
            v-bind:value="employee.name"
          >
            {{ employee.name }}
          </option>
        </select>
        <div class="divider"></div>
      </div>

      <!-- Custom Fields -->
      <div class="fields">
        <p class="subhead">Edit Signature Details</p>
        <div class="field">
          <label for="email" class="form-label">Full Name</label>
          <input
            type="name"
            name="name"
            id="name"
            v-model="activePerson.name"
            placeholder="Your Full Name"
            autocomplete="none"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            v-model="activePerson.title"
            placeholder="Your Job Title"
            autocomplete="none"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="activePerson.email"
            placeholder="Your GLOW email"
            autocomplete="none"
          />
        </div>
        <div class="field">
          <label for="email" class="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            v-model="activePerson.phone"
            placeholder="Your Phone Number"
            autocomplete="none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-panel {
  width: 550px;
  height: 100%;
  padding: 1.5rem;
  background: var(--black-900);
  overflow-y: scroll;
  @media (max-width: 1200px) {
    width: 500px;
  }
  @media (max-width: 920px) {
    width: 100%;
    height: unset;
  }
  .panel-inner {
    display: flex;
    flex-direction: column;
    @media (max-width: 920px) {
      padding: 10px;
    }
  }
}
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  font-size: 16px;
  margin: 12px 0 0 0;

  &:invalid {
    color: rgba(255, 255, 255, 0.3);
  }
  &:valid {
    color: white;
    background: rgba(255, 20, 130, 0.3);
  }
}
.fields {
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
  width: 90%;
  @media (max-width: 920px) {
    align-items: center;
  }
  img {
    width: 70%;
    @media (max-width: 1200px) {
      width: 225px;
    }
    @media (max-width: 920px) {
      width: 200px;
    }
  }
  .headline {
    padding-top: 15px;
    font-size: 1.7rem;
    color: white;
    @media (max-width: 1200px) {
      font-size: 1.6rem;
    }
    @media (max-width: 920px) {
      font-size: 1.5rem;
    }
  }
}
.subhead {
  color: var(--black-300);
  font-size: 19px;
  letter-spacing: 0.2px;
}
.help-text {
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  line-height: 1.3;
  padding: 3px 20px 5px 3px;
}
.divider {
  border: 1px solid var(--black-800);
  margin: 20px 0;
}
.glow-logo {
  filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3));
  transition: all 500ms ease-in-out;
  &:hover {
    filter: drop-shadow(0px 0px 20px var(--glow-pink));
  }
}

select.minimal {
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      rgba(255, 255, 255, 0.25) 50%
    ),
    linear-gradient(135deg, rgba(255, 255, 255, 0.25) 50% 50%, transparent 50%),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.25) 50%
    );
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}
</style>
