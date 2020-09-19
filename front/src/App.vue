<template>
<body>
  <img
    src="./assets/img/LOGO.png"
    style="display:block; margin-left: auto; margin-right:auto; margin-top: 20px; width: 600px;"
  />
  <div class="card" style="width: 500px; margin: auto;padding: 25px;margin-top: 80px;">
    <form method="POST">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary" style="background-color: orange;">Login</button>
    </form>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style>
body {
  background-image: url('./assets/img/bg.jpg');
}
</style>