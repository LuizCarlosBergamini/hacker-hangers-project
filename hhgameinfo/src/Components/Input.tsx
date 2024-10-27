import React, { useEffect, useState } from 'react';
import { Suggestion } from '../API Calls/FetchData';
import SearchIgdbGames from '../API Calls/FetchData';
import { useNavigate } from 'react-router-dom';

interface InputProps {
    goToCardPage?: (SelectedGame: Suggestion) => void;
}

const Input: React.FC<InputProps> = ({ goToCardPage }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 0) {
                const results = await SearchIgdbGames(query);
                console.log(results);
                setSuggestions(results);
            } else {
                setSuggestions([]);
            }
        };

        const debounceFetch = setTimeout(fetchSuggestions, 200);

        return () => clearTimeout(debounceFetch);
    }, [query]);



    return (
        <>
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    className="form-control p-4 text-white fs-3 text"
                    placeholder='Digite o jogo que deseja buscar!'
                    style={{ backgroundColor: 'rgba(189, 161, 255, 0.5)', border: '5px solid #533991' }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value.toString())}
                />
            </div>
            {suggestions.length > 0 && (
                <div
                    id="scrollspy-example"
                    data-bs-spy="scroll"
                    data-bs-root-margin="0px 0px -40%"
                    data-bs-smooth-scroll="true"
                    className='scrollspy-example p-3 rounded-2 w-50'
                    style={{ maxHeight: '300px', overflowY: 'auto' }}
                >
                    {suggestions.map((suggestion, index) => (
                        <button
                            type='button'
                            key={index}
                            className="btn d-block w-100 text-white p-3 fs-4"
                            onClick={() => goToCardPage && goToCardPage(suggestion)}
                            style={{ backgroundColor: 'rgba(189, 161, 255, 0.5)', border: '5px solid #533991' }}
                        >
                            {suggestion.name}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Input;
