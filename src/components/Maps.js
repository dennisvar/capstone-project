import React from 'react';
import ReactDOM from "react-dom";
import './Maps.css';

const Maps = () => {
    return (
        <>
            <div id="maps-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.077698776968!2d-79.46588434875848!3d43.646551760775765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35d32336f705%3A0x1bcc825a300ee67!2sHigh%20Park!5e0!3m2!1sen!2sca!4v1674707161100!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

ReactDOM.render(<Maps />, document.getElementById("root"));
export default Maps;