<template>
  <div class="row g-4">
    <div v-if="loading" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="col-md-12">
      <CardViewUsers :user="user" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CardViewUsers from '@/components/users/CardViewUsers.vue'
export default {
  components: {
    CardViewUsers,
  },
  setup() {
    const user = ref([])
    const loading = ref(true)
    const route = useRoute()

    function getUsers() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getUsers()
    return {
      user,
      loading,
    }
  },
}
</script>

<style></style>
