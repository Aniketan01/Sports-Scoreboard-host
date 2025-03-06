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
      <h2 className="mb-3">Football Matches</h2>
      <div className="row">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div key={match.fixture.id} className="col-md-6 mb-3">
              <div className="card p-3">
                <h5>{match.teams.home.name} vs {match.teams.away.name}</h5>
                <p>
                  Score: {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
                </p>
                <p>Date: {new Date(match.fixture.date).toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No matches available</p>
        )}
      </div>
    </div>
  );
};

export default Football;
