import React from 'react';
import './Location-Search.css';

const locationSearch = (props) => {
  return (
    <div>
      <div>
        <h1>Enter Location For Weekly Report</h1>
      </div>
      <form>
        <input type="text" value={props.defaultLocation}/>
        <button>Search!</button>
      </form>
    </div>
  )
}

export default locationSearch;