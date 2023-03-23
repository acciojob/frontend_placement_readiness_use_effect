import React, { useState, useEffect } from "react";

const GenerateToken = () => {
  const [token, setToken] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {}, []);

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick} disabled={isDisabled}>
        Generate Token
      </button>
      {isDisabled && <p>A token has already been generated: {token}</p>}
    </div>
  );
};

export default GenerateToken;
