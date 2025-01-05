import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Rules from "./pages/Rules";
import axios from "axios";
import AboutPage from "./pages/AboutPage";
import AllUsersList from "./pages/AllUsersList";

import { PanelProvider } from "./context/PanelContext";
import PanelsContainer from "./components/layout/PanelsContainer";
import { CookieAuthProvider } from "./context/CookieAuthContext";
import { CookieAcceptProvider } from "./context/CookieAcceptContext";
import PageContainer from "./components/layout/PageContainer";
import { PostsProvider } from "./context/PostsContext";

//api url:
axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

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
                  <Route path="/regulamin" element={<Rules />} />
                  <Route path="/oStronie" element={<AboutPage />} />
                  <Route path="/listaUzytkownikow" element={<AllUsersList />} />
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
