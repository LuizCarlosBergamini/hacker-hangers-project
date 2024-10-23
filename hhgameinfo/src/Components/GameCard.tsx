import React, { useEffect, useState } from 'react';
import { GetIgdbGames } from '../API Calls/FetchData';
import { Game } from '../API Calls/FetchData';
import { useParams } from 'react-router-dom';

const GameCard: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const params = useParams();

    useEffect(() => {
        const fetchGames = async () => {
            const results = await GetIgdbGames(params.id);
            console.log(results);
            setGames(results);

        };

        fetchGames();
    }, []);

    return (
        <div className="card mb-3" style={{ maxWidth: '540px', backgroundColor: '#bda1ff', border: '5px solid #533991' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {games.length > 0 && (
                        <img src={games[0].screenshots[0].url} className="img-fluid rounded-start" alt={games[0].name} />
                    )}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        {games.length > 0 && (
                            <>
                                <h5 className="card-title">{games[0].name}</h5>
                                <p className="card-text">{games[0].summary}</p>
                                <p className="card-text"><small className="text-body-secondary">Rating: {(Math.round(games[0].rating)) / 10}</small></p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;