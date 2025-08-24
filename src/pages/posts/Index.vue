<template>
  <div class="row">
    <div v-if="noRespond" class="">
      {{ noRespond }}
    </div>
    <div class="col-12 mb-5">
      <RouterLink class="btn btn-primary" :to="{ name: 'creatPost' }">New Post +</RouterLink>
    </div>
    <div v-if="loading" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
      <CardViewPost :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import CardViewPost from '@/components/posts/CardViewPost.vue'
export default {
  components: {
    CardViewPost,
  },
  setup() {
    const posts = ref([])
    const loading = ref(true)
    const noRespond = 'Server is not Respond'
    function getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          posts.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          noRespond
        })
    }
    getPosts()
    return {
      posts,
      loading,
      noRespond,
    }
  },
}
</script>

<style></style>
