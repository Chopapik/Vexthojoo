import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import axios from "axios";

import { PanelProvider } from "./context/PanelContext";
import PanelsContainer from "./components/layout/PanelsContainer";
import { CookieAuthProvider } from "./context/CookieAuthContext";
import { CookieAcceptProvider } from "./context/CookieAcceptContext";
import PageContainer from "./components/layout/PageContainer";
import { PostsProvider } from "./context/PostsContext";

//api url:
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <Router>
      <CookieAcceptProvider>
        <CookieAuthProvider>
          <PostsProvider>
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
          </PostsProvider>
        </CookieAuthProvider>
      </CookieAcceptProvider>
    </Router>
  );
}

export default App;
