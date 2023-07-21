import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Confirmed from "./components/Confirmed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Reservation from "./components/Reservation";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmed" element={<Confirmed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
