"use client";
// components/UserProfile.js
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  // Replace this with your actual user profile data
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user")).result;
    console.log(data);
    setUser(data);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <img
        src="https://placekitten.com/100/100"
        alt={`${user?.userName}'s avatar`}
        className="mb-2 rounded-full"
        width={100}
        height={100}
      />
      <p className="text-lg font-semibold">{user?.userName}</p>
      {/* Add more user profile information as needed */}
    </div>
  );
};

export default UserProfile;