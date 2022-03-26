<template>
  <div id="app">
    <div class="container-fluid">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-bottom: 20px;
}

li {
  list-style-type:none;
}

li.nav-item {
  text-decoration: none;
  color: #FFFFFF;
}

a {
  color: #FFFFFF;
}

a.nav-link {
  color: #000000;
}


a:hover.nav-link {
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}

</style>
