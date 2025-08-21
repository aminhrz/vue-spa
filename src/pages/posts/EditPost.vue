<template>
  <div class="container">
    <div class="col-md-12 mb-5">
      <h2>Edit the post</h2>
    </div>
    <div class="col-md-6"><PostForm /></div>
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue'
export default {
  components: {
    PostForm,
  },
  setup() {},
}
</script>

<style></style>
