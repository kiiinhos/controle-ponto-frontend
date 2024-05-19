import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { registerExit, getExitsByUserCode } from "../services/registerService";
import { Exit } from "../types/types";
import { formatDateToBR } from "../utils/dateUtils";

interface ExitDashboardProps {
  userCode: string;
  onReturnToHome: () => void;
}

const ExitDashboard: React.FC<ExitDashboardProps> = ({
  userCode,
  onReturnToHome,
}) => {
  const [exits, setExits] = useState<Exit[]>([]);
  const [currentExit, setCurrentExit] = useState<Exit | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const fetchExits = async () => {
      const userExits = await getExitsByUserCode(userCode);
      setExits(userExits);
    };

    fetchExits();
  }, [userCode]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime(); // Atualiza a hora imediatamente
    const interval = setInterval(updateTime, 1000); // Atualiza a cada segundo
    return () => clearInterval(interval);
  }, []);

  const handleRegisterExit = async () => {
    const now = new Date();
    const hourExit = now.toTimeString().split(" ")[0]; // Formato HH:MM:SS
    const dateExit = now.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    const newExit = await registerExit(userCode, hourExit, dateExit);
    setCurrentExit(newExit);
    setExits([...exits, newExit]);
  };

  return (
    <div
      style={{
        padding: "20px",
        color: "#fff",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "400px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Relógio de ponto</h2>
            <p>{currentExit ? `${currentExit.hourExit}` : currentTime}</p>
            <p>Horas de hoje</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h2 style={{ margin: 0 }}>#{userCode}</h2>
            <p>Usuário</p>
          </div>
        </div>
        <Button
          label="Hora de saída"
          onClick={handleRegisterExit}
          style={{
            backgroundColor: "#FE8A00",
            color: "#1E2733",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            marginTop: "10px",
            width: "400px",
            height: "47px",
            fontWeight: "bold",
          }}
        />
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
            style={{
              marginTop: "10px",
              maxHeight: "800px",
              width: "400px",
              overflowY: "auto",
            }}
          >
            {exits.map((exit, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #333",
                  width: "100%",
                  height: "41px",
                  backgroundColor: "rgba(217, 217, 217, 0.05)",
                  borderRadius: "4px",
                  marginBottom: "5%",
                }}
              >
                <span>{formatDateToBR(exit.dateExit)}</span>
                <span>{exit.hourExit}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          label="Voltar"
          onClick={onReturnToHome}
          style={{
            marginTop: "20px",
            backgroundColor: "#FE8A00",
            color: "#1E2733",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            width: "400px",
            height: "47px",
          }}
        />
      </div>
    </div>
  );
};

export default ExitDashboard;
