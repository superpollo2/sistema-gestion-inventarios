import React from 'react';

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
    <div className="flex items-center ">
      <button className='font-bold text-slate-200 text-4xl pr-2' onClick={handleDecrement}>-</button>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border border-gray-400 p-2 font-semibold text-slate-600 text-center bg-slate-100 rounded-md"
      />
      <button className='font-bold text-3xl pl-2 text-slate-200 ' onClick={handleIncrement}>+</button>
    </div>
  );
};

export {TextField} ;