import {useState,useEffect} from 'react';
import Bloglist from './blog';

export default function Home() {
     const [myblogs,setmyBlogs]=useState(null);
     const [isPending,setisPending]=useState(true);

   


    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
           return res.json()
        })
        .then((data)=>{
            console.log(data);
            setmyBlogs(data);
            setisPending(false)
        })
    },[])

    return (
        <div className="home">
            {isPending && <div>Loading... </div>}
          {myblogs && <Bloglist myblogs={myblogs}
          title={'All blogs'}/> }
          
        </div>
    )
}
