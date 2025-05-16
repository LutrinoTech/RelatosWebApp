import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/LintingPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing" element={<ListingPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
