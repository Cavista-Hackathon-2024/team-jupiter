import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import ReportPage from "./pages/Report/ReportPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </>
  );
}

export default App;
