import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1
      style={{
        fontFamily: "Montserrat",
        fontSize: "21.52px",
        color: "#fff",
        textAlign: "center",
        marginBottom: "20px",
        marginRight: "13vw",
      }}
    >
      Ponto <span style={{ fontWeight: 800 }}>{text.split(" ")[1]}</span>
    </h1>
  );
};

export default Title;
