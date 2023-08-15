<template>
  <div class="text-center">
    <div class="text-h4 q-mt-lg">TomTom Map Ex2</div>
    <div class="text-h6">get lat and lon</div>
    <div>
      <q-input
        class="q-ma-lg text-h5"
        placeholder="enter current address"
        id="address"
        v-model="state.address"
      />
      <br />
      <q-btn
        label="Gen Map"
        @click="genMap"
        class="q-mb-md"
        style="width: 30vw"
      />
    </div>
    <div
      style="
        height: 50vh;
        width: 90vw;
        margin-left: 5vw;
        margin-top: 2vh;
        border: solid;
      "
      ref="mapRef"
      v-show="state.showmap === true"
    ></div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let state = reactive({
      status: "",
      address: "",
      showmap: false,
    });
    const genMap = async () => {
      try {
        state.showmap = true;
        const tt = window.tt;
        let url = `https://api.tomtom.com/search/2/geocode/${state.address}.json?key=oxczCG0A7leW7yWxyLADQh6MzCYGuOVJ`;
        let response = await fetch(url);
        let payload = await response.json();
        let lat = payload.results[0].position.lat;
        let lon = payload.results[0].position.lon;
        let map = tt.map({
          key: "oxczCG0A7leW7yWxyLADQh6MzCYGuOVJ",
          container: mapRef.value,
          source: "vector/1/basic-main",
          center: [lon, lat],
          zoom: 8,
        });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
      } catch (err) {
        state.status = err.message;
      }
    };

    const mapRef = ref(null);

    return {
      state,
      mapRef,
      genMap,
    };
  },
};
</script>
