import React from "react";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import data from "./data"

export default function App() {
    const blogData = data.map(blog=> {
        return(
        <Blog 
        key={blog.id} 
        {...blog}
        />
    )
    })
  return (
     <div className="blogs-list">
            <Navbar />
            {blogData}
        </div>
  )
}