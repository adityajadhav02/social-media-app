import './topbar.css';
import { Search, Chat, Person, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
const Topbar = () => {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{textDecoration:"none"}}>
          <span className="logo">socialsphere</span>
        </Link>
      </div>
      <div className='topbarMid'>
          <div className="searchbar">
            <Search className='searchbarIcon' />
            <input placeholder='Search for friends, posts or topics...' className="searchText" />
          </div>
      </div>
      <div className='topbarRight'>
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIcon">
            <Chat />
            <span className="topbarIconBadge">7</span>
          </div>
          <div className="topbarIcon">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}> 
          <img src={user.profilePic ? PF+user.profilePic: PF+"noProfile.png"} alt="" className="topbarPFP" /> 
        </Link>
      </div>
    </div>
  )
}

export default Topbar