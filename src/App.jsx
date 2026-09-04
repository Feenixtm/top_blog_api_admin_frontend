import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>

      <main className='p-4'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-blog-post' element={<CreateBlog/>}></Route>
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
