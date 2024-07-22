import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { changeSortingOrder } from "../store";

export default function SortingOptions() {
  const dispatch = useDispatch();
  const currentSortingOption = useSelector((state: any) => {
    return state.articles.sorting;
  });

  const handleDateSorting = (e: any) => {
    if (e.target.checked) {
      dispatch(changeSortingOrder("date-asc"));
    } else {
      dispatch(changeSortingOrder(""));
    }
  };
  const handleTitleSorting = (e: any) => {
    if (e.target.checked) {
      dispatch(changeSortingOrder("title-asc"));
    } else {
      dispatch(changeSortingOrder(""));
    }
  };

  const handleSortOrder = () => {
    const temp = currentSortingOption.split("-")[1];
    if (temp === "asc") {
      dispatch(changeSortingOrder(currentSortingOption.split("-")[0] + "-dsc"));
    } else {
      dispatch(changeSortingOrder(currentSortingOption.split("-")[0] + "-asc"));
    }
  };

  const arrowDown = (
    <GoArrowDown
      style={{ cursor: "pointer" }}
      onClick={handleSortOrder}
    ></GoArrowDown>
  );

  const arrowUp = (
    <GoArrowUp
      style={{ cursor: "pointer" }}
      onClick={handleSortOrder}
    ></GoArrowUp>
  );

  return (
    <div>
      <p style={{ fontWeight: "bold", backgroundColor: '#F8F9FA', width: "90%" }}>Sort By</p>
      <div>
        <input
          checked={currentSortingOption.split("-")[0] === "date"}
          onChange={handleDateSorting}
          type="checkbox"
        />
        <label>Date</label>
        <div className="sort-icons">
          {currentSortingOption.split("-")[0] === "date" &&
            currentSortingOption.split("-")[1] === "asc" &&
            arrowDown}
          {currentSortingOption.split("-")[0] === "date" &&
            currentSortingOption.split("-")[1] === "dsc" &&
            arrowUp}
        </div>
      </div>
      <div>
        <input
          onChange={handleTitleSorting}
          checked={currentSortingOption.split("-")[0] === "title"}
          type="checkbox"
        />
        <label>Title</label>
        <div className="sort-icons">
          {currentSortingOption.split("-")[0] === "title" &&
            currentSortingOption.split("-")[1] === "asc" &&
            arrowDown}
          {currentSortingOption.split("-")[0] === "title" &&
            currentSortingOption.split("-")[1] === "dsc" &&
            arrowUp}
        </div>
      </div>
    </div>
  );
}
