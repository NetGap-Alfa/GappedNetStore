import React from "react";
import "./textArea.css";

export const TextArea = ({
  name,
  tag,
  type,
  placeholder,
  defaultValue,
  otherLabelProps,
  otherInputProps,
}) => {
  return (
    <div className="input-div">
      <label htmlFor={name} className={`input-label ${otherLabelProps}`}>
        {tag}
      </label>
      <textarea
        className={`input-text ${otherInputProps}`}
        type={type}
        name={name}
        value={defaultValue}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};
