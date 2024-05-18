import React, { useState } from "react";

interface DashboardProps {
  userCode: string;
  onReturnToHome: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userCode, onReturnToHome }) => {
  const [isEntry, setIsEntry] = useState(true);

  const handleButtonClick = () => {
    if (isEntry) {
      setIsEntry(false);
    } else {
      onReturnToHome();
    }
  };

  return (
    <div style={{ padding: "20px", color: "#fff", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h2>Relógio de ponto</h2>
          <p>{isEntry ? "0h 0m" : "6h 13m"}</p>
          <p>Horas de hoje</p>
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: "#FE8A00",
              color: "#1E2733",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {isEntry ? "Hora de entrada" : "Hora de saída"}
          </button>
        </div>
        <div style={{ textAlign: "right" }}>
          <h2>Código do usuário</h2>
          <p>{userCode}</p>
          <p>#3SXYFGF</p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3
          style={{
            borderBottom: "2px solid #FE8A00",
            display: "inline-block",
            paddingBottom: "5px",
          }}
        >
          Dias anteriores
        </h3>
        <div
          style={{ marginTop: "10px", maxHeight: "600px", overflowY: "auto" }}
        >
          {[
            "03/11/23",
            "04/11/23",
            "05/11/23",
            "06/11/23",
            "09/11/23",
            "22/11/23",
            "24/12/23",
            "25/12/23",
            "26/12/23",
            "27/12/23",
            "28/12/23",
            "29/12/23",
          ].map((date, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #333",
              }}
            >
              <span>{date}</span>
              <span>7h 30m</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
