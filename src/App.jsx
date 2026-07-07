import "./App.css";

import Navbar from "./components/Navbar";
import Column from "./components/Column";

function App() {
  return (
    <>
      <Navbar />

      <Column title="To Do" />

      <Column title="In Progress" />

      <Column title="Done" />
    </>
  );
}

export default App;