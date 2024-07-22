export default function paginatedContent(initData: any, currentPage: number) {
  return initData.filter((d: any, index: number) => {
    let startingIndex = (currentPage - 1) * 5;
    return index >= startingIndex && index < startingIndex + 5;
  });
}
