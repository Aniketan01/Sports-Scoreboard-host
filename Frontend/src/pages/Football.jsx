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
      <h2 className="mb-4">Football Matches</h2>
      <div className="row">
        {matches.map((match, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><strong>{match.teams.home.name} vs {match.teams.away.name}</strong></h4>
                <strong><p className="card-text">Score: {match.goals.home ?? "-"} - {match.goals.away ?? "-"}</p></strong>
                <h6 className="card-text">Date: {new Date(match.fixture.date).toLocaleString()}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Football;
