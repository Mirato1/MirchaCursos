import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu sabor Favorito: </p>
//         <input
//           type="radio"
//           name="sabor"
//           id="lemon-pie"
//           value="lemon-pie"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="lemon-pie">Lemon Pie</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="chocolate"
//           value="chocolate"
//           defaultChecked
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="chocolate">Chocolate</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="vainilla"
//           value="vainilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vainilla">Vainilla</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="ddl"
//           value="ddl"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="ddl">Dulce de Leche</label>
//         <p>Elige tu lenguaje favorito</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">- - -</option>
//           <option value="js">JavaScript</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto términos y condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor Favorito: </p>
        <input type="radio" name="sabor" id="lemon-pie" value="lemon-pie" />
        <label htmlFor="lemon-pie">Lemon Pie</label>
        <input
          type="radio"
          name="sabor"
          id="chocolate"
          value="chocolate"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="chocolate">Chocolate</label>
        <input
          type="radio"
          name="sabor"
          id="vainilla"
          value="vainilla"
          onChange={handleChange}
        />
        <label htmlFor="vainilla">Vainilla</label>
        <input
          type="radio"
          name="sabor"
          id="ddl"
          value="ddl"
          onChange={handleChange}
        />
        <label htmlFor="ddl">Dulce de Leche</label>
        <p>Elige tu lenguaje favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
