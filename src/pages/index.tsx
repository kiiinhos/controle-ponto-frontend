import React, { useState } from "react";
import Button from "@/components/Button";
import UserInput from "@/components/UserInput";
import Title from "@/components/Title";
import Dashboard from "@/components/Dashboard";

const Home: React.FC = () => {
  const [userCode, setUserCode] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleConfirmClick = () => {
    setShowDashboard(true);
  };

  const handleReturnToHome = () => {
    setShowDashboard(false);
    setUserCode("");
  };

  return (
    <div
      style={{
        backgroundColor: "#151F2B",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {showDashboard ? (
        <Dashboard userCode={userCode} onReturnToHome={handleReturnToHome} />
      ) : (
        <>
          <main
            className="flex flex-col items-center p-4"
            style={{ textAlign: "center", color: "#fff" }}
          >
            <div className="w-96 mb-4 flex items-center">
              <Title text="Ponto Ilumeo" />
            </div>
            <UserInput placeholder="Código do Usuário" onChange={setUserCode} />
            <Button
              label="Confirmar"
              onClick={handleConfirmClick}
              style={{
                width: "365px",
                height: "47px",
                borderRadius: "4px",
                backgroundColor: "#FE8A00",
                color: "#1E2733",
                marginTop: "20px",
              }}
            />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
