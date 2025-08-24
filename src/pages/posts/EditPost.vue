<template>
  <div class="container">
    <div class="col-md-12 mb-5">
      <h2>Edit the post</h2>
    </div>
    <div v-if="pageLoading" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="col-md-6">
      <PostForm @formData="EditPost" :btn-loading="loading" :post="post" btn-text="Edit post" />
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
export default {
  components: {
    PostForm,
  },
  setup() {
    const loading = ref(false)
    const route = useRoute()
    const post = ref({})
    onMounted(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((res) => {
          post.value = res.data
        })
        .catch((err) => console.log(err))
    })
    function EditPost(formData) {
      loading.value = true
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function (response) {
          Swal.fire({
            title: 'Post updated !',
            icon: 'success',
            draggable: true,
          })
          console.log(response.data)
          loading.value = false
          post.value = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    return { EditPost, post, loading }
  },
}
</script>

<style></style>
