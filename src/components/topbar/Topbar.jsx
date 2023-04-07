import './topbar.css';
import { Search, Chat, Person, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className="logo">facebook</span>
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

        <img src="/assets/people/2.jpg" alt="" className="topbarPFP" />
      </div>
    </div>
  )
}

export default Topbar