// components/UserProfile.js
import React from "react";

const UserProfile = () => {
  // Replace this with your actual user profile data
  const user = {
    username: "example_user",
    avatar: "https://placekitten.com/100/100", // Replace with the actual URL of the user's avatar
    // Add more user profile data as needed
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <img
        src={user.avatar}
        alt={`${user.username}'s avatar`}
        className="mb-2 rounded-full"
        width={100}
        height={100}
      />
      <p className="text-lg font-semibold">{user.username}</p>
      {/* Add more user profile information as needed */}
    </div>
  );
};

export default UserProfile;