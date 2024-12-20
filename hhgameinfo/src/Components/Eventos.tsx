import React from 'react';
import { useState, useEffect } from 'react';
import { SearchEvents } from '../API Calls/FetchData';

interface Event {
    id: string;
    name: string;
    description: string;
    start_time: string;
    live_stream_url: string;
}

const Eventos: React.FC = () => {
    const [events, setEvents] = useState<Event[]>();

    useEffect(() => {
        const fetchEvents = async () => {
            const results = await SearchEvents();
            console.log(results);
            const filteredResults = results.map(filterEventData)
            console.log(filteredResults);
            setEvents(filteredResults);
        };

        fetchEvents();
    }, []);


    const filterEventData = (event: Event) => {
        let start_time;
        if (event.start_time) {
            const timestamp = Number(event.start_time);
            const date = new Date(timestamp * 1000);
            start_time = date.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        } else {
            start_time = "Sem Data";
        }

        return {
            id: event.id,
            name: event.name,
            start_time: start_time,
        };
    }

    return (
        <div>
            <main className='d-flex flex-column align-items-center justify-content-center'>
                <h1 className='fs-1 text-white mb-3'>Eventos</h1>
                <ul className="list-group" style={{ maxHeight: '300px', width: '50%', overflowY: 'auto' }}>
                    {events?.map((event, index) => (
                        <li key={index} className="scrollspy-example text-light list-group-item d-flex justify-content-between p-3 fs-5"
                            style={{ backgroundColor: 'rgba(189, 161, 255, 0.5)', border: '2px solid #533991' }}
                        >
                            <div>
                                {event.name}
                            </div>
                            <div>
                                {event.start_time}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Eventos;