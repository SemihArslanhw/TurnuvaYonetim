// components/TournamentPost.js
import React from "react";

const TournamentPost = () => {
  // Replace this with your actual tournament post data
  const tournamentPosts = [
    { id: 1, title: "Tournament 1", content: "Description for Tournament 1" },
    { id: 2, title: "Tournament 2", content: "Description for Tournament 2" },
    { id: 3, title: "Tournament 3", content: "Description for Tournament 3" },
    { id: 4, title: "Tournament 4", content: "Description for Tournament 4" },
    { id: 5, title: "Tournament 5", content: "Description for Tournament 5" },
    { id: 6, title: "Tournament 6", content: "Description for Tournament 6" },
    { id: 7, title: "Tournament 7", content: "Description for Tournament 7" },
    { id: 8, title: "Tournament 8", content: "Description for Tournament 8" },
    { id: 9, title: "Tournament 9", content: "Description for Tournament 9" },
    { id: 10, title: "Tournament 10", content: "Description for Tournament 10" },
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