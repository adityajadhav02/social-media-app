import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jane Doe</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map(u => (
        <Online key={u.id} user={u} />
        
      ))}
      </ul>
    </>
  }

  const ProfileRightbar = () => {

    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          
        </div>
        <h4 className="righbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/people/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName">Kenny James</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/people/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName">Kenny James</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/people/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName">Kenny James</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar /> }
    </div>
    </div>
  )
}

export default Rightbar