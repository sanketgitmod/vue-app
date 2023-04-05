<template>
  <v-list three-line>
    <template v-for="item in $store.state.items">
      <v-subheader
        v-if="item.header"
        :key="item.id"
        v-text="item.header"
      ></v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="item.id"
        :inset="item.inset"
      ></v-divider>

      <v-list-item v-else :key="item.id">
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.name"></v-list-item-title>
          <v-list-item-subtitle v-html="item.des"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <!-- <v-btn icon @click.stop="$store.dispatch('deleteEmp', item.id)"> -->
          <v-btn icon @click.stop="dialogs.delete = true">
            <v-icon color="red darken-4">mdi-delete-outline</v-icon>
          </v-btn>
        </v-list-item-action>
        <delete-dialog
          v-if="dialogs.delete"
          :item="item"
          @close="dialogs.delete = false"
        ></delete-dialog>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import DeleteDialog from "./Dialogs/DeleteDialog.vue";
export default {
  components: {
    DeleteDialog,
  },
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
};
</script>

<style></style>
