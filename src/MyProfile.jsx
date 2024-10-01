import React, { useState } from 'react';
import './MyProfile.css'; 

function MyProfile() {
  const [profile, setProfile] = useState({
    idNo: '',
    email: '',
    surname: '',
    otherNames: '',
    telephone: '',
    sex: '',
    dateOfBirth: '',
    nationality: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <button className="edit-button" onClick={handleEditClick}>
        {isEditing ? 'Cancel' : 'Edit Details'}
      </button>

      {isEditing ? (
        <form className="profile-form">
          {Object.keys(profile).map((key) => (
            <div className="form-group" key={key}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
              {key === 'sex' ? (
                <select name={key} value={profile[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <input type={key === 'dateOfBirth' ? 'date' : 'text'} name={key} value={profile[key]} onChange={handleChange} />
              )}
            </div>
          ))}
        </form>
      ) : (
        <div className="profile-details">
          <h2>Profile Details</h2>
          <ul>
            {Object.keys(profile).map((key) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {profile[key] || 'N/A'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
