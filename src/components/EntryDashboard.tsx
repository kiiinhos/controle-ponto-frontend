import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import {
  registerEntry,
  getEntriesByUserCode,
  getUserHistory,
} from "../services/registerService";
import { Entry, UserHistory } from "../types/types";
import { formatDateToBR } from "../utils/dateUtils";

interface EntryDashboardProps {
  userCode: string;
  onSwitchToExit: () => void;
  onReturnToHome: () => void;
}

const EntryDashboard: React.FC<EntryDashboardProps> = ({
  userCode,
  onSwitchToExit,
}) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [workTimeToday, setWorkTimeToday] = useState<string>("0h 0m");
  const [history, setHistory] = useState<UserHistory[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchEntriesAndHistory = async () => {
      const userEntries = await getEntriesByUserCode(userCode);
      setEntries(userEntries);
      const userHistory = await getUserHistory(userCode);
      setHistory(userHistory);

      if (userEntries.length > 0) {
        const latestEntry = userEntries[userEntries.length - 1];
        setCurrentEntry(latestEntry);
      }

      const today = new Date().toISOString().split("T")[0];
      const latestHistory = userHistory.find(
        (entry) => entry.dateExit === today
      );
      if (latestHistory) {
        setWorkTimeToday(latestHistory.workTime);
      }
    };

    fetchEntriesAndHistory();
  }, [userCode]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterEntry = async () => {
    const now = new Date();
    const dateEntry = now.toISOString().split("T")[0];

    const latestEntryToday = entries.find(
      (entry) => entry.dateEntry === dateEntry
    );

    if (latestEntryToday) {
      setErrorMessage(
        "Por favor, registre uma saída antes de registrar uma nova entrada. Você sera redirecionado"
      );
      setTimeout(() => {
        setErrorMessage("");
        onSwitchToExit();
      }, 6000);
      return;
    } else {
      onSwitchToExit();
    }

    const hourEntry = now.toTimeString().split(" ")[0];
    const newEntry = await registerEntry(userCode, hourEntry, dateEntry);
    setCurrentEntry(newEntry);
    setEntries([...entries, newEntry]);
    onSwitchToExit();
    const userHistory = await getUserHistory(userCode);
    setHistory(userHistory);

    const updatedHistory = userHistory.find(
      (entry) => entry.dateExit === dateEntry
    );
    if (updatedHistory) {
      setWorkTimeToday(updatedHistory.workTime);
    }
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
      {errorMessage && (
        <div
          style={{
            color: "red",
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {errorMessage}
        </div>
      )}
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
            <p>{currentTime}</p>
            <p>Horas de hoje</p>
            <p>{workTimeToday}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h2 style={{ margin: 0 }}>#{userCode}</h2>
            <p>Usuário</p>
          </div>
        </div>
        <Button
          label="Hora de entrada"
          onClick={handleRegisterEntry}
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
            {history.map((entry, index) => (
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
                <span>{formatDateToBR(entry.dateEntry)}</span>
                <span>
                  {entry.hourEntry} - {entry.hourExit}
                </span>
                <span>{entry.workTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryDashboard;
