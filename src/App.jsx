import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import CreateBlog from './pages/CreateBlog/CreateBlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllBlogs/>}/>
        <Route path='/singleblog/:id' element={<SingleBlog/>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        {/* <Route path='/editblog' element={<EditBlog/>}/> */}

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
