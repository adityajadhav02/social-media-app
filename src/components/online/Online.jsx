import './online.css'

const Online = ({user}) => {
  return (
    <div className='onlineContainer'>
        <li className="rightbarFriend">
          <div className="rightbarPFPContainer">
            <img src={user.profilePicture} alt="friend" className="rightbarPFP" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUser">{user.username}</span>
        </li>
    </div>
  )
}

export default Online