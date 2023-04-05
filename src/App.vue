<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Employee
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav id="scrolling-techniques">
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo darken-2"
      dark
      prominent
      shrink-on-scroll
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Employee</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
    <!-- <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/Global/Snackbar.vue";
export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Employee", icon: "mdi-account-box-multiple", to: "/" },
        // { title: "Photos", icon: "mdi-image", to: "/photo" },
        { title: "About", icon: "mdi-help-box", to: "/about" },
      ],
      right: null,
    };
  },
};
</script>
