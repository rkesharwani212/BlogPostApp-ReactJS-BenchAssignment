import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const ShowBlog = () => {

  const {id} = useParams(); 
 
  const blogs = useSelector((state) => state);
  const blog = blogs.find(blog => blog.id === parseInt(id));

  const [like,setLike] = useState(false);
  const dispatch = useDispatch();
  const handleLike = ()=>{
    setLike(!like);
  }
  const handleLikeCount = (id) => {
    like?dispatch({type: "ADD_LIKES", payload:id}):dispatch({type: "DISLIKE", payload:id})
  }
 
  return (
    <div class="container mt-3 ms-5">
        <h1 class="mb-1">{blog.title}</h1>
        <div class="text-muted mb-2">
            {blog.createdAt.toLocaleDateString()}
        </div>
        <Link to="/" class="btn btn-secondary me-2">All Post</Link>
        <Link to={`/edit-blog/${blog.id}`}
        class="btn btn-info me-2" >Edit</Link>
        <button type='button' class="btn btn-dark me-1" style={like?{color:"#2610EF"}:{}} onClick={()=>handleLikeCount(blog.id)} onMouseDown={handleLike}>Like
            <i class="fa fa-thumbs-up  ms-1 me-1"></i></button>
        <div>
            {blog.content}
        </div>
    </div>
  )
}

export default ShowBlog