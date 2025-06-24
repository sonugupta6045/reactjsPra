import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/posts/${$id}`}>
        <div className='w-full bg-gray-200 rounded-xl p-4'>
            <div className='w-full justify-centermb-4'>
                <img src={appwriteService.getfilePreview(featuredImage)} alt={title} className='rounded-xl' />

            </div>
            <h2 className='text-xl font-semibold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
