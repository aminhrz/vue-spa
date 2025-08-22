<template>
  <div class="card mb-4">
    <div class="card-header">
      <template v-if="$route.name === 'idUsers' && $route.params.id == user.id">
        <h5>{{ user.name }}</h5>
      </template>
      <template v-else>
        <router-link :to="{ name: 'idUsers', params: { id: user.id } }">
          {{ user.name }}
        </router-link>
      </template>
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ user.username }}</li>
      <li class="list-group-item">{{ user.email }}</li>
      <li class="list-group-item">{{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
}
</script>

<style></style>
