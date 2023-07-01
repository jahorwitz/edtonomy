import "./Article.css";

import Footer from "../Article/Footer";
import Header from "../Article/header";
import SetupProfilePage from "./SetupProfilePage";
import Sidebar from "./Sidebar";

export default function Article() {
  return (
    <div className="article">
      <Header />
      <div className="sidebar__profile--container">
        <Sidebar />
        <SetupProfilePage />
      </div>
      <Footer />
    </div>
  );
}
