import { useDispatch, useSelector } from "react-redux";
import { changeCategoryFilter } from "../store";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const { categoryFilters, selectedCategoryFilters } = useSelector(
    (state: any) => {
      // console.log(state.articles.appliedCategoryFilter);
      let categoryFilters = Array.from(
        new Set(
          state.articles.data.map((d: any) => {
            return d.source;
          })
        )
      );
      return {
        categoryFilters,
        selectedCategoryFilters: state.articles.appliedCategoryFilter,
      };
    }
  );
  const renderedCategory = categoryFilters.map((f: any) => {
    const checked = selectedCategoryFilters.indexOf(f) !== -1;
    const categoryFilterChange = (f: string, e: boolean) => {
      const tempArr = [...selectedCategoryFilters];
      if (e) {
        tempArr.push(f);
      } else {
        const temp = selectedCategoryFilters.indexOf(f);
        tempArr.splice(temp, 1);
      }
      dispatch(changeCategoryFilter(tempArr));
    };
    return (
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            categoryFilterChange(f, e.target.checked);
          }}
        />
        <label>{f}</label>
      </div>
    );
  });
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Category</p>
      {renderedCategory}
    </div>
  );
}
