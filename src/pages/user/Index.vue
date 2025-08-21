<template>
  <div class="row g-4">
    <div v-if="loading" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="col-md-4" v-for="user in users" :key="user.id">
      <CardViewUsers :user="user" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import CardViewUsers from '@/components/users/CardViewUsers.vue'
export default {
  components: {
    CardViewUsers,
  },
  setup() {
    const users = ref([])
    const loading = ref(true)
    function getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          users.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getUsers()
    return {
      users,
      loading,
    }
  },
}
</script>

<style></style>
