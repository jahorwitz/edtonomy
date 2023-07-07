import "./Article.css";

import Footer from "./footer";
import Header from "./header";
import SetupProfilePage from "./setup-profile-page";
import Sidebar from "./sidebar";

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
