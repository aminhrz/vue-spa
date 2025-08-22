<template>
  <div class="container">
    <div class="col-md-12 mb-5">
      <h2>Creat a new Post</h2>
    </div>
    <div class="col-md-6"><PostForm @formData="CreatPost" :btn-loading="loading" /></div>
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import { ref } from 'vue'
export default {
  components: {
    PostForm,
  },
  setup() {
    const loading = ref(false)
    function CreatPost(formData) {
      loading.value = true
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: formData.title,
          body: formData.body,
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
    return { CreatPost, loading }
  },
}
</script>

<style></style>
