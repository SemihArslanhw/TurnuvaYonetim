// components/PopularTournaments.js
import React from "react";

const PopularTournaments = () => {
  // Replace this with your actual popular tournament data
  const popularTournaments = [
    { id: 1, name: "Popular Tournament 1", followers: 1000 },
    { id: 2, name: "Popular Tournament 2", followers: 800 },
    // Add more popular tournaments as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Popular Tournaments</h2>
      {popularTournaments.map((tournament) => (
        <div key={tournament.id} className="mb-4 p-4 border rounded-md">
          <h3 className="text-lg font-semibold">{tournament.name}</h3>
          <p>Followers: {tournament.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularTournaments;
