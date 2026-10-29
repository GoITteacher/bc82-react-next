import ReactPaginate from "react-paginate";
import css from "./SongsPagination.module.css";
interface SongsPaginationProps {
  pageCount: number;
  onChangePage: (x: number) => void;
}

const SongsPagination = ({ pageCount, onChangePage }: SongsPaginationProps) => {
  const handlePageChange = (event: { selected: number }) => {
    const page = event.selected + 1;
    onChangePage(page);
  };

  return (
    <div className={css["songsPagination"]}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default SongsPagination;
