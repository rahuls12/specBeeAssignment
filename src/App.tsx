import ArticleList from "./components/ArticleList";
import Filters from "./components/Filters";

export default function App() {
  return (
    <div className="main-grid-container">
      <Filters />
      <ArticleList />
    </div>
  );
}
