<template>
  <div class="auth-content">
    <b-card>
      <b-form @submit="signin">
        <b-row>
          <b-col>
            <img alt="Logo" src="../assets/img/LOGO.png"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr/>
          </b-col>
        </b-row>
        <b-form-group>
          <b-form-input v-model="user.username" name="username" placeholder="E-mail" required
                        type="email"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input v-model="user.password" name="password" placeholder="Senha" required
                        type="password"></b-form-input>
        </b-form-group>
        <b-form-group class="d-flex justify-content-end">
          <b-button type="submit" variant="primary">Entrar</b-button>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import {baseApiUrl, showError} from '@/global';
import axios from 'axios';

export default {
  name: 'Login',
  data: function() {
    return {
      user: {},
    };
  },
  methods: {
    signin(e) {
      e.preventDefault();

      axios.post(`${baseApiUrl}/oauth/token`, {
        ...this.user,
        grant_type: 'password',
        client_id: 1,
        client_secret: 'gyQmIEJllLaFVrhkfNH4h2BGnZUneOBin0VFQ0gj',
      }).then((res) => {
        this.$store.commit('login', res.data['access_token']);
        this.$router.push({name: 'Dashboard'});
      }).catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  background-image: url("../assets/img/bg.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 300px;
}

hr {
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
