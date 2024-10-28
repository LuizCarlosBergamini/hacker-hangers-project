import React from 'react';
import Input from '../Components/Input';
import GameCard from '../Components/GameCard';
import { Suggestion } from '../API Calls/FetchData';

const GameCardPage: React.FC = () => {

    const goToCardPage = (SelectedGame: Suggestion) => {
        console.log(SelectedGame.id);
        window.location.href = `/game/${SelectedGame.id}`;
    }

    return (
        <div>
            <main className='d-flex flex-column align-items-center justify-content-center mt-4'>

                <GameCard />
                <div className='pb-3 w-50'>
                    <Input goToCardPage={goToCardPage} />
                </div>
            </main>
        </div>
    );
};

export default GameCardPage;