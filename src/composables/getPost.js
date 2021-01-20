import { ref } from 'vue'
import getPosts from './getPosts'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post = ref(null)
      const error = ref(null)

      const load = async () => {
        try{
          //simulate delay
          await new Promise(resolve => {
            setTimeout(resolve, 2000);
          })

          /*
          const url = `http://localhost:3000/posts/${id}`
          let data = await fetch(url)
          console.log(data)
  
          if(!data.ok){
            throw Error(`no post with id: ${id}`)
          }
          
        //set data to value
          post.value = await data.json()
          */

          let res = await projectFirestore.collection('posts').doc(id).get()
          //console.log(res)
          //console.log(res.data())

          if(!res.exists){
            throw Error(`no post with id ${id} exists`)
          }

          post.value = {
            ...res.data(),
            id: res.id
          }
          console.log(post.value)
        }
        catch(err){
          console.log(err)
          //set error equal to throw Error
          error.value = err.message
          console.log(error.value)
        }
      }

      //return so we have access
      return{
          post,
          error,
          load
      }
}

export default getPost