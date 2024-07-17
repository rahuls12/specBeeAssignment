import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { changeSortingOrder } from "../store";

export default function Pagination() {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector((state: any) => {
    return {
      totalPages: state.articles.totalPages,
      currentPage: state.articles.currentPage,
    };
  });

  let renderedContent;

  const handlePageChange = (op: number) => {
    dispatch(changeSortingOrder(currentPage + op));
  };
  if (currentPage !== 1 && currentPage !== totalPages) {
    renderedContent = (
      <div>
        <span
          onClick={() => {
            handlePageChange(-1);
          }}
        >
          {currentPage - 1}
        </span>
        <span
          onClick={() => {
            handlePageChange(0);
          }}
        >
          {currentPage}
        </span>
        <span
          onClick={() => {
            handlePageChange(1);
          }}
        >
          {currentPage + 1}
        </span>
      </div>
    );
  } else if (currentPage === 1) {
    renderedContent = (
      <div>
        <span
          onClick={() => {
            handlePageChange(0);
          }}
        >
          {currentPage}
        </span>
        <span
          onClick={() => {
            handlePageChange(1);
          }}
        >
          {currentPage + 1}
        </span>
        <span
          onClick={() => {
            handlePageChange(2);
          }}
        >
          {currentPage + 2}
        </span>
      </div>
    );
  } else if (currentPage === totalPages) {
    renderedContent = (
      <div>
        <span
          onClick={() => {
            handlePageChange(-2);
          }}
        >
          {currentPage - 2}
        </span>
        <span
          onClick={() => {
            handlePageChange(-1);
          }}
        >
          {currentPage - 1}
        </span>
        <span
          onClick={() => {
            handlePageChange(0);
          }}
        >
          {currentPage}
        </span>
      </div>
    );
  }

  return (
    <div>
      <FaAngleLeft
        onClick={() => {
          handlePageChange(-1);
        }}
      ></FaAngleLeft>
      {renderedContent}
      <FaAngleRight
        onClick={() => {
          handlePageChange(1);
        }}
      ></FaAngleRight>
    </div>
  );
}
