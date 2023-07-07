import Article from "./article";
import Footer from "./footer";
import Header from "./header";
import SetupProfilePage from "./SetupProfilePage";
import Sidebar from "./sidebar";

import Questionnaire from "./questionnaire";

/*
storiesOf("Article", module)
  .add("Setup Profile", () => (
    <Article
      sidebar={<Sidebar />}
      content={<SetupProfilePage />}
    />
  ))
  */

/*
  storiesOf("Article/Setup Profile", module).add("Default", () => (
    <SetupProfilePage />
  ));
  */

export default {
  title: "article-viewer",
  component: Article,
};

export const article = () => (
  <div>
    <Article />
  </div>
);

export const header = () => <Header />;

export const sidebar = () => <Sidebar />;

export const profile = () => <SetupProfilePage />;

export const footer = () => <Footer />;

export const questionnaire = () => <Questionnaire />;
