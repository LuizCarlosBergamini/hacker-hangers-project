import React from 'react';
import { useState, useEffect } from 'react';
import { SearchCompanies } from '../API Calls/FetchData';

interface company {
    id: string;
    name: string;
    url: string;
}

const Companies: React.FC = () => {
    const [companies, setCompanies] = useState<company[]>();

    useEffect(() => {
        const fetchEvents = async () => {
            const results = await SearchCompanies();
            console.log(results);
            setCompanies(results);
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <main className='d-flex flex-column align-items-center justify-content-center'>
                <h1 className='fs-1 text-white mb-3'>Developers e Publishers de Jogos</h1>
                <ul className="list-group" style={{ maxHeight: '300px', width: '50%', overflowY: 'auto' }}>
                    {companies?.map((company, index) => (
                        <li key={index} className="scrollspy-example text-light list-group-item d-flex justify-content-center p-3 fs-5"
                            style={{ backgroundColor: 'rgba(189, 161, 255, 0.5)', border: '2px solid #533991' }}
                        >
                            <div>
                                <a className='text-white' href={company.url}>{company.name}</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Companies;