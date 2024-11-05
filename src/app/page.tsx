"use client";

import React from "react";

export default function Home() {
  const [number, setNumber] = React.useState(0);

  return (
    <>
      <div>번호 : {number}</div>
      <div>
        <button onClick={() => setNumber(number + 1)}>증가</button>
        &nbsp;
        <button onClick={() => setNumber(number - 1)}>감소</button>
      </div>
    </>
  );
}
