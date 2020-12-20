<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ message }}</h3>
    <button @click="addMessageAction">點我測試</button>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["addMessageAction"])
  },
  computed: {
    ...mapState(["message"])
  }
};
</script>
