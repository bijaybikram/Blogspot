import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import "./SingleBlog.css"

const SingleBlog = () => {

    const {id} = useParams()

    //see full blog
    const [blog, setBlog] = useState()

    
    const fetchBlog = async () => {
        const response = await axios.get("https://64ee094a1f87218271423747.mockapi.io/blogs/" + id)
        if( response.status == 200) {
            setBlog(response.data)
        }else{
            alert("Something went wrong!")
        }
    }
useEffect(() => {
    fetchBlog()
}, [])

  return (
    <>
    <Navbar/>
        <div className="blog-post">
            <div className='avatar'>
                <img src={blog?.avatar} alt="Blog Image"/>
            </div>

            <div>
                <h2 className="blog-title">{blog?.title}</h2>
                <p className="blog-description">{blog?.description}</p>
            </div>
            
        
    </div>
    </>
  )
}

export default SingleBlog