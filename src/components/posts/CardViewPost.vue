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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style></style>
