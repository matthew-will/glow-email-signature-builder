<script setup>
import { ref } from "vue";
import { activePerson } from "../store.js";
import { employees } from "../employees.js";

const selected = ref("");

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
        <img src="../assets/logo.svg" alt="GLOW Logo" />
        <div class="headline">Email Signature Builder</div>
      </div>

      <div class="picker">
        <div class="divider"></div>
        <select v-model="selected" @change="updateStore(selected)">
          <option disabled value="">Select Your Name</option>
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
            autocomplete="name"
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
            autocomplete="email"
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
            autocomplete="phone"
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
.picker {
  select {
    width: 100%;
    max-height: 20vh;
  }
  input {
    color: white;
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
.subhead {
  color: white;
  font-size: 19px;
  letter-spacing: 0.2px;
}
.divider {
  border: 1px solid var(--black-800);
  margin: 20px 0;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
