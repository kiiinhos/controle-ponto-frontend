import React, { useState } from "react";
import Button from "@/components/Button";
import UserInput from "@/components/UserInput";
import Title from "@/components/Title";
import { getUserByCode } from "../services/userService";

const Home: React.FC = () => {
  const [userCode, setUserCode] = useState("");

  const handleConfirmClick = async () => {
    try {
      const user = await getUserByCode(userCode);
      console.log("Usuário encontrado:", user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao buscar usuário:", error.message);
      } else {
        console.error("Erro desconhecido ao buscar usuário:", error);
      }
    }
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
      <Title text="Ponto Illumeo" />

      <main
        className="container mx-auto p-4"
        style={{ textAlign: "center", color: "#fff" }}
      >
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
            marginTop: "4vw",
          }}
        />
      </main>
    </div>
  );
};

export default Home;
