import React, { useEffect, useState } from "react";

export const MillionIdea = () => {
  const [inputs, setInputs] = useState({ marketSize: 0, avgTicket: 0 });

  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(inputs.marketSize * inputs.avgTicket);
  }, [inputs.avgTicket, inputs.marketSize]);

  return (
    <div>
      <input
        type="number"
        placeholder="Market Size"
        value={inputs.marketSize !== 0 ? inputs.marketSize : ""}
        onChange={(e) => setInputs({ ...inputs, marketSize: +e.target.value })}
      />
      <input
        type="number"
        placeholder="Avg Spent Per Month"
        value={inputs.avgTicket !== 0 ? inputs.avgTicket : ""}
        onChange={(e) => setInputs({ ...inputs, avgTicket: +e.target.value })}
      />
      <h1>{result}</h1>
    </div>
  );
};
