import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      // {
      //   id: 2,
      //   avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      //   name: "Rahul Bhosarekar",
      //   des: `<span class="text--primary">Trainee Software Engineer</span> &mdash; Full-stack Developer`,
      // },
      // { divider: true, inset: true },
      // {
      //   id: 3,
      //   avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      //   name: "Vishal Jangave",
      //   des:
      //     '<span class="text--primary">Trainee Software Engineer</span> &mdash; Front-end Developer',
      // },
    ],
    snackbar: {
      show: false,
      text: "Employee added",
    },
  },
  mutations: {
    saveEmp(state, payload) {
      if (payload.name && payload.designation) {
        let newEmp = {
          id: Date.now(),
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: payload.name,
          des: `<span class="text--primary">${payload.designation}</span> &mdash;${payload.select}`,
        };
        state.items.push(newEmp);
        // state.items.push({ divider: true, inset: true });
      }
    },
    deleteEmp(state, id) {
      state.items = state.items.filter((e) => e.id !== id);
    },
    snackbar(state, text) {
      state.snackbar.show = !state.snackbar.show;
      state.snackbar.text = text;
    },
  },
  actions: {
    saveEmp({ commit }, payload) {
      commit("saveEmp", payload);
      commit("snackbar", "Employee added");
    },
    deleteEmp({ commit }, payload) {
      commit("deleteEmp", payload);
      commit("snackbar", "Employee deleted");
    },
  },
  modules: {},
});
