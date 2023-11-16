import Navbar from "../components/Navbar";

export default async function TournamentCreate() {
  return (
    <div className="flex flex-col items-center  h-screen">
      <Navbar />
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4">Create Tournament</h1>
        <form action="/api/tournament" method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="text"
              name="date"
              id="date"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-600">
              Time
            </label>
            <input
              type="text"
              name="time"
              id="time"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

