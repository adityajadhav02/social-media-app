import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopUser">
                    <img className="postPFP" src="/assets/people/1.jpg" />
                    <span className="postUserName">John Doe</span>
                    <span className="postTime">35 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='dotIcon' />
                </div>
            </div>
            <div className="postMid">
                <span className="postText">Hello, this is my first post.</span>
                <img className="postImg" src="/assets/3.jpg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like-icon.png" className='likeIcon' /> 
                    <img src="/assets/heart-icon.png" className='likeIcon' />
                    <span className="postLikeCounter">45 people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentCounter">10 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post