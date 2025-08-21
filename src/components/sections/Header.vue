<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Show Post</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <router-link to="/" class="nav-link">Home</router-link>
                  <router-link to="/users" class="nav-link">Users</router-link>
                  <router-link to="/posts" class="nav-link">Posts</router-link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style>
.router-link-active {
  border-bottom: 1px solid red;
}
</style>
