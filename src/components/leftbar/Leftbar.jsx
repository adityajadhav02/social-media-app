import './leftbar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className="leftbarList">
        <li className="leftbarListItem">
          <RssFeedIcon className="leftbarIcon"/>
          <span className="listItemText">Feed</span>
        </li>
        <li className="leftbarListItem">
          <ChatIcon className="leftbarIcon"/>
          <span className="listItemText">Chats</span>
        </li>
        <li className="leftbarListItem">
          <PlayCircleIcon className="leftbarIcon"/>
          <span className="listItemText">Videos</span>
        </li>
        <li className="leftbarListItem">
          <GroupsIcon className="leftbarIcon"/>
          <span className="listItemText">Groups</span>
        </li>
        <li className="leftbarListItem">
          <BookmarkIcon className="leftbarIcon"/>
          <span className="listItemText">Bookmarks</span>
        </li>
        <li className="leftbarListItem">
          <QuestionMarkIcon className="leftbarIcon"/>
          <span className="listItemText">Questions</span>
        </li>
        <li className="leftbarListItem">
          <WorkIcon className="leftbarIcon"/>
          <span className="listItemText">Jobs</span>
        </li>
        <li className="leftbarListItem">
          <EventIcon className="leftbarIcon"/>
          <span className="listItemText">Events</span>
        </li>
        <li className="leftbarListItem">
          <SchoolIcon className="leftbarIcon"/>
          <span className="listItemText">Courses</span>
        </li>
        </ul>

        <button className="leftbarBtn">
          Show More
        </button>
        <hr className="leftbarHr" />

        <ul className="leftbarFriendList">
          <li className="leftbarFriendItem">
            <img src="/assets/people/1.jpg" alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">John Doe</span>
          </li>
          <li className="leftbarFriendItem">
            <img src="/assets/people/1.jpg" alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">John Doe</span>
          </li>
          <li className="leftbarFriendItem">
            <img src="/assets/people/1.jpg" alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar