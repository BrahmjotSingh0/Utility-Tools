import { useState } from "react";

function Converter() {
    const [result, setResult] = useState('');

    function convert() {
        const value = parseFloat(document.getElementById('value').value);
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;

        let conversionResult;

        switch(from) {
            case 'Millimeters':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value;
                        break;
                    case 'Centimeters':
                        conversionResult = value / 10;
                        break;
                    case 'Meters':
                        conversionResult = value / 1000;
                        break;
                    case 'Kilometers':
                        conversionResult = value / 1000000;
                        break;
                    case 'Inches':
                        conversionResult = value * 0.0393701;
                        break;
                    case 'Foot':
                        conversionResult = value * 0.00328084;
                        break;
                    case 'Yards':
                        conversionResult = value * 0.00109361;
                        break;
                    case 'Miles':
                        conversionResult = value * 6.2137e-7;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;
            case 'Centimeters':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 10;
                        break;
                    case 'Centimeters':
                        conversionResult = value;
                        break;
                    case 'Meters':
                        conversionResult = value / 100;
                        break;
                    case 'Kilometers':
                        conversionResult = value / 100000;
                        break;
                    case 'Inches':
                        conversionResult = value * 0.393701;
                        break;
                    case 'Foot':
                        conversionResult = value * 0.0328084;
                        break;
                    case 'Yards':
                        conversionResult = value * 0.0109361;
                        break;
                    case 'Miles':
                        conversionResult = value * 6.2137e-6;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;
            case 'Meters':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 1000;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 100;
                        break;
                    case 'Meters':
                        conversionResult = value;
                        break;
                    case 'Kilometers':
                        conversionResult = value / 1000;
                        break;
                    case 'Inches':
                        conversionResult = value * 39.3701;
                        break;
                    case 'Foot':
                        conversionResult = value * 3.28084;
                        break;
                    case 'Yards':
                        conversionResult = value * 1.09361;
                        break;
                    case 'Miles':
                        conversionResult = value * 0.000621371;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

            case 'Kilometers':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 1000000;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 100000;
                        break;
                    case 'Meters':
                        conversionResult = value * 1000;
                        break;
                    case 'Kilometers':
                        conversionResult = value;
                        break;
                    case 'Inches':
                        conversionResult = value * 39370.1;
                        break;
                    case 'Foot':
                        conversionResult = value * 3280.84;
                        break;
                    case 'Yards':
                        conversionResult = value * 1093.61;
                        break;
                    case 'Miles':
                        conversionResult = value * 0.621371;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

            case 'Inches':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 25.4;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 2.54;
                        break;
                    case 'Meters':
                        conversionResult = value * 0.0254;
                        break;
                    case 'Kilometers':
                        conversionResult = value * 2.54e-5;
                        break;
                    case 'Inches':
                        conversionResult = value;
                        break;
                    case 'Foot':
                        conversionResult = value * 0.0833333;
                        break;
                    case 'Yards':
                        conversionResult = value * 0.0277778;
                        break;
                    case 'Miles':
                        conversionResult = value * 1.5783e-5;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

            case 'Foot':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 304.8;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 30.48;
                        break;
                    case 'Meters':
                        conversionResult = value * 0.3048;
                        break;
                    case 'Kilometers':
                        conversionResult = value * 0.0003048;
                        break;
                    case 'Inches':
                        conversionResult = value * 12;
                        break;
                    case 'Foot':
                        conversionResult = value;
                        break;
                    case 'Yards':
                        conversionResult = value * 0.333333;
                        break;
                    case 'Miles':
                        conversionResult = value * 0.000189394;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

            case 'Yards':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 914.4;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 91.44;
                        break;
                    case 'Meters':
                        conversionResult = value * 0.9144;
                        break;
                    case 'Kilometers':
                        conversionResult = value * 0.0009144;
                        break;
                    case 'Inches':
                        conversionResult = value * 36;
                        break;
                    case 'Foot':
                        conversionResult = value * 3;
                        break;
                    case 'Yards':
                        conversionResult = value;
                        break;
                    case 'Miles':
                        conversionResult = value * 0.000568182;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

            case 'Miles':
                switch(to) {
                    case 'Millimeters':
                        conversionResult = value * 1.60934e+6;
                        break;
                    case 'Centimeters':
                        conversionResult = value * 160934;
                        break;
                    case 'Meters':
                        conversionResult = value * 1609.34;
                        break;
                    case 'Kilometers':
                        conversionResult = value * 1.60934;
                        break;
                    case 'Inches':
                        conversionResult = value * 63360;
                        break;
                    case 'Foot':
                        conversionResult = value * 5280;
                        break;
                    case 'Yards':
                        conversionResult = value * 1760;
                        break;
                    case 'Miles':
                        conversionResult = value;
                        break;
                    default:
                        conversionResult = 'Invalid unit';
                }
                break;

                
            default:
                conversionResult = 'Invalid unit';
        }

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