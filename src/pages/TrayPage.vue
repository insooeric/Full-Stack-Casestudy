<template>
  <div class="text-center">
    <div class="text-h4 q-mt-md text-primary">Tray Contents</div>
    <q-avatar class="q-mt-md" size="xl" square>
      <img :src="`tray.png`" />
    </q-avatar>
    <div class="text-h6 text-positive">{{ state.status }}</div>
  </div>
  <q-item style="bottom: -2vh">
    <q-item-section class="col-2 q-ml-sm text-h6 text-primary"
      >QTY</q-item-section
    >
    <q-item-section class="q-ml-sm text-h6 text-primary"
      >DESCRIPTION</q-item-section
    >
  </q-item>

  <q-scroll-area style="height: 55vh">
    <q-card class="q-ma-md">
      <q-list separator>
        <q-item clickable v-for="item in state.tray" :key="item.id">
          <q-item-section avatar>
            {{ item.qty }}
          </q-item-section>
          <q-item-section class="text-left">
            {{ item.item.description }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-scroll-area>
  <div class="text-center">
    <q-btn
      color="primary"
      label="Clear Tray"
      :disable="state.qty < 0"
      @click="clearTray()"
      style="max-width: 25vw; margin-left: 3vw"
    />
    <q-btn
      class="q-mr-sm"
      color="primary"
      label="Save Tray"
      :disable="state.tray.length < 1"
      @click="saveTray()"
    />
    <q-card-section>
      <q-chip icon="bookmark" color="primary" text-color="white" text-center
        >Nutrional Totals
        <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
          text-color="white"
        >
          Calories: {{ state.calories }}<br />
          Carbs: {{ state.carbs }}<br />
          Cholesterol: {{ state.cholesterol }}mg<br />
          Fat: {{ state.fat }}g<br />
          Fibre: {{ state.fibre }}g<br />
          Protein: {{ state.protein }}g<br />
          Salt: {{ state.salt }}mg<br />
        </q-tooltip>
      </q-chip>
    </q-card-section>
  </div>
</template>

<script>
import { poster } from "../utils/apiutil";
import { reactive, onMounted } from "vue";
import { fetcher } from "../utils/apiutil";
import { useRouter } from "vue-router";
export default {
  setup() {
    onMounted(() => {
      getTrayItems();
      state.protein = 0;
      state.calories = 0;
      state.carbs = 0;
      state.fibre = 0;
      state.choles = 0;
      state.salt = 0;
      state.fat = 0;
      state.tray.forEach((trayItem) => {
        state.protein += trayItem.item.protein * trayItem.qty;
        state.calories += trayItem.item.calories * trayItem.qty;
        state.carbs += trayItem.item.carbs * trayItem.qty;
        state.fibre += trayItem.item.fibre * trayItem.qty;
        state.choles += trayItem.item.cholesterol * trayItem.qty;
        state.salt += trayItem.item.salt * trayItem.qty;
        state.fat += trayItem.item.fat * trayItem.qty;
      });
    });
    let state = reactive({
      status: "",
      tray: [],
    });

    const getTrayItems = async () => {
      if (sessionStorage.getItem("tray")) {
        state.tray = JSON.parse(sessionStorage.getItem("tray"));
      }
    };

    const clearTray = () => {
      sessionStorage.removeItem("tray");
      state.tray = [];
      state.status = "tray cleared";
    };

    const saveTray = async () => {
      let user = JSON.parse(sessionStorage.getItem("user"));
      let tray = JSON.parse(sessionStorage.getItem("tray"));
      try {
        state.status = "sending tray info to server";
        let trayHelper = { email: user.email, selections: tray };
        let payload = await poster("tray", trayHelper);
        console.log(trayHelper);
        if (payload.indexOf("not") > 0) {
          state.status = payload;
        } else {
          clearTray();
          state.status = payload;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error add tray: ${err}`;
      }
    };

    return {
      state,
      getTrayItems,
      clearTray,
      saveTray,
    };
  },
};
</script>
