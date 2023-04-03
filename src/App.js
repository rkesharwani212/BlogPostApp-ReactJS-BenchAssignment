import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShowBlog from './components/ShowBlog';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
        </Routes>
        <Routes>
          <Route path='/add-blog' element = {<AddBlog/>} />
        </Routes>
        <Routes>
          <Route path='/edit-blog/:id' element = {<EditBlog/>} />
        </Routes>
        <Routes>
          <Route path='/show-blog/:id' element = {<ShowBlog/>} />
        </Routes>
    </div>
  );
}

export default App;
