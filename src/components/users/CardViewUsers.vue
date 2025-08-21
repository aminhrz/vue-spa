<template>
  <div class="card mb-4">
    <div class="card-header">
      <router-link :to="{ name: 'idUsers', params: { id: user.id } }">{{ user.name }}</router-link>
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
