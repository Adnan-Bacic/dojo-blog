<template>
  <div v-if="error">
      {{ error }}
  </div>
  <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button v-on:click="deletePost" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
    props: {
        id: Number
    },
    components:{
      Spinner,
    },
    setup(props){
      const route = useRoute()
      //console.log('route', route)
      const router = useRouter()

        //const { post, error, load } = getPost(props.id)
        const { post, error, load } = getPost(route.params.id)
        load()

        const deletePost = async () => {
          await projectFirestore.collection('posts')
          .doc(props.id)
          .delete()

          router.push({ name: 'Home' })
        }

        return{
            post,
            error,
            deletePost
        }
    }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>