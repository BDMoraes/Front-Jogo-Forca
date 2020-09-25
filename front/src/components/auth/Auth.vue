<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="../../assets/img/LOGO.png" width="300" alt="Logo" />
      <hr />
      <div class="auth-title"></div>
      <input
        v-model="user.username"
        name="username"
        type="text"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <button @click="signin">Entrar</button>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Auth",
  data: function () {
    return {
      user: {},
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/oauth/token`, {
          ...this.user,
          grant_type: "password",
          client_id: 1,
          client_secret: "gyQmIEJllLaFVrhkfNH4h2BGnZUneOBin0VFQ0gj",
        })
        .then((res) => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  background-image: url("../../assets/img/bg.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-modal {
  background-color: white;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}
.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
}
.auth-modal button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  color: #fff;
  padding: 5px 15px;
}
.auth-modal a {
  margin-top: 35px;
}
.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>