<template>
  <div class="text-h4 text-center q-mt-md q-mb-md text-primary">Login</div>
  <div class="text-title2 text-center text-negative text-bold q-mt-sm">
    {{ state.status }}
  </div>
  <q-card class="q-ma-md q-pa-md">
    <q-form
      ref="myForm"
      class="q-gutter-md"
      greedy
      @submit="login"
      @reset="resetFields"
    >
      <q-input
        outlined
        placeholder="enter email address"
        id="email"
        v-model="state.email"
        :rules="[isRequired, isValidEmail]"
      />

      <q-input
        outlined
        placeholder="enter password"
        id="password"
        v-model="state.password"
        :rules="[isRequired]"
      />

      <q-btn label="LOGIN" type="submit" />
      <q-btn label="RESET" type="reset" />
    </q-form>
  </q-card>
</template>
<script>
import { reactive } from "vue";
import { poster } from "../utils/apiutil";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    let state = reactive({
      status: "",
      email: "",
      password: "",
    });
    const isRequired = (val) => {
      return !!val || "field is required";
    };
    const router = useRouter();
    const route = useRoute();
    const login = async () => {
      state.status = "login to server";
      let userHelper = {
        email: state.email,
        password: state.password,
      };

      try {
        let payload = await poster("user/login", userHelper);
        if (!payload.token.includes("invalid")) {
          sessionStorage.setItem("user", JSON.stringify(payload));
          state.status = "login successful";
          route.query.nextUrl
            ? router.push({ path: route.query.nextUrl })
            : router.push({ path: "/" });
        }

        state.status = payload.token;
      } catch (err) {
        //state.status = err.message;
        state.status = "email or passwrod invalid - login failed";
      }
    };
    const resetFields = () => {
      state.status = "";
      state.email = "";
      state.password = "";
    };
    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    };

    return {
      state,
      login,
      isRequired,
      resetFields,
      isValidEmail,
      poster,
    };
  },
};
</script>
