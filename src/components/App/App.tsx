import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className={css.app}>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
