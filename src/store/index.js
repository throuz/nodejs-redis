import { createStore } from "vuex";


export default createStore({
  state: {
    messages: []
  },
  actions: {
    getMessagesAction({ commit }) {
      commit('getMessages');
    },
    addMessageAction({ commit }, payload) {
      commit('addMessage', payload);
    },
    deleteMessageAction({ commit }, payload) {
      commit('deleteMessage', payload);
    }
  },
  mutations: {
    getMessages(state) {
      if (!JSON.parse(localStorage.getItem('messages'))) {
        localStorage.setItem('messages', JSON.stringify([]));
      }
      state.messages = JSON.parse(localStorage.getItem('messages'));
    },
    addMessage(state, payload) {
      const messages = JSON.parse(localStorage.getItem('messages'));
      messages.push(payload);
      localStorage.setItem('messages', JSON.stringify(messages));
      state.messages = messages
    },
    deleteMessage(state, payload) {
      const messages = JSON.parse(localStorage.getItem('messages'));
      const found = messages.find(element => element.id == payload);
      messages.splice(messages.indexOf(found), 1);
      localStorage.setItem('messages', JSON.stringify(messages));
      state.messages = messages
    }
  },
  getters: {
    getCount(state) {
      return state.message;
    }
  },
  modules: {}
});
