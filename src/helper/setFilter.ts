import paginatedContent from "./paginatedContent";

export default function setFilters(
  selectedAuthors: any,
  selectedCategories: any,
  initialData: any,
  currentPage: number
) {
  if (selectedAuthors.length === 0) {
    if (selectedCategories.length === 0) {
      return paginatedContent(initialData, currentPage);
    }
  }

  // category wise filtering
  let categoryFilteredData = initialData;
  if (selectedCategories.length)
    categoryFilteredData = initialData.filter((d: any) => {
      return selectedCategories.indexOf(d.source) !== -1;
    });

  // author wise filtering
  let authorFilteredData = categoryFilteredData;
  if (selectedAuthors.length)
    authorFilteredData = categoryFilteredData.filter((d: any) => {
      return selectedAuthors.indexOf(d.author) !== -1;
    });

  return paginatedContent(authorFilteredData, currentPage);
}
