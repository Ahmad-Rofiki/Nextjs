"use client"

import { useState } from "react";

export default function template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <>
      <div>
        <h1>tempalte {state}</h1>
        <button onClick={() => setState(state + 1)}>CLick</button>
        {children}
      </div>
    </>
  );
}
