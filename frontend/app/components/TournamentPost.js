"use client";

import React, { useEffect } from "react";
import { toast } from "react-toastify";

const TournamentPost = () => {

  const [tournamentPosts, setTournamentPosts] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tournament/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTournamentPosts(data.tournaments);
      });
  }, []);

 const handleFollow = (id) => {
  const userString = localStorage.getItem('user');
  const userObject = JSON.parse(userString);

  fetch(`http://localhost:5000/api/tournament/follow/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: userObject,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tournament Posts</h2>
      {tournamentPosts.map((post) => (
        <div key={post._id} className="mb-4 p-4 border relative rounded-md">
          <button onClick={()=> handleFollow(post._id)} className="absolute top-5 right-5 bg-blue-500 border text-white p-2 rounded-md ">
            Follow
          </button>
          <div className="w-full h-48 mb-4">
            <img
              src="https://cdn.ntvspor.net/d81955833d304ca9a163cf7cd30d37fd.jpg?crop=0,16,941,643&w=1066&h=800&mode=crop"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
          <h3 className="text-lg font-semibold">{post.name}</h3>
          <p>{post.description}</p>
          </div>
          <div className="w-full flex justify-between items-end">
          <a href={`/tournament/${post._id}`} className="text-blue-500">
            View
          </a>
          <div>
            <p>
              {post.startDate} - {post.endDate}
            </p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default TournamentPost;