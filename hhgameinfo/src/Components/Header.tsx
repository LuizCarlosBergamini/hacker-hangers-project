import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

    const navigate = useNavigate();
    const goToRegisterPage = (pageName: string) => {
        if (pageName === "Input") navigate('/');
        else if (pageName === "eventos") navigate(`/${pageName}`);
        else if (pageName === "companies") navigate(`/${pageName}`);
    }

    return (
        <header className='d-flex justify-content-center'>
            <div style={{ width: "20%" }} className='d-flex justify-content-center mt-3'>
                <button type="button" onClick={() => goToRegisterPage("Input")} className="btn text-white text-decoration-underline me-5">Jogos</button>
                <button type="button" onClick={() => goToRegisterPage("eventos")} className="btn text-white text-decoration-underline me-5">Eventos</button>
                <button type="button" onClick={() => goToRegisterPage("companies")} className="btn text-white text-decoration-underline">Empresas</button>
            </div>
        </header>
    );
};

export default Header;