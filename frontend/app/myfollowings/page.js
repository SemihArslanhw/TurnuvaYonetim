"use client";

import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

import { useState , useEffect } from "react";
export default function MyFollowings() {
    const [tournaments, setTournaments] = useState([]);
    const [user, setUser] = useState({});

    const handleUnfollow = (id) => {
        const userString = localStorage.getItem('user');
        const userObject = JSON.parse(userString);

        fetch(`http://localhost:5000/api/tournament/unfollow/${id}`, {
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

    const handleFollow = (id) => {
        const userString = localStorage.getItem('user');
        const userObject = JSON.parse(userString).result;

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
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user")).result;
        console.log(data);
        setUser(data);
        fetch("http://localhost:5000/api/tournament/getFollowedTournaments/" + data._id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTournaments(data.tournaments);
            });
    }, []);

    return (
        <div className="flex flex-col items-center">
            <Navbar />
        <div className="w-1/3 ">
        <h2 className="text-xl font-bold mb-4">Tournament Posts</h2>
        {tournaments?.map((post) => (
          <div key={post._id} className="mb-4 p-4 border relative rounded-md">
            { post.followers.includes(JSON.parse(localStorage.getItem('user')).result._id) ? (
              <button
              onClick={() => handleUnfollow(post._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-2 right-2"
            >
              Following
            </button>
            ) : (
              <button
              onClick={() => handleFollow(post._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-2 right-2"
            >
              Follow
            </button>
            )}
  
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
      </div>
    )    

}