import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import axios from "axios";

import { PanelProvider } from "./context/PanelContext";
import PanelsContainer from "./components/PanelsContainer";
import { CookieAuthProvider } from "./context/CookieAuthContext";
//api url:
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <>
      <Router>
        <CookieAuthProvider>
          <PanelProvider>
            <PanelsContainer />
            <div className="bg-black h-full">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:username" element={<UserPage />} />
              </Routes>
              <Footer />
            </div>
          </PanelProvider>
        </CookieAuthProvider>
      </Router>
    </>
  );
}

export default App;
