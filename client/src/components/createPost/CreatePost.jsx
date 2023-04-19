import './createPost.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const CreatePost = () => {
  return (
    <div className='createPost'>
        <div className="createPostWrapper">
            <div className="createTop">
                <img src="/assets/people/1.jpg" alt="" className="createProfileImg" />
                <input type="text" placeholder="What's in your mind John?" className="createInput" />
            </div>
            <hr className="createHr" />
            <div className="createBottom">
                <div className="createOptions">
                    <div className="createOption">
                        <AddPhotoAlternateIcon htmlColor="tomato" className="createIcon" />
                        <span className="createOptionText">Photo or Video</span>
                    </div>
                    <div className="createOption">
                        <LabelIcon className="createIcon" htmlColor="blue" />
                        <span className="createOptionText">Tag</span>
                    </div>
                    <div className="createOption">
                        <LocationOnIcon className="createIcon" htmlColor="green" />
                        <span className="createOptionText">Location</span>
                    </div>
                    <div className="createOption">
                        <EmojiEmotionsIcon className="createIcon" htmlColor="gold" />
                        <span className="createOptionText">Emotions</span>
                    </div>
                </div>
                <button className="createButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost