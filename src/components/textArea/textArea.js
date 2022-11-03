import React from "react";
import "./textArea.css";

export const TextArea = ({ name, tag, type, placeholder, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name} className="input-label">
        {tag}
      </label>
      <textarea
        className="input-text"
        type={type}
        name={name}
        value={defaultValue}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};
