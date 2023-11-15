// components/TournamentPost.js
import React from "react";

const TournamentPost = () => {
  // Replace this with your actual tournament post data
  const tournamentPosts = [
    { id: 1, title: "Tournament 1", content: "Description for Tournament 1" },
    { id: 2, title: "Tournament 2", content: "Description for Tournament 2" },
    // Add more tournament posts as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tournament Posts</h2>
      {tournamentPosts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded-md">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TournamentPost;