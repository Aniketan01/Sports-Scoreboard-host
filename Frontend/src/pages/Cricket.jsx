import React, { useState, useEffect } from "react";
import axios from "axios";

const Cricket = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cricapi.com/v1/series", {
        params: { apikey: import.meta.env.CRICKET_API_KEY },
      })
      .then(({ data }) => setSeries(data?.data || []))
      .catch(() => console.error("Cannot retrieve series data"));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Cricket Series</h2>
      <div className="row">
        {series.map(({ id, name, startDate, endDate }) => (
          <div key={id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-center fw-bold">{name}</div>
              <div className="card-body text-center">
                <p className="text-muted">🏁 {startDate} - {endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cricket;
