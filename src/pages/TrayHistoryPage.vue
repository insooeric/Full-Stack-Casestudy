<template>
  <div class="text-center">
    <div class="text-h4 q-mt-md text-primary">Tray History</div>
    <q-avatar class="q-mt-md" size="xl" square>
      <img :src="`tray.png`" />
    </q-avatar>
    <div class="text-h6 text-positive">{{ state.status }}</div>
  </div>

  <q-scroll-area style="height: 55vh">
    <q-card class="q-ma-md">
      <b>
        <q-item style="bottom: -2vh">
          <q-item-section class="q-ml-sm text-h8 text-dark">ID</q-item-section>
          <q-item-section class="q-ml-sm text-h8 text-dark"
            >Date Created</q-item-section
          >
          <q-item-section class="q-ml-sm text-h8 text-dark"
            >Total Cals.</q-item-section
          >
        </q-item>
      </b>
      <q-list separator>
        <q-item
          clickable
          v-for="tray in state.trays"
          :key="tray.id"
          @click="selectTray(tray.id)"
        >
          <q-item-section>
            {{ tray.id }}
          </q-item-section>
          <q-item-section>
            {{ formatDate(tray.dateCreated) }}
          </q-item-section>
          <q-item-section>
            {{ tray.totalCalories }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-scroll-area>
  <q-dialog
    v-model="state.traySelected"
    transition-show="rotate"
    transition-hide="rotate"
  >
    <q-card>
      <q-card-actions align="right">
        <q-btn flat label="X" color="primary" v-close-popup class="text-h5" />
      </q-card-actions>
      <q-card-section>
        <div class="text-h4 q-mt-md text-primary" style="text-align: center">
          Tray #{{ state.tray.id }}
        </div>
        <div style="text-align: center">
          {{ formatDate(state.tray.dateCreated) }}
        </div>
        <div class="text-center">
          <img :src="`/tray.png`" style="width: 100px" />
          <q-item style="bottom: -2vh">
            <q-item-section class="col-2 q-ml-sm text-h6 text-primary"
              >QTY</q-item-section
            >
            <q-item-section class="q-ml-sm text-h6 text-primary"
              >DESCRIPTION</q-item-section
            >
          </q-item>
          <q-scroll-area style="height: 20vh">
            <q-card class="q-ma-md">
              <q-list separator>
                <q-item v-for="item in state.tray.items" :key="item.id">
                  <q-item-section avatar>
                    {{ item.qty }}
                  </q-item-section>
                  <q-item-section class="text-left">
                    {{ item.description }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-scroll-area>
          <q-card-section>
            <q-chip
              icon="bookmark"
              color="primary"
              text-color="white"
              text-center
              >Nutrional Info
              <q-tooltip
                transition-show="flip-right"
                transition-hide="flip-left"
                text-color="white"
              >
                Calories: {{ state.tray.items.at(0).totalCalories }}<br />
                Carbs: {{ state.tray.items.at(0).totalCarbs }}<br />
                Cholesterol:
                {{ state.tray.items.at(0).totalCholesterol }}mg<br />
                Fat: {{ state.tray.items.at(0).totalFat }}g<br />
                Fibre: {{ state.tray.items.at(0).totalFibre }}g<br />
                Protein: {{ state.tray.items.at(0).totalProtein }}g<br />
                Salt: {{ state.tray.items.at(0).totalSalt }}mg<br />
              </q-tooltip>
            </q-chip>
          </q-card-section>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { fetcher, poster } from "../utils/apiutil";
import { reactive, onMounted } from "vue";
import { formatDate } from "src/utils/formatutils";
export default {
  setup() {
    onMounted(() => {
      getTrays();
    });
    let state = reactive({
      status: "",
      trays: [],
      tray: {
        id: null,
        items: [],
      },
      traySelected: false,
      user: null,
    });
    const getTrays = async () => {
      try {
        state.status = "getting tray history ...";
        state.user = JSON.parse(sessionStorage.getItem("user"));
        state.trays = await fetcher(`Tray/${state.user.email}`);
        state.status = `loaded ${state.trays.length} histories.`;
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const selectTray = async (trayid) => {
      try {
        state.status = "getting selected tray info ...";
        state.tray.id = trayid;
        state.tray.items = await fetcher(`tray/${trayid}/${state.user.email}`);
        state.status = `loaded ${state.tray.items.length} items.`;
        state.traySelected = true;
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    return {
      state,
      formatDate,
      getTrays,
      selectTray,
    };
  },
};
</script>
