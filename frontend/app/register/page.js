import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form action="/api/register" method="post" className="space-y-4">
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
          <Link className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring focus:border-blue-300" href="/login">
              Login
          </Link>
        </div>
      </div>
    </div>
  );
}
