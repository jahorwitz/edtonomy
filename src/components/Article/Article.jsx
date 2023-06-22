import "./Article.css";

export default function Article({sidebar, content}) {
    return (
      <div className="article">
        <div className="sidebar">{sidebar}</div>
        <div className="content">{content}</div>
      </div>
    );
}

