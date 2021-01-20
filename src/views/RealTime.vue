<template>
  <h1>Real-time Listeners</h1>
  <div v-for="post in posts" v-bind:key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import { ref } from 'vue'

export default {
  setup() {
    const posts = ref([])

    projectFirestore.collection('posts')
    .orderBy('createdAt', 'desc')
    //get inital snapshot and new snapchat every time the collection changes
    .onSnapshot((snapshot) => {
        //console.log('snapshot', snapshot)

        let docs = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
        console.log('docs', docs)
        posts.value = docs
    })

    return{
        posts,
    }
  }
}
</script>

<style>
</style>