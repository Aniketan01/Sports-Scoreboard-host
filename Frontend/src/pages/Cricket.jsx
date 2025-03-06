import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cricket() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using a different endpoint from cricketdata.org that provides matches
  const API_KEY = 'e8d608da-0d15-44e3-a070-e9dba9efaa51';
  const API_URL = 'https://api.cricapi.com/v1/matches';  // Changed to matches endpoint

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${API_URL}`, {
          params: {
            apikey: API_KEY,
            offset: 0,
            date: new Date().toISOString().split('T')[0]  // Get today's matches
          }
        });

        console.log('API Response:', response.data); // For debugging

        if (response.data && response.data.data) {
          setMatches(response.data.data);
        } else {
          setError('No match data available');
        }
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err); // For debugging
        setError(err.response?.data?.message || 'Failed to fetch match data');
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // For debugging purposes
  useEffect(() => {
    console.log('Current matches:', matches);
  }, [matches]);

  if (loading) {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // For demonstration, let's add some sample data if API is not working
  const sampleMatches = [
    {
      id: 1,
      name: "India vs Australia",
      matchType: "T20",
      status: "India won by 6 wickets",
      dateTimeGMT: "2025-03-05T12:25:11",
      teams: ["India", "Australia"],
      score: [
        { r: 185, w: 4, o: "20.0" },
        { r: 181, w: 7, o: "20.0" }
      ],
      venue: "Melbourne Cricket Ground"
    },
    {
      id: 2,
      name: "England vs South Africa",
      matchType: "ODI",
      status: "Live",
      dateTimeGMT: "2025-03-05T12:25:11",
      teams: ["England", "South Africa"],
      score: [
        { r: 245, w: 5, o: "35.2" },
        { r: 0, w: 0, o: "0.0" }
      ],
      venue: "Lord's Cricket Ground"
    }
  ];

  // Use sample data if no matches are available from API
  const displayMatches = matches.length > 0 ? matches : sampleMatches;

  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">
              <i className="bi bi-trophy-fill me-2"></i>
              Cricket Scores
            </h2>
            <div>
              <span className="me-3 text-muted">
                <i className="bi bi-clock me-1"></i>
                {new Date().toLocaleString()}
              </span>
              <button 
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise me-2"></i>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-warning" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
          <div className="mt-2">
            <small>Showing sample data for demonstration</small>
          </div>
        </div>
      )}

      {/* Matches Grid */}
      <div className="row g-4">
        {displayMatches.map((match) => (
          <div key={match.id} className="col-12 col-md-6 col-xl-4">
            <div className="card h-100 shadow-sm">
              {/* Match Header */}
              <div className="card-header bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-secondary">
                    {match.matchType}
                  </span>
                  <small className="text-muted">
                    {new Date(match.dateTimeGMT).toLocaleDateString()}
                  </small>
                </div>
                <h5 className="card-title mt-2 mb-0">{match.name}</h5>
              </div>

              {/* Match Body */}
              <div className="card-body">
                {/* Team 1 */}
                <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                  <div>
                    <h6 className="mb-0">{match.teams[0]}</h6>
                    {match.score?.[0] && (
                      <div className="mt-1">
                        <span className="fs-5 fw-bold">{match.score[0].r}/{match.score[0].w}</span>
                        <small className="text-muted ms-2">({match.score[0].o} ov)</small>
                      </div>
                    )}
                  </div>
                </div>

                {/* Team 2 */}
                <div className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                  <div>
                    <h6 className="mb-0">{match.teams[1]}</h6>
                    {match.score?.[1] && (
                      <div className="mt-1">
                        <span className="fs-5 fw-bold">{match.score[1].r}/{match.score[1].w}</span>
                        <small className="text-muted ms-2">({match.score[1].o} ov)</small>
                      </div>
                    )}
                  </div>
                </div>

                {/* Match Status */}
                <div className="mt-3">
                  <div className="alert alert-info py-2 mb-2">
                    {match.status}
                  </div>
                  {match.venue && (
                    <small className="text-muted d-block">
                      <i className="bi bi-geo-alt-fill me-1"></i>
                      {match.venue}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}