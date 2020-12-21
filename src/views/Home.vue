<template>
  <div class="home">
    <Messages />
    <InputForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Messages from "@/components/Messages.vue";
import InputForm from "@/components/InputForm.vue";

export default {
  name: "Home",
  components: {
    Messages,
    InputForm,
  },
};
</script>
