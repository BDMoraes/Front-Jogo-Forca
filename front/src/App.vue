<template>
<body>
  <img class="logo" src="./assets/img/LOGO.png" />
  <div class="card">
    <form method="POST">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="InputPassword" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary btsubtmit">Login</button>
    </form>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style>
body {
  background-image: url("./assets/img/bg.jpg");
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