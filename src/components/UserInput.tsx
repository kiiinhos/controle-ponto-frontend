import React, { useState, ChangeEvent } from "react";

interface UserInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}

const UserInput: React.FC<UserInputProps> = ({
  placeholder,
  onChange,
  className,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.toUpperCase();
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div
      className={`relative w-96 h-16 rounded-md flex items-center px-4 bg-gray-800 ${className}`}
      style={{ marginTop: "20px" }}
    >
      <input
        type="text"
        id="username"
        required
        className="w-full h-full bg-transparent outline-none text-white pt-4"
        value={value}
        onChange={handleChange}
        placeholder=""
      />
      <label
        htmlFor="username"
        className="absolute top-0 left-4 text-gray-500 transition-all transform -translate-y-1/2 text-xs pt-2"
        style={{ pointerEvents: "none" }}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default UserInput;
