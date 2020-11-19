<template>
  <div>
    <b-navbar class="navbar-light" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navnav">
          <b-nav-item class="nav-link" href="#">Coins</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Exchanges</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <img id="logo" src="../assets/logo.png" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="navbar-nav">
          <input
            id="search-form"
            type="text"
            size="sm"
            class="mr-sm-0"
            placeholder="Search"
           
          />
          <b-button size="sm" type="submit" id="search-btn"
            ><i class="material-icons">search</i></b-button
          >
        </b-navbar-nav>
        <b-navbar-nav class="navbar-nav">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em class="nav-link2">Portfolio</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign in</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#logo {
  width: 250px;
  /* margin-left: 5%;
  margin-right: 5%; */
  margin-bottom: -8px;
}
.navbar {
  display: flex;
  width: 80%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid black;
}
#nav-collapse {
  justify-content: space-evenly;
  width: 10%;
}
.navbar-nav .nav-link2 {
  color: #3ef531;
  outline: 0cm;
  padding: 0px;
}
.navbar-expand-lg {
  align-items: flex-end;
}
.navbar-light .navbar-nav .nav-link {
  color: #3ef531;
  padding: 0px;
}
.nav-link2 .navbar-nav  {
 padding: 0px;
}
#search-btn {
  background: none;
  color: whitesmoke;
  border: none;
  display: flex;
  align-items: flex-end;
  
}
input[type="text"] {
  width: 60px;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 12px;
  color: whitesmoke;
  background: none;
  padding: 12px 12px 8px 4px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 60%;
  outline: 0cm;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #3ef531;
  opacity: 1; /* Firefox */
  font-size: 15px;
  outline: 0cm;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #3ef531;
  font-size: 12px;
  outline: 0cm;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #3ef531;
  font-size: 12px;
  outline: 0cm;
}
</style>
