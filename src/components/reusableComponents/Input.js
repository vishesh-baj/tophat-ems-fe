import React from "react";

const InputField = (
  ({ placeholder, type, value, name, change}) => {
    return (
      <div className="mb-3 pt-0">
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={change}
        />
      </div>
    );
  }
);

export default InputField;
