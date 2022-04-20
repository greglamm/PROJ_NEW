import React from "react";
import Info from './data_Info';

function Data() {
  return (
    <div className="data">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Data</h1>
            <p>
            <Info />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;