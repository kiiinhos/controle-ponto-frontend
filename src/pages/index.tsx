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
          <Title text="Ponto Illumeo" />
          <main
            className="container mx-auto p-4"
            style={{ textAlign: "center", color: "#fff" }}
          >
            <UserInput
              placeholder="Código do Usuário"
              onChange={(e) => setUserCode(e)}
            />
            <Button
              label="Confirmar"
              onClick={handleConfirmClick}
              style={{
                width: "365px",
                height: "47px",
                borderRadius: "4px",
                backgroundColor: "#FE8A00",
                color: "#1E2733",
                marginTop: "4vw",
              }}
            />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
