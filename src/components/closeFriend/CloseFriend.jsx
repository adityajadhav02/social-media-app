import "./closeFriend.css"

const CloseFriend = ({user}) => {
  return (
    <li className="leftbarFriendItem">
        <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend