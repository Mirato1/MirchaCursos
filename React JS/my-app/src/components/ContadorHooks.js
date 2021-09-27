import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setConstador] = useState(0);

  const sumar = () => setConstador(contador + 1);
  const restar = () => setConstador(contador - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
