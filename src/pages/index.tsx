import React, { useState } from "react";
import Button from "@/components/Button";
import UserInput from "@/components/UserInput";
import Title from "@/components/Title";
import EntryDashboard from "@/components/EntryDashboard";
import ExitDashboard from "@/components/ExitDashboard";

const Home: React.FC = () => {
  const [userCode, setUserCode] = useState("");
  const [showEntryDashboard, setShowEntryDashboard] = useState(false);
  const [showExitDashboard, setShowExitDashboard] = useState(false);

  const handleConfirmClick = () => {
    setShowEntryDashboard(true);
  };

  const handleSwitchToExit = () => {
    setShowEntryDashboard(false);
    setShowExitDashboard(true);
  };

  const handleReturnToHome = () => {
    setShowExitDashboard(false);
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
      {showEntryDashboard ? (
        <EntryDashboard
          userCode={userCode}
          onSwitchToExit={handleSwitchToExit}
          onReturnToHome={handleReturnToHome}
        />
      ) : showExitDashboard ? (
        <ExitDashboard
          userCode={userCode}
          onReturnToHome={handleReturnToHome}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Title text="Ponto Illumeo" />
          <UserInput
            placeholder="Código do Usuário"
            onChange={(e) => setUserCode(e)}
          />
          <Button
            label="Confirmar"
            onClick={handleConfirmClick}
            style={{
              width: "95%",
              height: "47px",
              borderRadius: "4px",
              backgroundColor: "#FE8A00",
              color: "#1E2733",
              marginTop: "2vw",
              fontWeight: "bold",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
