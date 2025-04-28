import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // optional for styling

const AdminProfile = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 profilePage">
      <div className="p-4 rounded w-50 border profileCard">
        <h2 className="mb-4 text-center">Admin Profile</h2>

        {admins.map((admin, index) => (
          <div key={index}>
            <div className="mb-3">
              <strong>Name:</strong> {admin.name || "Project Manager"}
            </div>
            <div className="mb-3">
              <strong>Email:</strong> {admin.email}
            </div>
            <div className="mb-3">
              <strong>Role:</strong> {admin.role || "Super Administrator"}
            </div>
            <div className="mb-3">
              <strong>Member Since:</strong> {admin.createdAt ? new Date(admin.createdAt).toLocaleDateString() : "Unknown"}
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary rounded-0">Your Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
