import React,{useState,useEffect, use} from 'react'
import { Container, Postcard } from '../components'
import appwriteService from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPost([]).then((posts)=>{
        if(posts){
            setPosts(posts.docments)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {posts.map((post) => (
                <div className='w-full p-2w-1' key={post.$id}> 
                <Postcard key={post.$id} post={post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost
