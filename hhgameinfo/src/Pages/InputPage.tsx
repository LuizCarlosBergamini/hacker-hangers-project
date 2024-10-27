import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import { Suggestion } from '../API Calls/FetchData';

const InputPage: React.FC = () => {

    const navigate = useNavigate();
    const goToCardPage = (SelectedGame: Suggestion) => {
        console.log(SelectedGame.id);
        navigate(`/game/${SelectedGame.id}`);
    }

    return (
        <div>
            <h1 className='text-white'>Escolha um jogo para pesquisar!</h1>
            <main className='d-flex flex-column align-items-center justify-content-center'>
                <div className='w-50'>
                    <Input goToCardPage={goToCardPage} />
                </div>
            </main>
        </div>
    );
};

export default InputPage;