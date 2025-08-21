<template>
  <div class="row">
    <div v-if="loading" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="col-md-12">
      <CardViewPost :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CardViewPost from '@/components/posts/CardViewPost.vue'
export default {
  components: {
    CardViewPost,
  },
  setup() {
    const post = ref([])
    const loading = ref(true)
    const route = useRoute()

    function getUsers() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getUsers()
    return {
      post,
      loading,
    }
  },
}
</script>

<style></style>
