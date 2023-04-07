import './feed.css';
import CreatePost from '../createPost/CreatePost';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <CreatePost />
        </div>
    </div>
  )
}

export default Feed