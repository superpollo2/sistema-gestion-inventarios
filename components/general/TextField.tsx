import React, { useState } from 'react';

interface TextFieldProps {
  value: number;
  onChange: (value: number) => void;
}

const TextField = ({ value, onChange }: TextFieldProps) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <button className='font-bold text-4xl' onClick={handleDecrement}>-</button>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border border-gray-400 p-2 text-center"
      />
      <button className='font-bold text-3xl' onClick={handleIncrement}>+</button>
    </div>
  );
};

export {TextField} ;