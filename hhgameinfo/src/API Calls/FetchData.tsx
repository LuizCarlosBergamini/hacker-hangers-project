import React, { useEffect } from 'react';

const FetchData: React.FC = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/game_time_to_beats",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            query: "fields checksum,completely,count,created_at,game_id,hastily,normally,updated_at;"
                        })
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    return <div>Fetching Data...</div>;
};

export default FetchData;