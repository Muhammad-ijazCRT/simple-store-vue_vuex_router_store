<template>
  <div class="container-fluid" style="padding: 0; margin: 0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Features</a> -->
              <router-link class="nav-link active" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Pricing</a> -->
              <router-link class="nav-link active" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/product">product</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarPage",
};
</script>

<style scoped></style>
