import React, { useState } from 'react';
import './Courses.css'; 

function Courses() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    console.log('File to upload:', file);
  
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>

      <div className="course">
        <h2>Mathematics</h2>
        <p>
          Mathematics is the study of numbers, shapes, and patterns. It is essential for understanding the world around us and is used in various fields such as science, engineering, economics, and more.
        </p>
        <form onSubmit={handleUpload} className="upload-form">
          <input 
            type="file" 
            accept=".pdf, video/*" 
            onChange={handleFileChange} 
          />
          <button type="submit">Upload Notes</button>
        </form>
      </div>

      <div className="course">
        <h2>Science</h2>
        <p>
          Science is the systematic study of the physical and natural world through observation and experimentation. It encompasses various fields, including biology, chemistry, and physics.
        </p>
        <form onSubmit={handleUpload} className="upload-form">
          <input 
            type="file" 
            accept=".pdf, video/*" 
            onChange={handleFileChange} 
          />
          <button type="submit">Upload Notes</button>
        </form>
      </div>

      <div className="course">
        <h2>English</h2>
        <p>
          English is a global language that plays a key role in communication, education, and business. It encompasses grammar, literature, and composition.
        </p>
        <form onSubmit={handleUpload} className="upload-form">
          <input 
            type="file" 
            accept=".pdf, video/*" 
            onChange={handleFileChange} 
          />
          <button type="submit">Upload Notes</button>
        </form>
      </div>
    </div>
  );
}

export default Courses;
