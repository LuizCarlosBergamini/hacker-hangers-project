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
            // If there are no screenshots, create an empty array
            if (results[0].screenshots === undefined) {
                results[0].screenshots = [];
            }
            console.log(results);
            setGames(results);

        };

        fetchGames();
    }, []);



    const ChangeResScreenshot = () => {
        var screenshots = games.length > 0 && games[0].screenshots.length > 0 ? [...games[0].screenshots.values()] : [];
        let newUrl: string[] = [];

        screenshots.map((screenshot, index) => {
            newUrl[index] = screenshot.url.replace('thumb', 'screenshot_big');
            console.log(newUrl[index]);
        });

        return newUrl;
    };

    // If there are no games or no screenshots, create an empty array else create an array with the screenshots
    let GamesScreenshots = ChangeResScreenshot();

    return (
        <main className='d-flex flex-column align-items-center justify-content-center'>
            <div className="card mb-3" style={{ maxWidth: '540px', backgroundColor: 'rgba(189, 161, 255, 0.5)', border: '5px solid #533991' }}>
                <div className="row g-0 d-flex justify-content-center">
                    <div className="col-md-4" style={{ width: 640 }}>
                        {games.length > 0 && games[0].screenshots.length > 0 && (
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    {games.length > 0 && (
                                        GamesScreenshots.map((screenshotUrl, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={index}
                                                className={index === 0 ? 'active' : ''}
                                                aria-current={index === 0 ? 'true' : 'false'}
                                                aria-label={`Slide ${index}`}
                                            ></button>
                                        ))
                                    )}
                                </div>
                                <div className="carousel-inner">
                                    {games.length > 0 && (
                                        GamesScreenshots.map((screenshotUrl, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                <img
                                                    src={screenshotUrl}
                                                    className="img-fluid rounded-start"
                                                    alt={games[0].name}
                                                />
                                            </div>
                                        ))
                                    )}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {games.length > 0 && (
                                <>
                                    <h5 className="card-title">{games[0].name}</h5>
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