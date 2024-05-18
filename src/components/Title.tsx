import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-2xl font-bold mb-8 text-left w-full">
      {text.split(" ").map((word, index) =>
        index === 1 ? (
          <span key={index} className="font-extrabold text-white">
            {word}
          </span>
        ) : (
          `${word} `
        )
      )}
    </h1>
  );
};

export default Title;
