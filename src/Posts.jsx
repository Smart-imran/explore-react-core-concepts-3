import { useEffect } from "react";
import { useState } from "react"
import Post from "./Post";




export default function Posts() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data))

    },[])

    return (
        <div>
            <h3>Posts: {posts.length} </h3>
            {
                posts.map( post => <Post post={post}></Post>)
            }
        </div>
    )
}


/* 

1. create a useState to store a data
2. Create use effect with no dependencies
3. use fetch to load data
*/