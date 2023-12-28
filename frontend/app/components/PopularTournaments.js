'use client';

// components/PopularTournaments.js
import React, { useEffect } from "react";
import Link from "next/link";

const PopularTournaments = () => {

  const [popularTournaments, setPopularTournaments] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tournament/getPopularTournaments/5")

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const dscdata = data.tournaments.sort((a, b) => b.followers.length - a.followers.length);
        setPopularTournaments(dscdata);
      });
  }, []);


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Popular Tournaments</h2>
      <table>
        <thead>
          <tr>
            <th className="border px-4 py-2">Total Followers</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {popularTournaments.map((tournament) => (
            <tr key={tournament.id}>
              <td className="border px-4 py-2">{tournament.followers.length}</td>
              <td className="border px-4 py-2">
                <Link href={`/tournament/${tournament.id}`}>
                  {tournament.name}
                </Link>
              </td>
              <td className="border px-4 py-2">{tournament.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default PopularTournaments;
