import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="main-container">
      {/* Lewa część - Banner */}
      <div className="left-side">
        <div className="banner">Banner</div>
      </div>

      {/* Środkowa część - Dostępne zakłady */}
      <div className="center-side">
        <div className="bets">Dostępne Zakłady</div>
      </div>

      {/* Prawa część - Zakłady użytkownika */}
      <div className="right-side">
        <div className="user-bets">Zakłady Użytkownika</div>
      </div>
    </main>
  );
};

export default Dashboard;
