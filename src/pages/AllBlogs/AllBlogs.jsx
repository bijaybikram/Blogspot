import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import "./AllBlogs.css"
import Navbar from '../../components/Navbar/Navbar'



const AllBlogs = () => {

    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])


    const fetchBlogs = async(data) => {
        const response = await axios.get("https://64ee094a1f87218271423747.mockapi.io/blogs")
        console.log(response)
        if(response.status == 200){
            setBlogs(response.data)
        }
        console.log("data")
    }
    
    useEffect(()=> {
        fetchBlogs()
    }, [])



  return (
    <>
    <Navbar/>
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly"}}>

        {
            blogs.map((blog) =>{
                return(
                <div className="card" key={blog.id}>
                <img src={blog.avatar} alt="Avatar"/>
                <div className="card-content">
                    <h2  className="card-title">{blog.title}</h2>
                    <p className="card-description">{blog.description}</p>
                    <p className="card-description">{blog.createdAt}</p>
        
                </div>
                <p className='see-more' onClick={() => navigate(`/singleblog/${blog.id}`)} style={{textAlign: "center"}}>See more..</p>
                </div>
                )
            })
        }

    </div>
    </>
    
  )
}

export default AllBlogs