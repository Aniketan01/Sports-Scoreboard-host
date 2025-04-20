import React, { useEffect, useState } from "react";

const Rugby = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.balldontlie.io/nfl/v1/games", {
      headers: {
        Authorization: import.meta.env.RUGBY_API_KEY,  // Directly use the API key from .env
      },
    })
      .then((response) => response.json())
      .then((data) => setGames(data.data))  // Assuming the data contains a list of games
      .catch((error) => console.error("Error fetching NFL games:", error));  // Catch any errors
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">NFL Matches</h2>  {/* Title updated for NFL games */}
      <div className="row">
        {games.map((game, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-center fw-bold">
                {game.home_team.full_name} vs {game.visitor_team.full_name}  {/* Display NFL teams */}
              </div>
              <div className="card-body text-center">
                <p><strong>Score:</strong> {game.home_team_score} - {game.visitor_team_score}</p>  {/* Display the game scores */}
                <p className="text-muted">{game.status}</p>  {/* Display game status (e.g., finished, upcoming) */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rugby;
