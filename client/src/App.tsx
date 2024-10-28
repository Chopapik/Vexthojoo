import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Router>
        <div className="bg-black h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
