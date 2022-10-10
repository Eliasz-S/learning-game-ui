<template>
  <form id="signin" method="POST" action="#" autocomplete="off">
    <input
      class="login-input"
      type="text"
      id="user"
      name="user"
      placeholder="Login"
    />
    <input
      class="login-input"
      type="password"
      id="pass"
      name="pass"
      placeholder="Password"
    />
    <input
      class="login-input"
      type="password"
      id="repeat-pass"
      name="pass"
      placeholder="Repeat password"
    />
    <input
      class="login-input"
      type="password"
      id="email"
      name="pass"
      placeholder="E-mail address"
    />
    <button type="submit">&#xf0da;</button>
    <p>
      Already have an account?
      <router-link to="/login" class="login-link"> Login </router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "SignUpFormComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css");

* {
  font-family: "Open Sans", "sans-serif", "FontAwesome";
}
::placeholder {
  color: rgb(255, 255, 255);
  font-style: italic;
  opacity: 1;
}
.login-input:focus::-webkit-input-placeholder {
  color: transparent;
}
#signin {
  height: 90px;
  width: 300px;
  border-radius: 8px;
  position: relative;
}
#signin input:first-of-type {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
#signin input:last-of-type {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
#signin input[type="text"],
#signin input[type="password"],
#signin button[type="submit"] {
  background: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(25, 1, 75);
  color: rgb(255, 255, 255);
}
#signin input[type="text"],
#signin input[type="password"] {
  position: relative;
  display: block;
  width: 280px;
  height: 45px;
  border: 0;
  border-bottom: 2px solid;
  outline: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
}
#signin input[type="text"]:focus,
#signin input[type="password"]:focus {
  color: rgb(255, 255, 255);
}
#signin button[type="submit"] {
  display: block;
  position: absolute;
  width: 52px;
  height: 52px;
  color: rgb(255, 255, 255);
  border-radius: 50px;
  outline: 0;
  z-index: 2;
  top: 65%;
  left: 90%;
  border: 6px solid rgb(255, 255, 255);
  font-size: 25px;
  text-indent: 0px;
  padding-left: 9px;
  padding-bottom: 3px;
  text-align: center;
}
#signin button[type="submit"]:hover {
  color: rgb(237, 13, 24);
  border: 6px solid rgb(237, 13, 24);
  cursor: pointer;
}
#signin p {
  color: rgb(79, 85, 97);
  padding: 0 20px;
  font-weight: 700;
  font-size: 12px;
  margin: 5px 0 0 0;
}
.login-link {
  color: rgb(111, 119, 135);
  text-decoration: none;
}
.login-link:hover {
  border-bottom: 1px solid;
}
</style>
