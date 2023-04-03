import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Filter from './Filter';

const Home = () => {
  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteBlog = (id) => {
    dispatch({ type:"DELETE_BLOG", payload: id})
    toast.success("Blog Deleted Successfully")
  }
  const [search, setSearch] = useState("");
  const [orderby, setOrderBy] = useState("");
  const searchVal = (data) =>{
    setSearch(data);
  }
  const orderByVal = (data) =>{
    setOrderBy(data);
  }
  useEffect(()=>{
    if(orderby === "1"){
        blogs.sort((a,b) => a.createdAt - b.createdAt);
    }else if(orderby === "2"){
        blogs.sort((a,b) => b.totalLikes - a.totalLikes);
    }else{
      blogs.sort();
    }
    setOrderBy("")
  }, [orderby,blogs])
 
  return (
    <div class="container mt-4 ms-5">
         <Filter filterValue = {searchVal} orderBy = {orderByVal}/>
         <Link to="/add-blog" class="btn btn-success mt-2">New Post</Link>
         {
            blogs.filter((blog)=>{
                return search.toLowerCase() === "" ? blog : blog.title.toLowerCase().includes(search.toLowerCase().trim());
            }).map((blog,id)=>(
                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="card-title">{blog.title}</h4>
                        <div class="card-subtitle text-muted mb-2">
                            {blog.createdAt.toLocaleDateString()}
                        </div>
                        <div class="card-text mb-2">{blog.categories}</div>
                        <div class="card-text mb-2"><i><b>{blog.totalLikes}</b> people have like this post</i></div>
                        <Link to={`/show-blog/${blog.id}`} class="btn btn-primary me-2">Read More</Link>
                        <Link to={`/edit-blog/${blog.id}`} class="btn btn-info me-2" >Edit</Link>
                        <button type="button" onClick={() => deleteBlog(blog.id)} class="btn btn-danger">Delete</button>
    
                    </div>
                </div>
            ))
         }
    </div>
  )
}

export default Home