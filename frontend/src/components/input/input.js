import React from "react";
import "./input.css";

export const Input = ({
  name,
  tag,
  type,
  placeholder,
  defaultValue,
  otherLabelProps,
  otherInputProps,
  disabled,
}) => {
  return (
    <div className="input-div">
      <label htmlFor={name} className={`input-label ${otherLabelProps}`}>
        {tag}
      </label>
      <input
        className={`input-text ${otherInputProps}`}
        type={type}
        name={name}
        value={defaultValue}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
