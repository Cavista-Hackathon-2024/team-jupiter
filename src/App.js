import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>;
}

export default App;
