export default function sortBy(sortingOrder: string, initialData: any) {
  switch (sortingOrder) {
    case "date-dsc":
      initialData.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      break;
    case "title-asc":
      initialData.sort((a: any, b: any) => {
        if (a.title > b.title) return 1;
        return -1;
      });
      break;
    case "title-dsc":
      initialData.sort((a: any, b: any) => {
        if (b.title > a.title) return 1;
        return -1;
      });
      break;
    default:
      initialData.sort((a: any, b: any) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  }
}
