import React, { useState, useEffect } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '1.5em',
      marginBottom: '10px',
      color: '#333',
    },
    subheader: {
      fontSize: '1em',
      marginBottom: '20px',
      color: '#666',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      backgroundColor: '#fff',
      marginBottom: '10px',
      padding: '10px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    loading: {
      fontSize: '1.2em',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.header}>Here are some jokes for you:</p>
      <p style={styles.subheader}>Reopen the Menu to generate more Jokes.</p>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {jokes.map((joke) => (
            <li key={joke.id} style={styles.listItem}>
              {joke.setup}: {joke.punchline}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jokes;