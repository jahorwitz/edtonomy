import Article from "./Article";
import SetupProfilePage from "./SetupProfilePage";


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
  title: "Article",
  component: Article,
};

export const Default = () => (
  <Article
    sidebar={<Sidebar />}
    content={
      <>
        <SetupProfilePage />
      </>
    }
  />
);
