import './createPost.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';


const CreatePost = () => {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();

    const [file, setFile] = useState(null);

    const submitHandler = async (e) =>{
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value    
        }
        if(file){
            const data = new FormData();
            const fileName = file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = fileName;
            console.log(data);
            try{
                console.log(data);
                await axios.post("/upload", data);
                window.location.reload();
            }catch(err){
                console.log(err)
            }
        }

        try{
           await axios.post("/posts", newPost)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='createPost'>
        <div className="createPostWrapper">
            <div className="createTop">
                <img src={user.profilePic ? PF+ user.profilePic : PF+"noProfile.png"} alt="" className="createProfileImg" crossOrigin='anonymous'/>
                <input type="text" placeholder={"What's in your mind "+user.username+"?"} className="createInput" ref={desc}/>
            </div>
            <hr className="createHr" />
            {file && (
                <div className="createImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="createImg" />
                    <CancelIcon className="createCancelImg" onClick={() => setFile(null)} />
                </div>
            )}
            <form className="createBottom" onSubmit={submitHandler}>
                <div className="createOptions">
                    <label htmlFor="file" className="createOption">
                        <AddPhotoAlternateIcon htmlColor="tomato" className="createIcon" />
                        <span className="createOptionText">Photo or Video</span>
                        <input 
                            style={{"display":"none"}}
                            type="file" 
                            id="file" 
                            accept='.png,.jpg,.jpeg'  
                            onChange={(e) =>{
                                setFile(e.target.files[0]);
                            }}/>
                    </label>
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
                <button className="createButton" type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePost