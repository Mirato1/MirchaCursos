import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
