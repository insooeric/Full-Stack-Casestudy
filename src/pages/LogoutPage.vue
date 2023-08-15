<template>
  <div class="text-h5 text-center text-primary q-mt-sm">
    {{ state.status }}
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      Logout();
    });
    let state = reactive({
      status: "",
    });
    const Logout = async () => {
      try {
        state.status = "User now logged out";
        sessionStorage.clear();
      } catch (err) {
        state.status = `Error has occured: ${err.message}`;
      }
    };
    return {
      state,
      Logout,
    };
  },
};
</script>
