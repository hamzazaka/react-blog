import React from 'react'

export default function bloglist({myblogs,title}) {

    return (
        <div>
            <h1>{title}</h1>
             {myblogs.map((bb)=>(
               <div className="blog-preview" key={bb.id}>
                   <h2>{bb.title}</h2>
                   <p> Writtern by {bb.author}</p>
                   
               </div>
           ))}
        </div>
    )
}
