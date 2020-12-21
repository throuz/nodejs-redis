<template>
  <div class="input-form">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <input
          type="text"
          class="form-control"
          id="message"
          v-model="message"
        />
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "InputForm",
  data() {
    return {
      name: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(["addMessageAction"]),
    onSubmit() {
      if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0);
      }

      const count = () => {
        const count = parseInt(localStorage.getItem("count")) + 1;
        localStorage.setItem("count", count);
        return count;
      };

      const dateTime = () => {
        const today = new Date();
        const date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        const dateTime = date + " " + time;
        return dateTime;
      };

      if (this.name !== "" && this.message !== "") {
        const messageInfo = {
          id: count(),
          name: this.name,
          time: dateTime(),
          message: this.message,
        };

        this.addMessageAction(messageInfo);

        this.name = "";
        this.message = "";
      } else {
        alert("Field cannot be empty!");
      }
    },
  },
  computed: {
    ...mapState(["messages"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
