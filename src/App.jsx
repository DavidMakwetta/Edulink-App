import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import MyProfile from './MyProfile'; 
import Courses from './Courses'; 
import Assignments from './Assignments'; 

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main>
          <Routes>
            <Route path="/teacher/dashboard" element={<Home />} />
            <Route path="/teacher/profile" element={<MyProfile />} />
            <Route path="/teacher/courses" element={<Courses />} />
            <Route path="/teacher/assignments" element={<Assignments />} />
            <Route path="/signout" element={<div>Sign Out</div>} />
            {}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
