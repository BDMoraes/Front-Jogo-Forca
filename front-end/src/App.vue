<template>
  <div id="app">
    <h1>Jogo da forca aqui</h1>
    <form action="login" method="post">
      <div class="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <button type="button" class="cancelbtn">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "KING";
  src: url("./fonts/KIN668.TTF");
}

* {
  font-family: "KING", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>