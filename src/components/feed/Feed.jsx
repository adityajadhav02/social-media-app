import './feed.css';
import CreatePost from '../createPost/CreatePost';
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <CreatePost />
        <Post />
        <Post />
        <Post />
        </div>
    </div>
  )
}

export default Feed