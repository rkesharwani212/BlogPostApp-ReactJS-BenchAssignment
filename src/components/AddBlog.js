import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const AddBlog = () => {
  
  const [title,setTitle] = useState("");
  const [categories,setCategories] = useState("");
  const [content, setContent] = useState("");
  const createdAt = new Date();
  const totalLikes = 0;

  const blogs = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !categories || !content){
        return toast.warning("Please Fill in all the details");
    }

    const data = {
        id: blogs.length,
        title,
        categories,
        content,
        totalLikes,
        createdAt
    }
    dispatch({type:"ADD_BLOG", payload: data})
    toast.success("New Blog Added Successfully!!");
    navigate('/');

  };


  return (
    <div className ="container mt-3 ms-5">
        <h1 className = "mb-2">New Blog</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="title">Title</label>
                <input 
                    type="text"
                    value={title}
                    onChange = {(e)=> setTitle(e.target.value)}
                    required
                    className="form-control" />
            </div>
            <div className="form-group">
                <label for="categories">Categories</label>
                <textarea
                    value={categories}
                    onChange = {(e) => setCategories(e.target.value)}
                    required
                    className="form-control">
                
                </textarea>
            </div>
            <div className="form-group">
                <label for="content">Content</label>
                <textarea
                    value={content}
                    onChange = {(e) => setContent(e.target.value)}
                     required
                    className="form-control">
                    
                </textarea>
            </div>
            <div className='mt-2'>
                <Link to = "/" className="btn btn-secondary me-1">Cancel</Link>
                <button type="submit" className="btn btn-primary">Save</button>
            </div> 
        </form>
    </div>
  )
}

export default AddBlog