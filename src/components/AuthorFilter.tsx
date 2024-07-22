import { useDispatch, useSelector } from "react-redux";
import { changeAuthorFilter } from "../store";

export default function AuthorFilter() {
  const dispatch = useDispatch();
  const { authorFilters, selectedAuthorFilters } = useSelector((state: any) => {
    // console.log(state.articles.appliedAuthorFilter);
    let authorFilters = Array.from(
      new Set(
        state.articles.data.map((d: any) => {
          return d.author;
        })
      )
    );
    return {
      authorFilters,
      selectedAuthorFilters: state.articles.appliedAuthorFilter,
    };
  });
  const renderedAuthor = authorFilters.map((f: any, index: number) => {
    const checked = selectedAuthorFilters.indexOf(f) !== -1;
    const categoryFilterChange = (f: string, e: boolean) => {
      const tempArr = [...selectedAuthorFilters];
      if (e) {
        tempArr.push(f);
      } else {
        const temp = selectedAuthorFilters.indexOf(f);
        tempArr.splice(temp, 1);
      }
      dispatch(changeAuthorFilter(tempArr));
    };
    return (
      <div key={index}>
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
      <p
        style={{ fontWeight: "bold", backgroundColor: "#F8F9FA", width: "90%" }}
      >
        Author
      </p>
      {renderedAuthor}
    </div>
  );
}
