import React from 'react';
import { Link } from 'react-router-dom';
import { BsGrid1X2Fill, BsPersonCircle, BsFileEarmarkText, BsPeopleFill, BsDoorOpen } from 'react-icons/bs';

function Sidebar({ openSidebarToggle }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>Teacher Dashboard</div>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/teacher/dashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/teacher/profile">
            <BsPersonCircle className='icon' /> My Profile
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/teacher/courses">
            <BsFileEarmarkText className='icon' /> Courses
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/teacher/assignments">
            <BsPeopleFill className='icon' /> Assignments
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/signout">
            <BsDoorOpen className='icon' /> Sign Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
