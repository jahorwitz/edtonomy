import "./Article.css";

export default function Article({ sidebar, content }) {
  return (
    <div className="article">
      <div className="article__container">
        <div className="sidebar">{sidebar}</div>
        <div className="profile">{content}</div>
      </div>
    </div>
  );
}
