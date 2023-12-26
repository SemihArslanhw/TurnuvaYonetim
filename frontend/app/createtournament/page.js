"use client";

import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

import { useState } from "react";
export default function TournamentCreate() {

  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const [teamName, setTeamName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("Striker");
  const [playerAge, setPlayerAge] = useState("");

  const [schedule, setSchedule] = useState([]);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let datas = {
      name: e.target.name.value,
      description: e.target.description.value,
      location: e.target.location.value,
      startDate: e.target.start.value,
      endDate: e.target.end.value,
      teams: teams,
      schedule: schedule
    };

    console.log(datas);

    const res = fetch("http://localhost:5000/api/tournament/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })

    res.then((res) => res.json()).then((data) => {
      if (data.message)
      toast.success("Tournament created");
      else
      toast.error("Error creating tournament");
    })
  };

  const handleTeams = (team) => {
    if (team.name === team1 && team.name === team2) {
      toast.error("Can't play against yourself");
      return;
    }
    if (team1 === "") {
      setTeam1(team.name);
      return;
    }
    else if (team2 === "") {
      setTeam2(team.name);
      return;
    }
    else {
      toast.error("Can't play against more than 2 teams");
      return;
    }
  }


  return (
    <div className="flex flex-col items-center  h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-full">
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4">Create Tournament</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="start" className="block text-sm font-medium text-gray-600">
              Start Date
            </label>
            <input
              type="text"
              name="start"
              id="start"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="end" className="block text-sm font-medium text-gray-600">
              End Date
            </label>
            <input
              type="text"
              name="end"
              id="end"
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
      <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10 gap space-y-4">
        <div>
        <h1 className="text-2xl font-bold mb-4">Add Team</h1>
        <label htmlFor="teamname" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              onChange={(e) => setTeamName(e.target.value)}
              value={teamName}
              type="text"
              name="teamname"
              id="teamname"
              className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />        
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4 whitespace-nowrap">Add Player {players.length } / 10</h1>
            {players?.map((player) => (
              console.log(player),
            <div className="flex gap-2 items-center">
              <div className="col">{player.name}</div>
              <div className="col">{player.position}</div>
              <div className="col">{player.age}</div>
              <div className="col"><button className="bg-red-600 p-1 rounded-lg text-white" onClick={() => setPlayers(players.filter((p) => p.name !== player.name))}>Remove</button></div>
            </div>
            ))}
            <label htmlFor="teamname" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  onChange={(e) => setPlayerName(e.target.value)}
                  type="text"
                  name="teamname"
                  id="teamname"
                  className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                />        
          </div>


          <div>
            <label htmlFor="teamname" className="block text-sm font-medium text-gray-600">
                  Position
                </label>
                <select onChange={(e)=>{setPlayerPosition(e.target.value)}} value={playerPosition} id="position" name="position" className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
                  <option value="Striker">Striker</option>
                  <option value="Midfielder">Midfielder</option>
                  <option value="Defender">Defender</option>
                  <option value="Goalkeeper">Goalkeeper</option>
                </select>       
          </div>
          <div>
            <label htmlFor="teamname" className="block text-sm font-medium text-gray-600">
                  Age
                </label>
                <input
                  onChange={(e) => setPlayerAge(e.target.value)}
                  type="text"
                  name="age"
                  id="age"
                  className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                />        
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setPlayers([...players, {name: playerName, position: playerPosition, age: playerAge}])}
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Player
            </button>
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setTeams([...teams, {name: teamName, players: players}])}
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Team
            </button>
          </div>
        </div>
        <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10 gap space-y-4">
          <h1 className="text-2xl font-bold mb-4">Teams</h1>
            {teams?.map((team) => (
              console.log(team),
            <div className="flex gap-2 items-center">
              <div className="col">{team.name}</div>
              <div className="col"><button className="bg-green-600 p-1 rounded-lg text-white" onClick={()=> {handleTeams(team)}}>Select</button></div>
              <div className="col"><button className="bg-red-600 p-1 rounded-lg text-white" onClick={() => setTeams(teams.filter((t) => t.name !== team.name))}>Remove</button></div>
            </div>
            ))
            }
        </div>
        <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10 gap space-y-4">
          <h1 className="text-2xl font-bold mb-4">Add Schedule</h1>
          <div className="flex gap-2 items-center justify-center">
              <div onClick={()=>{setTeam1("")}} className="col whitespace-nowrap cursor-pointer hover:text-red-500">{team1 === "" ? "Team 1" : team1}</div>
              <div>-</div>
              <div onClick={()=>{setTeam2("")}} className="col whitespace-nowrap cursor-pointer hover:text-red-500">{team2 === "" ? "Team 2" : team2}</div>
              <div>
            <label htmlFor="teamname" className="block text-sm font-medium text-gray-600">
                  Date
                </label>
                <input
                  onChange={(e) => setScheduleDate(e.target.value)}
                  type="text"
                  name="age"
                  id="age"
                  className="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:ring focus:border-blue-300 min-w-[200px]"
                />  
          </div>
          <button className="bg-green-600 p-1 rounded-lg text-white" onClick={() => setSchedule([...schedule, {team1: team1, team2: team2, date:scheduleDate}])}>Add</button>      

            </div>
        </div>
        <div className="container p-8 bg-gray-100 max-w-md rounded-md shadow-md mt-10 gap space-y-4">
          <h1 className="text-2xl font-bold mb-4">Schedule</h1>
        {
          schedule?.map((s) => (
              <div className="flex gap-2 items-center justify-center">
                <div className="col whitespace-nowrap">{s.team1}</div>
                <div>-</div>
                <div className="col whitespace-nowrap">{s.team2}</div>
                <div className="col whitespace-nowrap">{s.date}</div>
              </div>
          ))
        }
        </div>
        
      </div> 
    </div>
  );
}

