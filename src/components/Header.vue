<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Coins</b-nav-item>
          <b-nav-item href="#">Exchanges</b-nav-item>
        </b-navbar-nav>
        <img id="logo" src="../assets/logo.png" />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Portfolio</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
#logo {
  width: 250px;
  margin-left: 10%;
  margin-right: 10%;

  /* -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  align-self: center;
  -moz-box-align: center; */
}
.navbar {
  width: 80%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
#nav-collapse {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  border-bottom: 1px solid black;
}
</style>
