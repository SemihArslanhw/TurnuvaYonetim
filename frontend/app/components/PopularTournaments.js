// components/PopularTournaments.js
import React from "react";
import Link from "next/link";

const PopularTournaments = () => {

  // Replace this with your actual popular tournament data
  const popularTournaments = [
    { id: 1, name: "Halı saha", followers: 1000, img: "https://picsum.photos/200" },
    { id: 2, name: "Şirinler halı saha", followers: 800, img: "https://picsum.photos/200" },
    // Add more popular tournaments as needed
  ];


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Popular Tournaments</h2>
      <table>
        <tbody>
          {popularTournaments.map((tournament) => (
            <tr key={tournament.id}>
              <td className="border px-4 py-2">
                <img src={tournament.img} alt={tournament.name} />
              </td>
              <td className="border px-4 py-2">
                <Link href={`/tournament/${tournament.id}`}>
                  {tournament.name}
                </Link>
              </td>
              <td className="border px-4 py-2">{tournament.followers} followers</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default PopularTournaments;
