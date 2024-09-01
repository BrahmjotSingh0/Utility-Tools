import React from 'react';

function Main() {
    const mainContainer = {
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa'
    };

    const mainContent = {
        textAlign: 'center',
        fontSize: '1.5rem',
        color: '#343a40',
        fontWeight: 'bold'
    };



    return (
        <div className="main-container" style={mainContainer}>
            <div className="main-content" style={mainContent}>
                <h2>Utility Tools:</h2>
                <p>A best tools for daily use, Designed and developed by Brahmjot Singh.</p>
            </div>

        </div>
    );
}

export default Main;