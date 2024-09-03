import React, { useState } from "react";

function Dogs() {
    const [dogImage, setDogImage] = useState(null);

    const styles = {
        button: {
            padding: "10px",
            margin: "10px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        image: {
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "5px solid black",
        },
        paragraph: {
            textAlign: "center",
        },
    };
    const fetchDogImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setDogImage(data.message));
    };

    return (
        <div className="dog-container">
            <button style={styles.button} onClick={fetchDogImage}>Generate Dog Image</button>
            <p style={styles.paragraph}>Click the button to generate a random dog image.</p>
            {dogImage && <img src={dogImage} alt="Random Dog" style={styles.image} />}
        </div>
    );
}

export default Dogs;