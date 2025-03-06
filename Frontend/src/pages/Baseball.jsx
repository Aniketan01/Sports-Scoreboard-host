import React, { useState, useEffect } from "react";
import axios from "axios";

const Baseball = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBaseballData = async () => {
      try {
        const response = await axios.get("https://v1.baseball.api-sports.io/games", {
          headers: { "x-apisports-key": "d236dc816f53fad5c2b27fa586a8e00b" },
          params: { league: 1, season: 2023 }, // Change league ID if needed
        });

        console.log("Baseball API Response:", response.data);

        if (!response.data.response || response.data.response.length === 0) {
          setError("No baseball matches found.");
        } else {
          setMatches(response.data.response);
        }
      } catch (err) {
        console.error("Baseball API Error:", err);
        setError("Failed to load baseball data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBaseballData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-danger">⚾ Baseball (MLB) Matches - Season 2023</h2>
      {loading && <p className="text-warning">Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {matches.length > 0 ? (
        <div className="row">
          {matches.map((match) => (
            <div key={match.id} className="col-md-6">
              <div className="card border-danger mb-3 shadow">
                <div className="card-header bg-danger text-white">
                  {match.teams.home.name} vs {match.teams.away.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Score: {match.scores ? `${match.scores.home.total} - ${match.scores.away.total}` : "N/A"}
                  </h5>
                  <p className="card-text text-muted text-center">
                    {match.status.long}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-muted">No live baseball matches.</p>
      )}
    </div>
  );
};

export default Baseball;
