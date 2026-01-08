import { ChangeEvent, useState } from "react";

function Input2() {
  const [name, setName] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue);
  };

  const clearInput = () => {
    setName("");
  };

  const upperName = () => {
    setName(name.toUpperCase());
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={name}
      />
      <p>Hello, {name}!</p>
      {name && <p>Your name has {name.length} letters.</p>}
      <button onClick={clearInput}>Clear</button>
      <button onClick={upperName}>Uppercase</button>
    </div>
  );

}

export default Input2;