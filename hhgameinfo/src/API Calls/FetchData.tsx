export type Suggestion = {
    id: number;
    name: string;
    // Add other properties as needed
};

export type Game = {
    id: number;
    name: string;
    screenshots: { url: string }[];
    summary: string;
    rating: number;
    // Add other properties as needed
};

export const SearchEvents = async () => {
    try {
        const response = await fetch(
            "http://localhost:5000/api/events",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: "fields *;",
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

}

const SearchIgdbGames = async (query: string) => {
    let queryToUse = `fields name; where name ~ *"${query}"*; sort rating desc; limit 50;`;

    try {
        const response = await fetch(
            "http://localhost:5000/api/games",
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


export const GetIgdbGames = async (GameId: string): Promise<Game[]> => {
    let query = `fields name,screenshots.url,summary,rating; where id = ${GameId};`;

    try {
        const response = await fetch(
            "http://localhost:5000/api/games",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
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