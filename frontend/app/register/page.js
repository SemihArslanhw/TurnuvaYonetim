"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicturePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Create FormData object
  const formData = new FormData();
  formData.append("file", profilePicture);
  formData.append("name", e.target.email.value + ".jpg");


  let datas = {
    userName: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
    profilePicture: "profilePicture",
  };

  console.log(profilePicture)

  // fetch("http://localhost:5000/api/upload", {
  //   method: "POST",
  //   file: formData,
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     toast.error("Error uploading image");
  //   });

  fetch("http://localhost:5000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  })
    .then((res) => res)
    .then((data) => {
      if (data.ok) {
        toast.success("User created successfully");
        data.json().then((user) => {
        let converted = {
          result: {},
          token: "",
        };
        converted.result = user;
        converted.token = user.token;
        console.log(converted);
        localStorage.setItem("user", JSON.stringify(converted));
        document.cookie = `token=${user.token}`;
        setTimeout(() => {
          window.location.href = "/";
        }
        , 1000);
        });
      } else {
        toast.error("User already exists");
      }
    }).catch((err) => {
      toast.error("Error creating user");
    })
};
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} method="post" className="space-y-4">
          {/* Profile Picture Input */}
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">
              Profile Picture
            </label>
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
            {profilePicturePreview && (
              <img
                src={profilePicturePreview}
                alt="Profile Preview"
                className="mt-2 border rounded-md max-w-full"
              />
            )}
            <label
              htmlFor="profilePicture"
              className="cursor-pointer text-blue-600 hover:underline focus:outline-none focus:ring focus:border-blue-300"
            >
              Select Profile Picture
            </label>
          </div>

          {/* Other registration fields */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <span className="text-sm text-gray-600">Already have an account?</span>{" "}
          <Link href="/login">
            <span className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring focus:border-blue-300 cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
