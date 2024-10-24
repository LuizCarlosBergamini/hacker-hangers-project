import React, { useEffect, useState } from 'react';
import { GetIgdbGames } from '../API Calls/FetchData';
import { Game } from '../API Calls/FetchData';
import { useParams } from 'react-router-dom';

const GameCard: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const params = useParams();

    useEffect(() => {
        const fetchGames = async () => {
            const results = await GetIgdbGames(params.id ?? '0');
            console.log(results);
            setGames(results);

        };

        fetchGames();
    }, []);

    let GameScreenshots = games.length > 0 ? [...games[0].screenshots.values()].map(screenshot => screenshot.url) : [];

    return (
        <main className='d-flex flex-column align-items-center justify-content-center'>
            <div className="card mb-3" style={{ maxWidth: '540px', backgroundColor: '#bda1ff', border: '5px solid #533991' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={GameScreenshots.length > 0 ? GameScreenshots[0] : ''} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={GameScreenshots.length > 0 ? GameScreenshots[1] : ''} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={GameScreenshots.length > 0 ? GameScreenshots[2] : ''} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
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
        </main>
    );
};

export default GameCard;