import React from 'react';
import '@fontsource/notable';
import '@fontsource/delius';
import '@fontsource/rouge-script';
import './Header.css'; // Importamos el CSS externo

const Header = () => {
    return (
        <header className="header">
            <div className="line-top">
                <h1 className="teorias">TEORÍAS</h1>
                <h2 className="del">del</h2>
            </div>
            <div className="aprendizaje-wrapper">
                <h3 className="aprendizaje">aprendizaje</h3>
            </div>
        </header>
    );
};

export default Header;
