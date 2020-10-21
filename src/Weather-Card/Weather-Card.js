import React from 'react';
import './Weather-Card.css';

const weatherCard = (props) => {
  
  return(
    <div>
      <li>
        <p>Date:</p>
        <div>
          <img src="" alt=""/>
          <p>
            <strong>Daily Summary:</strong>
            {props.stuff}
          </p>
          <p>
            <strong>Sunrise:</strong>
          </p>
          <p>
            <strong>Sunset:</strong>
          </p>
          <p>
            <strong>Temp High:</strong>
          </p>
          <p>
            <strong>Temp High Time:</strong>
          </p>
          <p>
            <strong>Temp Low:</strong>
          </p>
          <p>
            <strong>Temp Low Time:</strong>
          </p>
        </div>
      </li>
    </div>
  )

}
export default weatherCard;