import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    message: "123"
  },
  actions: {
    addMessageAction({ commit }) {
      console.log("action");
      axios.get("http://localhost:5000/repos/throuz").then(response => {
        commit("addMessage", response.data.username);
      });
    }
  },
  mutations: {
    addMessage(state, payload) {
      state.message = payload
    }
  },
  getters: {
    getCount(state) {
      return state.message;
    }
  },
  modules: {}
});
