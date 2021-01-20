<template>
  <div v-for="post in posts" v-bind:key="post.id" class="post-list">
      <SinglePost v-bind:post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    components:{
        SinglePost
    },
    props:{
        posts: Array
    },

    setup(props){
        console.log(props.posts)

        onMounted(() => {
            console.log('mounted')
        })
        onUnmounted(() => {
            console.log('unmounted')
        })
        onUpdated(() => {
            console.log('updated')
        })
    },
}
</script>

<style>

</style>