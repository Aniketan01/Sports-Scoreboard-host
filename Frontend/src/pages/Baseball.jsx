import React, { useState, useEffect } from "react";
import axios from "axios";

const Baseball = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://v1.baseball.api-sports.io/games", {
        headers: {
          "x-apisports-key": import.meta.env.VITE_BASEBALL_API_KEY,
        },
        params: { league: 1, season: 2023 },
      })
      .then((response) => setMatches(response.data.response))
      .catch((error) => console.error("Error fetching baseball matches:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Baseball (MLB) Matches - Season 2023</h2>
      <div className="row">
        {matches.map((match) => (
          <div key={match.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-center fw-bold">
                {match.teams.home.name} vs {match.teams.away.name}
              </div>
              <div className="card-body text-center">
                <h5 className="fw-bold">
                  Score: {match.scores?.home?.total} - {match.scores?.away?.total}
                </h5>
                <p className="text-muted">{match.status.long}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Baseball;
