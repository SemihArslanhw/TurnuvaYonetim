'use client'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../../app/components/Navbar'
import './tournement.css'

export default function Page() {
    const router = useRouter()
    
    const [tournament, setTournament] = useState(null)

    useEffect(() => {
        const fetchTournamentData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/tournament/${router.query.id}`)
                const data = await response.json()
                setTournament(data)
            } catch (error) {
                console.error('Error fetching tournament data:', error)
            }
        }
        if (router.query.id) {
            fetchTournamentData()
        }
    }, [router.query.id])

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                {tournament ? (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{tournament.name}</h1>
                        <p className="text-xl mb-4">{tournament.description}</p>
                        <p className="text-xl mb-4">{tournament.date}</p>
                        <p className="text-xl mb-4">{tournament.location}</p>
                        <p className="text-xl mb-4">{tournament.organizer}</p>
                        <p className="text-xl mb-4">{tournament.game}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}