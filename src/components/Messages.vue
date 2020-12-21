<template>
  <div class="messages">
    <div class="message-wrap" v-for="message in messages" :key="message.id">
      <div class="message-info">
        <div class="author-name">{{ message.name }}</div>
        <div class="current-time">{{ message.time }}</div>
      </div>
      <div class="message-content">{{ message.message }}</div>
      <input
        type="button"
        value="DELETE"
        v-if="certification"
        @click="deleteMessageAction(message.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import { onMounted } from "vue";

export default {
  name: "Messages",
  props: ["certification"],
  methods: {
    ...mapActions(["getMessagesAction", "deleteMessageAction"]),
  },
  computed: {
    ...mapState(["messages"]),
  },
  mounted() {
    this.getMessagesAction();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
