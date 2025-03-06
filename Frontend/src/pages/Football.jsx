import React, { useEffect, useState } from "react";
import axios from "axios";

function Football() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFootballData = async () => {
      try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures", {
          headers: {
            "x-apisports-key": "d236dc816f53fad5c2b27fa586a8e00b",
          },
          params: {
            league: 2,
            season: 2023,
          },
        });

        console.log("API Response:", response.data);
        
        if (response.data && response.data.response) {
          setMatches(response.data.response);
        } else {
          console.error("Invalid API Response:", response.data);
          setError("Unexpected API response structure.");
        }
      } catch (err) {
        console.error("API Error:", err.response ? err.response.data : err.message);
        setError("Failed to load football data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFootballData();
  }, []);

  if (loading) return <div className="text-center my-5"><div className="spinner-border text-primary"></div></div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🏆 Champions League Scores</h2>

      {matches.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {matches.map((match) => (
            <div className="col" key={match.fixture.id}>
              <div className="card shadow-sm">
                <div className="card-header bg-light d-flex justify-content-between">
                  <span className="badge bg-primary">Champions League</span>
                  <small className="text-muted">{new Date(match.fixture.date).toLocaleDateString()}</small>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    {match.teams.home.name} <span className="text-danger">vs</span> {match.teams.away.name}
                  </h5>

                  <div className="d-flex justify-content-between mt-3">
                    <div className="text-center w-50">
                      <p className="fw-bold">{match.teams.home.name}</p>
                      <p className="fs-4">{match.goals?.home ?? "-"}</p>
                    </div>
                    <div className="text-center w-50">
                      <p className="fw-bold">{match.teams.away.name}</p>
                      <p className="fs-4">{match.goals?.away ?? "-"}</p>
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <span className="badge bg-success">{match.fixture.status.long}</span>
                  </div>
                </div>
                <div className="card-footer text-muted text-center">
                  {match.fixture.venue?.name ?? "Unknown Venue"}, {match.fixture.venue?.city ?? "Unknown City"}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning text-center">No matches available.</div>
      )}
    </div>
  );
}

export default Football;
