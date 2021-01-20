<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <div>
      <PostList v-bind:posts="posts" />
      </div>
      <TagCloud v-bind:posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <!--
    <button v-on:click="showPosts = !showPosts">toggle posts</button>
    <button v-on:click="posts.pop()">delete a post</button>
    -->
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner.vue'
import TagCloud from '@/components/TagCloud.vue'

export default {
  name: 'Home',
  components:{
    PostList,
    Spinner,
    TagCloud
  },
  setup(){
    // pull out values with destructering since we return
    const { posts, error, load } = getPosts()

    load()

    //const showPosts = ref(true)

    return{
      posts,
      //showPosts,
      error
    }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>