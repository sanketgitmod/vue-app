<template>
  <validation-observer ref="observer">
    <form @submit.prevent="saveEmp">
      <validation-provider v-slot="{ errors }" name="Name" rules="max:25">
        <v-text-field
          v-model="name"
          :counter="25"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Designation"
        rules="max:50"
      >
        <v-text-field
          v-model="designation"
          :counter="50"
          :error-messages="errors"
          label="Designation"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="select">
        <v-select
          v-model="select"
          :items="tech"
          :error-messages="errors"
          label="Technology"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <v-btn class="mr-4" type="submit">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import { required, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      designation: "",
      select: null,
      tech: [
        "Full-stack Developer",
        "Front-end Developer ",
        "Back-end Developer",
      ],

      // items: this.$store.state.items,
    };
  },
  methods: {
    clear() {
      this.name = "";
      this.designation = "";
      this.select = null;
    },
    saveEmp() {
      this.$store.dispatch("saveEmp", {
        name: this.name,
        designation: this.designation,
        select: this.select,
      });
      this.name = "";
      this.designation = "";
      this.select = null;
    },
  },
};
</script>

<style></style>
