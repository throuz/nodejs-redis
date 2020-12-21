<template>
  <div class="about">
    <h1>Management side</h1>
    <Messages certification="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import Messages from "@/components/Messages.vue";

export default {
  name: "About",
  components: {
    Messages,
  },
};
</script>
