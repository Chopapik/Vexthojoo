import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-black h-screen">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
