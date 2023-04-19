import './online.css'

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='onlineContainer'>
        <li className="rightbarFriend">
          <div className="rightbarPFPContainer">
            <img src={PF+user.profilePicture} alt="friend" className="rightbarPFP" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUser">{user.username}</span>
        </li>
    </div>
  )
}

export default Online