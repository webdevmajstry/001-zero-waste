import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  HelperText: string;
}

const Input: FC<InputProps> = ({ placeholder, name, HelperText }) => {
  return (
    <div className="input">
      <h1>name={name}</h1>
      <input type="input" placeholder={placeholder}></input>
      <p>HelperText={HelperText}</p>
    </div>
  );
};

export default Input;
