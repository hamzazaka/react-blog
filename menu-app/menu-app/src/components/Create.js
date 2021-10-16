import React, { useState } from 'react'

export default function Create() {

    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('');



    const handleSubmit=(e)=>{
       e.preventDefault();
       const blog={title,body,author};
    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title :</label>
                <input type="text" required value={title} 
                onChange={(e)=>setTitle(e.target.value)} />

                <label>Blog Body</label>
                <textarea name="" id="" cols="30" rows="10" value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>

                <label >Blog Author :</label>
                <input type="text" required value={author}
                onChange={(e)=>setAuthor(e.target.value)}  />

                <button >Add Blog</button>
                
            </form>
            <h2>Your Recent Blogs</h2>

              <h2>{}</h2>
            
        </div>

        
    )
}
