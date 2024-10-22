import React, { useEffect, useState } from 'react';
import { Suggestion } from '../API Calls/FetchData';
import SearchIgdbGames from '../API Calls/FetchData';

const Input: React.FC = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 0) {
                const results = await SearchIgdbGames(query);
                console.log(results);
                setSuggestions(Array.isArray(results) ? results : []);
            } else {
                setSuggestions([]);
            }
        };

        const debounceFetch = setTimeout(fetchSuggestions, 200);

        return () => clearTimeout(debounceFetch);
    }, [query]);

    return (
        <main className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-white'>Escolha um jogo para pesquisar!</h1>
            <div className="input-group input-group-lg w-50">
                <input
                    type="text"
                    className="form-control p-4 text-white fs-3 text"
                    placeholder='Digite o jogo que deseja buscar!'
                    style={{ backgroundColor: '#bda1ff', border: '5px solid #533991' }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value.toString())}
                />
            </div>
            {suggestions.length > 0 && (
                <div className='scrollspy-example p-3 rounded-2 w-50'>
                    {suggestions.map((suggestion, index) => (
                        <button
                            type='button'
                            key={index}
                            className="btn d-block w-100 p-3 fs-4"
                            style={{ backgroundColor: '#bda1ff', border: '5px solid #533991' }}
                        >
                            {suggestion.name}
                        </button>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Input;
