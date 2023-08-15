<template>
  <div class="text-center">
    <div class="text-h2 q-mt-lg">Utility</div>
    <q-btn
      class="q-ma-sm"
      color="white"
      text-color="black"
      label="Load Tables"
      @click="loadTables"
    />
    <q-btn
      class="q-ma-sm"
      color="white"
      text-color="black"
      label="Load Tables"
      @click="loadStores"
    />
    <div class="status q-mt-md text-subtitle2 text-negative" text-color="red">
      {{ state.status }}
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { fetcher } from "../utils/apiutil";
export default {
  setup() {
    let state = reactive({
      status: "",
    });
    const loadTables = async () => {
      try {
        state.status = "resetting exercise tables ...";
        state.status = await fetcher(`Data`);
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const loadStores = async () => {
      try {
        state.status = "loading store data ...";
        let payload = await fetcher("Data/loadstores");
        state.status = payload;
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    return {
      loadTables,
      loadStores,
      state,
    };
  },
};
</script>
