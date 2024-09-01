import React, { useState } from 'react';

function Calculator() {

    const styles = {
        calculator: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        display: {
            width: '100%',
            background: '#222',
            color: '#fff',
            textAlign: 'right',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '10px'
        },
        input: {
            fontSize: '1.5rem'
        },
        result: {
            fontSize: '1.25rem',
            color: '#0f0'
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px'
        },
        button: {
            padding: '20px',
            fontSize: '1.25rem',
            border: 'none',
            borderRadius: '4px',
            background: '#f0f0f0',
            cursor: 'pointer',
            transition: 'background 0.3s'
        },
        buttonHover: {
            background: '#ddd'
        }
    };


    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };



    return (
        <div style={styles.calculator}>
            <div style={styles.display}>
                <div style={styles.input}>{input}</div>
                <div style={styles.result}>{result}</div>
            </div>
            <div style={styles.buttons}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
                    <button
                        key={btn}
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.background = styles.buttonHover.background}
                        onMouseOut={(e) => e.currentTarget.style.background = styles.button.background}
                        onClick={() => handleButtonClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;