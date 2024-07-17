import AuthorFilter from "./AuthorFilter";
import CategoryFilter from "./CategoryFilter";
import SortingOptions from "./SortingOptions";

export default function Filters() {
  return (
    <div>
      <CategoryFilter></CategoryFilter>
      <AuthorFilter></AuthorFilter>
      <SortingOptions></SortingOptions>
    </div>
  );
}
