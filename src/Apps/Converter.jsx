import { useState } from "react";

function Converter() {
    const [result, setResult] = useState('');

    const conversionFactors = {
        Millimeters: {
            Millimeters: 1,
            Centimeters: 0.1,
            Meters: 0.001,
            Kilometers: 0.000001,
            Inches: 0.0393701,
            Foot: 0.00328084,
            Yards: 0.00109361,
            Miles: 6.2137e-7,
        },
        Centimeters: {
            Millimeters: 10,
            Centimeters: 1,
            Meters: 0.01,
            Kilometers: 0.00001,
            Inches: 0.393701,
            Foot: 0.0328084,
            Yards: 0.0109361,
            Miles: 6.2137e-6,
        },
        Meters: {
            Millimeters: 1000,
            Centimeters: 100,
            Meters: 1,
            Kilometers: 0.001,
            Inches: 39.3701,
            Foot: 3.28084,
            Yards: 1.09361,
            Miles: 0.000621371,
        },
        Kilometers: {
            Millimeters: 1000000,
            Centimeters: 100000,
            Meters: 1000,
            Kilometers: 1,
            Inches: 39370.1,
            Foot: 3280.84,
            Yards: 1093.61,
            Miles: 0.621371,
        },
        Inches: {
            Millimeters: 25.4,
            Centimeters: 2.54,
            Meters: 0.0254,
            Kilometers: 0.0000254,
            Inches: 1,
            Foot: 0.0833333,
            Yards: 0.0277778,
            Miles: 0.000015783,
        },
        Foot: {
            Millimeters: 304.8,
            Centimeters: 30.48,
            Meters: 0.3048,
            Kilometers: 0.0003048,
            Inches: 12,
            Foot: 1,
            Yards: 0.333333,
            Miles: 0.000189394,
        },
        Yards: {
            Millimeters: 914.4,
            Centimeters: 91.44,
            Meters: 0.9144,
            Kilometers: 0.0009144,
            Inches: 36,
            Foot: 3,
            Yards: 1,
            Miles: 0.000568182,
        },
        Miles: {
            Millimeters: 1.60934e+6,
            Centimeters: 160934,
            Meters: 1609.34,
            Kilometers: 1.60934,
            Inches: 63360,
            Foot: 5280,
            Yards: 1760,
            Miles: 1,
        },
    };

    function convert() {
        const value = parseFloat(document.getElementById('value').value);
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;

        if (isNaN(value)) {
            setResult('Invalid input');
            return;
        }

        const conversionFactor = conversionFactors[from][to];
        const conversionResult = value * conversionFactor;

        setResult(conversionResult);
    }

    return (
        <div>
            <h5>From</h5>
            <form>
                <select name="from" id="from" className="form-select">
                    <option value="Millimeters">Millimeters</option>
                    <option value="Centimeters">Centimeters</option>
                    <option value="Meters">Meters</option>
                    <option value="Kilometers">Kilometers</option>
                    <option value="Inches">Inches</option>
                    <option value="Foot">Foot</option>
                    <option value="Yards">Yards</option>
                    <option value="Miles">Miles</option>
                </select>
            </form>
            <br />
            <h5>Value</h5>
            <input type="text" id="value" className="form-control" />
            <br />
            <h5>To</h5>
            <form>
                <select name="to" id="to" className="form-select">
                    <option value="Millimeters">Millimeters</option>
                    <option value="Centimeters">Centimeters</option>
                    <option value="Meters">Meters</option>
                    <option value="Kilometers">Kilometers</option>
                    <option value="Inches">Inches</option>
                    <option value="Foot">Foot</option>
                    <option value="Yards">Yards</option>
                    <option value="Miles">Miles</option>
                </select>
            </form>
            <br />
            <button className="btn btn-primary" onClick={convert}>Convert</button>
            <br />
            <h5>Result</h5>
            <p>{result}</p>
        </div>
    );
}

export default Converter;