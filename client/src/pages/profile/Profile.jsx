import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import './profile.css';

const Profile = () => {

    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () =>{

        const res = await axios.get(`/users?username=${username}`)
        setUser(res.data)
        }

        fetchUser();
    }, [username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPic ? PF+user.coverPic : PF+"/noCover.jpg"} alt="" className="profileCoverImg" crossOrigin="anonymous" />
                            <img src={user.profilePic ? PF+user.profilePic : PF+"/noProfile.png"} alt="" className="profileUserImg" crossOrigin="anonymous" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>

                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user = {user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile