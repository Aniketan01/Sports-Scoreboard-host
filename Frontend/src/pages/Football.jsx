import React, { useEffect, useState } from "react";
import axios from "axios";

const Football = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://v3.football.api-sports.io/fixtures?league=39&season=2023", {
        headers: { "x-apisports-key": "d236dc816f53fad5c2b27fa586a8e00b" },
      })
      .then((res) => setMatches(Array.isArray(res.data.response) ? res.data.response.slice(0, 20) : []))
      .catch((err) => console.error("Error fetching matches:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Football Matches</h2>
      <div className="row">
        {matches.map((match, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-center fw-bold">
                {match.teams.home.name} vs {match.teams.away.name}
              </div>
              <div className="card-body text-center">
                <p><strong>Score:</strong> {match.goals.home ?? "-"} - {match.goals.away ?? "-"}</p>
                <p className="text-muted">Date: {new Date(match.fixture.date).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Football;
