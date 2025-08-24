<template>
  <div class="card mb-3">
    <h5 class="card-header">{{ post.id }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.body }}
      </p>
      <router-link class="btn btn-primary" :to="{ name: 'idPosts', params: { id: post.id } }"
        >Show post</router-link
      >
      <RouterLink class="btn btn-primary ml-2" :to="{ name: 'editPost', params: { id: post.id } }"
        >edit post</RouterLink
      >
      <button @click="DeletPost" class="btn btn-warning ml-2">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

export default {
  props: {
    post: Object,
  },
  setup() {
    const route = useRoute()
    function DeletPost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: 'Post Deleted !',
            icon: 'success',
            draggable: true,
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    return {
      DeletPost,
    }
  },
}
</script>

<style></style>
