import React from "react";
import "./dropDown.css";
import Spinner from "react-bootstrap/Spinner";
const DropDown = ({ countries, handlSelectClick, loading }) => {
  return (
    <div className="drop-down">
      <label htmlFor="country-dropdown">
        <select
          name=""
          id="country-dropdown"
          onChange={(e) => handlSelectClick(e.target.value)}
        >
          <option value="global">Global</option>
          {countries.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <div id="loading-spinner">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DropDown;
