import Link from "next/link";

export default function Navbar() {
  const pages = ["Followings", "My Tournaments", "Logout"];

  return (
    <nav className="bg-blue-500 p-4 w-screen flex items-center justify-center">
      <div className="flex items-center justify-between w-2/3">
        {/* Logo */}
        <Link className="text-white text-xl font-bold" href="/">
          Your Logo
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          {pages.map((page, index) => (
            <li key={index}>
              <Link className="text-white hover:underline" href={`/${page.toLowerCase()}`}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
