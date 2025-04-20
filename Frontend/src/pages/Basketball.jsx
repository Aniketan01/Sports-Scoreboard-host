import React, { useEffect, useState } from "react";

const Basketball = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.balldontlie.io/v1/games", {
      headers: {
        Authorization: import.meta.env.BASKETBALL_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setGames(data.data))
      .catch((error) => console.error("Error fetching NBA games:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">NBA Matches</h2>
      <div className="row">
        {games.map((game, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-center fw-bold">
                {game.home_team.full_name} vs {game.visitor_team.full_name}
              </div>
              <div className="card-body text-center">
                <p><strong>Score:</strong> {game.home_team_score} - {game.visitor_team_score}</p>
                <p className="text-muted">{game.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basketball;
