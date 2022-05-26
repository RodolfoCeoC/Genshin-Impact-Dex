

function App() {
  const opciones = async () => {
   const respuesta = await fetch("https://api.genshin.dev/");
   const types = await respuesta.json();
    console.log({types});
  };

  opciones();

  return (
    <div className="App container">
      <h1>Genshin Impact</h1>
      <hr />
      <select>
        <option value="">Seleccione un elemento
        </option>
        <option value="artifiacts">artifacts</option>
        <option value="boss">boss</option>
        <option value="characters">character</option>
        <option value="consumables">consumables</option>
        <option value="domains">domains</option>
        <option value="elements">elements</option>
        <option value="enemies">enemies</option>
        <option value="materials">materials</option>
        <option value="nations">nations</option>
        <option value="weapons">weapons</option>
      </select>
    </div>
  );
}

export default App;
