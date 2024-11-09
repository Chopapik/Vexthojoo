import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import axios from "axios";

import { PanelProvider } from "./context/PanelContext";
import AllPanels from "./components/AllPanels";
//api url:
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <>
      <Router>
        <PanelProvider>
          <AllPanels />
          <div className="bg-black h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/userpage" element={<UserPage />} />
            </Routes>
            <Footer />
          </div>
        </PanelProvider>
      </Router>
    </>
  );
}

export default App;
