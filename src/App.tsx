import ArticleList from "./components/ArticleList";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <div className="main-grid-container">
      <Filters />
      <ArticleList />
      <Pagination />
    </div>
  );
}
