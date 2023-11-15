// Import necessary components and styles
import "tailwindcss/tailwind.css";
import TournamentPost from "./components/TournamentPost"; // You'll need to create this component
import PopularTournaments from "./components/PopularTournaments"; // You'll need to create this component
import UserProfile from "./components/UserProfile"; // You'll need to create this component

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar - User Info */}
      <div className="w-1/4 p-4 sticky top-0 h-full border-r">
        <UserProfile />
      </div>

      {/* Main Content - Tournament Posts */}
      <div className="w-1/2 p-4">
        {/* Display tournament posts */}
        <TournamentPost />
      </div>

      {/* Right Sidebar - Popular Tournaments */}
      <div className="w-1/4 p-4 sticky top-0 h-full border-l">
        <PopularTournaments />
      </div>
    </div>
  );
}