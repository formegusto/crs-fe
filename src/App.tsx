import { Route, Routes } from "react-router-dom";
import RootPage from "./pages";
import MainPage from "./pages/MainPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
