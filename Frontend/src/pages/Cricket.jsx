import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Cricket = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cricapi.com/v1/series", {
        params: { apikey: "e8d608da-0d15-44e3-a070-e9dba9efaa51" },
      })
      .then(({ data }) => setSeries(data?.data || []))
      .catch(() => console.error("Cannot retrieve series data"));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Cricket Series</h2>
      <div className="row">
        {series.map(({ id, name, startDate, endDate }) => (
          <div key={id} className="col-md-6 mb-3">
            <div className="card p-3">
              <h5>{name}</h5>
              <p>
                🏁 {startDate} - {endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cricket;
