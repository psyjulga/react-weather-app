import React from "react";
import "./Searchform.css";

export default function Searchform() {
  return (
    <form className="Searchform m-4">
      <div className="row">
        <div className="city-input-col col-md-9">
          <input
            type="search"
            placeholder="Type a city ..."
            className="form-control"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-md-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
