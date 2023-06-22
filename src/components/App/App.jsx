import "./App.css";

import Article from "../Article/Article";

import Footer from "../Article/Footer";
import Header from "../Article/header";
import SetupProfilePage from "../Article/SetupProfilePage";
import Sidebar from "../Article/Sidebar";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Article sidebar={<Sidebar />} content={<SetupProfilePage />} />

      <Footer />
    </div>
  );
}
