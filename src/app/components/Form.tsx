import React, { useState } from "react";

type InputField = {
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC = () => {
  const [inputFields, setInputFields] = useState([
    { label: 'prescription title', value: '', handleChange: () => {} },
    { label: 'type', value: '', handleChange: () => {} },
    { label: 'description', value: '', handleChange: () => {} },
  ]);

  const handleFormChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((input, index) => {
        return (
          <div key={index}>
            <label htmlFor={input.label}>{input.label}</label>
            <input
              name={input.label}
              value={input.value}
              onChange={(event) => handleFormChange(index, event)}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;