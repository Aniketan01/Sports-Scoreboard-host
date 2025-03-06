import React, { useState, useEffect } from "react";
import axios from "axios";

const Baseball = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://v1.baseball.api-sports.io/games", {
        headers: { "x-apisports-key": "d236dc816f53fad5c2b27fa586a8e00b" },
        params: { league: 1, season: 2023 },
      })
      .then((response) => setMatches(response.data.response))
      .catch((error) => console.error("Error fetching baseball matches:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Baseball (MLB) Matches - Season 2023</h2>
      <div className="row">
        {matches.map((match) => (
          <div key={match.id} className="col-md-4 mb-4">
            <div className="card border-primary shadow">
              <div className="card-header bg-primary text-white text-center">
                {match.teams.home.name} vs {match.teams.away.name}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">
                  Score: {match.scores?.home?.total} - {match.scores?.away?.total}
                </h5>
                <p className="card-text text-muted">{match.status.long}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Baseball;
