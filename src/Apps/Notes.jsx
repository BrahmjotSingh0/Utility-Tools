import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Notes() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px'
        },
        input: {
            margin: '10px'
        },
        textarea: {
            margin: '10px'
        },
        button: {
            margin: '10px'
        },
        notesContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px'
        },
        ul: {
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        li: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            width: '200px',
            boxSizing: 'border-box'
        }
    };

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = Cookies.get('notes');
        console.log('Loaded notes from cookies:', savedNotes); // Debugging log
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    const addNote = () => {
        const title = document.querySelector('input').value;
        const content = document.querySelector('textarea').value;
        const newNotes = [...notes, { title, content }];
        setNotes(newNotes);
        Cookies.set('notes', JSON.stringify(newNotes));
        console.log('Saved notes to cookies:', JSON.stringify(newNotes)); // Debugging log
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';
    };

    const removeNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
        Cookies.set('notes', JSON.stringify(newNotes));
        console.log('Updated notes in cookies:', JSON.stringify(newNotes)); // Debugging log
    };

    return (
        <div style={styles.container}>
            <h3>Add Note</h3>
            <input type="text" placeholder="Title" style={styles.input} />
            <textarea placeholder="Content" style={styles.textarea}></textarea>
            <button onClick={addNote} style={styles.button}>Add</button>
            <h3>Notes</h3>
            <div style={styles.notesContainer}>
                <ul style={styles.ul}>
                    {notes.map((note, index) => (
                        <li key={index} style={styles.li} onClick={() => removeNote(index)}>
                            <h4>{note.title}</h4>
                            <p>{note.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Notes;