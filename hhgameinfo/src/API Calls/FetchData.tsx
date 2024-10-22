import React, { useEffect, useState } from 'react';

export type Suggestion = {
    id: number;
    name: string;
    // Add other properties as needed
};

const SearchIgdbGames = async (query: string) => {
    let queryToUse = `fields name; search "${query}"; limit 5;`;

    try {
        const response = await fetch(
            "http://localhost:5000/api/search",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: queryToUse,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }

    return [];

};

export default SearchIgdbGames;