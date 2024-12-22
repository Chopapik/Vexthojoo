import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import axios from "axios";

import { PanelProvider } from "./context/PanelContext";
import PanelsContainer from "./components/PanelsContainer";
import { CookieAuthProvider } from "./context/CookieAuthContext";
import { CookieAcceptProvider } from "./context/CookieAcceptContext";
import PageContainer from "./components/PageContainer";

//api url:
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <Router>
      <CookieAcceptProvider>
        <CookieAuthProvider>
          <PanelProvider>
            <PanelsContainer />
            <PageContainer>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:username" element={<UserPage />} />
              </Routes>
              <Footer />
            </PageContainer>
          </PanelProvider>
        </CookieAuthProvider>
      </CookieAcceptProvider>
    </Router>
  );
}

export default App;
