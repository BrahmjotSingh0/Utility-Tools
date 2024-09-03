import React, { useState } from "react";
import Header from "./MainPage/Header.jsx";
import Footer from "./MainPage/Footer.jsx";
import Main from "./MainPage/Main.jsx";
import Card from "./MainPage/Components/Card/Card.jsx";
import Overlay from "./MainPage/Components/Overlay/Overlay.jsx";
import Calculator from "./Apps/Calculator.jsx";
import { useEffect } from "react";
import Notes from "./Apps/Notes.jsx";
import Weather from "./Apps/Weather.jsx";
import Dogs from "./Apps/Dogs.jsx";
import Jokes from "./Apps/Jokes.jsx";

function App() {
    const icon = "https://icons8.com/icon/20544/tools";
    useEffect(() => {
        document.title = "Utility Tools";
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = icon;
        document.head.appendChild(link);
    }, []);

    const [overlayContent, setOverlayContent] = useState({ isVisible: false, title: '', content: null });

    const cardContainer = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '20px'
    };

    const handleCardClick = (title) => {
        let content;
        switch (title) {
            case "Calculator":
                content = <Calculator />;
                break;
            case "Weather":
                content = <Weather />;
                break;
            case "Notes":
                content = <Notes />;
                break;
            case "Dogs":
                content = <Dogs />;
                break;
            case "Jokes":
                content = <Jokes />;
                break;
            default:
                content = null;
        }
        setOverlayContent({ isVisible: true, title, content });
    };

    return (
        <>
            <Header />
            <Main />
            <div className="card-container" style={cardContainer}>
                <Card
                    title="Calculator"
                    content="A simple calculator to perform basic arithmetic operations."
                    image="https://img.icons8.com/ios/452/calculator.png"
                    onClick={() => handleCardClick("Calculator")}
                />
                <Card
                    title="Weather"
                    content="Get the current weather information for your location."
                    image="https://img.icons8.com/ios/452/partly-cloudy-day.png"
                    onClick={() => handleCardClick("Weather")}
                />
                <Card
                    title="Notes"
                    content="A simple note-taking app to keep track of your notes."
                    image="https://img.icons8.com/ios/452/note.png"
                    onClick={() => handleCardClick("Notes")}
                />
                <Card
                    title="Dogs"
                    content="Get random images of dogs to brighten your day."
                    image="https://img.icons8.com/ios/452/dog.png"
                    onClick={() => handleCardClick("Dogs")}
                />
                <Card
                    title="Jokes"
                    content="Get random jokes to lighten up your mood."
                    image="https://img.icons8.com/?size=100&id=pcCSHYJczCPb&format=png&color=000000"
                    onClick={() => handleCardClick("Jokes")}
                />
            </div>
            <Overlay
                isVisible={overlayContent.isVisible}
                onClose={() => setOverlayContent({ isVisible: false, title: '', content: null })}
                title={overlayContent.title}
            >
                {overlayContent.content}
            </Overlay>
            <Footer />
        </>
    );
}

export default App;