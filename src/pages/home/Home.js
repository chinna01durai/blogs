import React, { useEffect, useState } from "react";
import "./Home.css";
import Post from "../../components/post/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchpost = async () => {
      const response = await  fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const posts = await response.json();

      if (response.ok) {
        setPosts(posts);
      }
    };

    fetchpost();
  },[]);
  return (
   <>
   {
    posts && posts.map((res,key)=>{
        return (<div>
          <Post posts={res}/>
        </div>)
    })
   }
   </>
  );
}
