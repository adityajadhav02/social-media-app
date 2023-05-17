import './feed.css';
import CreatePost from '../createPost/CreatePost';
import Post from '../post/Post'
import {useState, useEffect } from 'react';
import axios from "axios";


const Feed = ({username}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () =>{

      const res = username 
       ?  await axios.get("/posts/profile/"+username) 
       :  await axios.get("/posts/timeline/642c3090b39dce64c82a43de")
      setPosts(res.data)
    }

    fetchPosts();
  }, [username])
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <CreatePost />
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
        </div>
    </div>
  )
}

export default Feed