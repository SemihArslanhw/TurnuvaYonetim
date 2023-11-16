import Link from "next/link";

export default function Navbar() {
  const pages = ["Followings", "My Tournaments", "Logout"];

  return (
    <nav className="bg-blue-500 p-4 w-screen flex items-center justify-center">
      <div className="flex items-center justify-between w-2/3">
        {/* Logo */}
        <Link className="text-white text-xl font-bold" href="/">
          Turnuvam
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <Link href="/createtournament">
            <li className="text-white">Create Tournament</li>
          </Link>
          <Link href="/myfollowings">
            <li className="text-white">My Followings</li>
          </Link>
          <Link href="/login">
            <li className="text-white">Logout</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
