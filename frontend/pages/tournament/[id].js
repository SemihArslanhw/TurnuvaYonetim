'use client'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../../app/components/Navbar'
import './tournament.css'

export default function Page() {
    const router = useRouter();


    const [user, setUser] = useState(null); 
    const [tournament, setTournament] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
      
        setUser(JSON.parse(localStorage.getItem('user')).result);
        const fetchTournamentData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/tournament/${router.query.id}`);
                const data = await response.json();
                setTournament(data.tournament);
                console.log(data.tournament.comments);
                setComments(data.tournament.comments);
            } catch (error) {
                console.error('Error fetching tournament data:', error);
            }
        };

        if (router.query.id) {
            fetchTournamentData();
        }
    }, [router.query.id]);

    const handleCommentSubmit = async (event) => {
        event.preventDefault();

    
        const comment = {
            text: newComment,
            userId: user._id,
        };
        
        console.log(user);
        
        try {
            // Send the new comment to the server
            await fetch(`http://127.0.0.1:5000/api/tournament/comment/${router.query.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            }).then((res) => res.json()).then((data) => {
                setComments(data.tournament.comments);
                console.log(data.tournament.comments);
                toast.success('Comment added!');
            });

            setNewComment('');
        } catch (error) {
            toast.error('Error adding comment');
            console.error('Error submitting comment:', error);
        }
    };

    const handleBackButtonClick = () => {
        router.back();
    };

    return (
        <div>
            <div className="container">
            <button onClick={handleBackButtonClick} className="back-button">
                    Back
            </button>
                {tournament ? (
                    <div>
                        <h1 className="tournament-heading">{tournament.name}</h1>
                        <p className="tournament-description">{tournament.description}</p>
                        <div className="tournament-dates">
                            <p className="tournament-date">Start Date: {tournament.startDate}</p>
                            <p className="tournament-date">End Date: {tournament.endDate}</p>
                        </div>

                        {/* Display teams */}
                        <div className="teams-section">
                            <h2 className="section-heading">Teams:</h2>
                            {tournament.teams?.map((team, index) => (
                                <div key={index} className="team-details">
                                    <h3 className="team-name">{team.name}</h3>
                                    <ul className="players-list">
                                        {team.players?.map((player, playerIndex) => (
                                            <li key={playerIndex} className="player-item">
                                                {player.name} - {player.position} - Age: {player.age}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Display schedule */}
                        <div className="schedule-section">
                            <h2 className="section-heading">Schedule:</h2>
                            {tournament.schedule?.map((match, matchIndex) => (
                                <div key={matchIndex} className="match-details">
                                    <p className="match-info">
                                        {match.team1} vs {match.team2} - Date: {match.date}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="comments-section">
                            <h2 className="section-heading">Comments:</h2>
                            <ul className="comments-list">
                            {comments?.map((comment, commentIndex) => (
                                <li key={commentIndex} className="comment-item">
                                    <div className="comment-header">
                                        <img src="https://placekitten.com/100/100" alt="User Avatar" className="user-avatar" />
                                        <div className="user-info">
                                            <p className="user-email">{comment?.user.email}</p>
                                            <p className="comment-date">{comment?.date}</p>
                                        </div>
                                    </div>
                                    <p className="comment-text">{comment?.text}</p>
                                </li>
                            ))}
                        </ul>
                            <form onSubmit={handleCommentSubmit} className="comment-form">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Add a comment..."
                                    className="comment-input"
                                />
                                <button type="submit" className="comment-submit-btn">
                                    Add Comment
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
