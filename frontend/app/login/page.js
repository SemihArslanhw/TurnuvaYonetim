export default async function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form action="/api/login" method="post" className="space-y-4">
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
          <div className="flex items-center justify-between gap-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
            <span className="text-sm text-gray-600">or</span>
            <a
              href="/register"
              className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring focus:border-blue-300"
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
