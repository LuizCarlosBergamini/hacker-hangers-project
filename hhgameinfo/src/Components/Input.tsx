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
                <ul className="list-group w-50 mt-3">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="list-group-item"
                            style={{ backgroundColor: '#bda1ff', border: '5px solid #533991' }}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
};

export default Input;
