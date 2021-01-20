import { ref } from 'vue';
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([
        /*
        { id: 1, title: 'title1', body: 'body1' },
        { id: 2, title: 'title2', body: 'body2' },
        { id: 3, title: 'title3', body: 'body3' },
        */
      ])
      const error = ref(null)
      const load = async () => {
        try{
          //simulate delay
          await new Promise(resolve => {
            setTimeout(resolve, 2000);
          })
          /*
          const url = 'http://localhost:3000/posts'
          let data = await fetch(url)
          console.log(data)
  
          if(!data.ok){
            throw Error('no data available')
          }
  
        //set data to value
          posts.value = await data.json()
          */

          const res = await projectFirestore.collection('posts')
          .orderBy('createdAt', 'desc')
          .get()
          
          posts.value = res.docs.map(doc => {
            //console.log(doc.data())

            return {
              ...doc.data(),
              id: doc.id
            }
          })
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
          posts,
          error,
          load
      }
}

export default getPosts