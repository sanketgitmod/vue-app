<template>
  <v-row justify="center">
    <v-dialog :value="true" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Delete Employee?
        </v-card-title>
        <v-card-text>Are you sure you want to delete employee.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('close')">
            No
          </v-btn>
          <v-btn @click="del" color="red darken-1" text>
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    del() {
      this.$store.dispatch("deleteEmp", this.item.id);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
