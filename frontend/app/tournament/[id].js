// Import necessary components and styles
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TournamentPage() {
  const router = useRouter();
  const { id } = router.query; // Access the tournament ID from the route params

  // State to store tournament data
  const [tournament, setTournament] = useState(null);

  // Simulate fetching tournament data based on the ID
  useEffect(() => {
    // Fetch tournament data using the ID (replace with your actual API call)
    const fetchTournamentData = async () => {
      try {
        // Replace the following line with your actual API call
        const response = await fetch(`/api/tournaments/${id}`);
        const data = await response.json();

        // Set the tournament data in state
        setTournament(data);
      } catch (error) {
        console.error("Error fetching tournament data:", error);
      }
    };

    // Fetch tournament data when the component mounts
    if (id) {
      fetchTournamentData();
    }
  }, [id]);

  // Render loading or tournament details based on data availability
  return (
    <div className="container mx-auto p-4">
      {tournament ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{tournament.name}</h1>
          {/* Add more tournament details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
