import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {

const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const handleLike = () =>{
    if(isLiked){
        setIsLiked(false);
        setLike(like-1);
    }
    else{
        setIsLiked(true);
        setLike(like+1);
    }
}
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopUser">
                    <img 
                        className="postPFP" 
                        alt = "pfp"
                        src={PF+Users.filter(u => u.id=== post.userId)[0].profilePicture} 
                    />
                    <span className="postUserName">{Users.filter(u => u.id=== post.userId)[0].username}</span>
                    <span className="postTime">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='dotIcon' />
                </div>
            </div>
            <div className="postMid">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.photo} alt="img"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like-icon.png" onClick={handleLike} className='likeIcon' alt="likeIcon" /> 
                    <img src="/assets/heart-icon.png" onClick={handleLike} className='likeIcon' alt="likeIcon" />
                    <span className="postLikeCounter">{like} people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentCounter">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post