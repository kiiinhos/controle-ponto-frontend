import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1
      style={{
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "21.52px",
        lineHeight: "26.23px",
        textAlign: "center",
        marginBottom: "9vw",
        marginRight: "12.5vw",
        color: "#CFCFCF",
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
