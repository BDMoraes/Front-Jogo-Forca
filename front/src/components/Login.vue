<template>
<body>
  <img class="logo" src="../assets/img/LOGO.png" />
  <div class="card">
    <form method="POST" @submit="formSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          v-model="InputEmail"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="InputPass" v-model="InputPass" />
      </div>
      <button type="submit" class="btn btn-primary justify-content-center btsubtmit">Login</button>
    </form>
  </div>
  <strong>Output:</strong>
  <pre>
    {{output}}
 </pre>
</body>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      InputEmail: "",
      InputPass: "",
      output: "",
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios
        .post("http://localhost:8000/yourPostApi", {
          name: this.InputEmail,
          pass: this.InputPass,
        })
        .then(function (response) {
          currentObj.output = response.data;
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },
  },
};
</script>

<style>
body {
  background-image: url("../assets/img/bg.jpg");
}

.card {
  width: 500px;
  margin: auto;
  padding: 25px;
  margin-top: 40px;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 600px;
}

.btsubmit {
  background-color: orange;
}
</style>