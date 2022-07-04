import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <section className="city-search">
        <div className="search-bar">
          <form className="search-bar-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="texHt"
                  className="form-control"
                  placeholder="Enter city"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
