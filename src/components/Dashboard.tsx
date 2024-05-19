import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import {
  registerEntry,
  registerExit,
  getEntriesByUserCode,
  getExitsByUserCode,
} from "../services/registerService";
import { Entry, Exit } from "../types/types";

interface DashboardProps {
  userCode: string;
  onReturnToHome: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userCode, onReturnToHome }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [exits, setExits] = useState<Exit[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const userEntries = await getEntriesByUserCode(userCode);
      setEntries(userEntries);
    };

    const fetchExits = async () => {
      const userExits = await getExitsByUserCode(userCode);
      setExits(userExits);
    };

    fetchEntries();
    fetchExits();
  }, [userCode]);

  const handleRegisterEntry = async () => {
    const newEntry = await registerEntry(userCode);
    setCurrentEntry(newEntry);
    setEntries([...entries, newEntry]);
  };

  const handleRegisterExit = async () => {
    const newExit = await registerExit(userCode);
    setExits([...exits, newExit]);
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
          <p>{currentEntry ? `${currentEntry.hourEntry}` : "0h 0m"}</p>
          <p>Horas de hoje</p>
          <Button label="Hora de entrada" onClick={handleRegisterEntry} />
          <Button label="Hora de saída" onClick={handleRegisterExit} />
        </div>
        <div style={{ textAlign: "right" }}>
          <h2>Código do usuário</h2>
          <p>{userCode}</p>
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
          {entries.map((entry, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #333",
              }}
            >
              <span>{entry.dateEntry}</span>
              <span>{entry.hourEntry}</span>
            </div>
          ))}
          {exits.map((exit, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #333",
              }}
            >
              <span>{exit.dateExit}</span>
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
        }}
      />
    </div>
  );
};

export default Dashboard;
