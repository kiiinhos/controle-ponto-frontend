import React, { useState, ChangeEvent } from "react";

interface UserInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.toUpperCase();
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "365px",
        height: "60px",
        position: "absolute",
        top: "386px",
        left: "457px",
        marginLeft: "16.7vw",
        borderRadius: "4px",
        backgroundColor: "#1E2733",
      }}
    >
      <input
        type="text"
        id="username"
        required
        className="w-full h-full px-4 text-sm peer bg-gray-900 outline-none text-white"
        value={value}
        onChange={handleChange}
      />
      <label
        htmlFor="username"
        className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-white"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default UserInput;
