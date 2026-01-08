import { ChangeEvent, useState } from "react";

function NameInput() {
    const [name, setName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setName(newValue);
    };

    const clearInput = () => {
      setName("");
    }
    const upperName = () => {
      setName(name.toUpperCase())
    }

    return (
        <div>
            <input 
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <p>Hello, {name}!</p>
            {name && <p>Your name has {name.length} letters</p>}
            <button onClick={clearInput}>Clear Name</button>
            <button onClick={upperName}>Uppercase</button>
        </div>
    )
}

export default NameInput;