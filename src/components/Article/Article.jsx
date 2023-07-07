import "./Article.css";

import Footer from "./footer";
import Header from "./header";
import SetupProfilePage from "./setup-profile-page";
import Sidebar from "./sidebar";

export default function Article() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-row items-baseline">
        <Sidebar />
        <SetupProfilePage />
      </div>
      <Footer />
    </div>
  );
}
