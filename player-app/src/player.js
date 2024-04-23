import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={imageURL} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  imageURL: "https://res.cloudinary.com/duc20y5dw/image/upload/v1713895102/messi_mnf6ul.jpg",
};

export default Player;
