import AuthorFilter from "./AuthorFilter";
import CategoryFilter from "./CategoryFilter";
import SortingOptions from "./SortingOptions";

export default function Filters() {
  return (
    <div style={{ marginLeft: "15%", marginTop: "5%" }}>
      <CategoryFilter></CategoryFilter>
      <br/>
      <br/>
      <AuthorFilter></AuthorFilter>
      <br/>
      <br/>
      <SortingOptions></SortingOptions>
    </div>
  );
}
