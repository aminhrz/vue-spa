<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label for="titlesec" class="form-label">Title : </label>
      <input
        name="titlesec"
        type="text"
        class="form-control"
        placeholder="Enter the title"
        v-model.lazy.trim="postform.title"
      />
      <div class="form-text text-danger">{{ postform.errortitletext }}</div>
    </div>
    <div class="mb-3">
      <label for="bodysec" class="form-label">Body : </label>
      <textarea
        name="bodysec"
        class="form-control"
        rows="5"
        placeholder="Enter the body"
        v-model.lazy.trim="postform.body"
      ></textarea>
      <div class="form-text text-danger">{{ postform.errorbodytext }}</div>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="loading">
      <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
      Creat
    </button>
  </form>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

export default {
  setup() {
    const loading = ref(false)
    const postform = reactive({
      title: '',
      body: '',
      errortitletext: '',
      errorbodytext: '',
    })

    function validate() {
      if (postform.title === '') {
        postform.errortitletext = 'This field is requarid'
      } else {
        postform.errortitletext = ''
      }
      if (postform.body === '') {
        postform.errorbodytext = 'This field is requarid'
      } else {
        postform.errorbodytext = ''
      }
      if (postform.title !== '' && postform.body !== '') {
        loading.value = true
        CreatPost()
      }
    }
    function CreatPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
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
    return {
      postform,
      validate,
      loading,
    }
  },
}
</script>

<style></style>
