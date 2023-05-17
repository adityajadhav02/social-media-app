import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'

const Post = ({post}) => {

const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);
const [user, setUser] = useState({});

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(() => {
    const fetchUser = async () =>{

      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }

    fetchUser();
  }, [post.userId])

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
                    <Link to={`profile/${user.username}`}>
                        <img 
                            className="postPFP" 
                            alt = "pfp"
                            src={user.profilePicture || PF+"noProfile.png"} 
                        />
                    </Link>
                    <span className="postUserName">{user.username}</span>
                    <span className="postTime">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='dotIcon' />
                </div>
            </div>
            <div className="postMid">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="img"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like-icon.png" onClick={handleLike} className='likeIcon' alt="likeIcon" /> 
                    <img src="/assets/heart-icon.png" onClick={handleLike} className='likeIcon' alt="likeIcon" />
                    <span className="postLikeCounter">{post.likes.length} people liked this</span>
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