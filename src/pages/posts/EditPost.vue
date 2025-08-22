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
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
  components: {
    PostForm,
  },
  setup() {
    const route = useRoute()
    function CreatPost() {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          title: postform.title,
          body: postform.body,
          userId: 1,
        })
        .then(function (response) {
          Swal.fire({
            title: 'Post created !',
            icon: 'success',
            draggable: true,
          })
          console.log(response.data)
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    return { CreatPost }
  },
}
</script>

<style></style>
