import { useEffect, useState } from "react";
import css from "./Songs.module.css";
import { getSongs, Song } from "../../services/songs";
import ReactPaginate from "react-paginate";

const Songs = () => {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState<Song[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (page <= 0) return;

      const res = await getSongs(page);
      console.log(res);
      setItems(res.items);
      setHasNextPage(res.hasNextPage);
      setHasPreviousPage(res.hasPreviousPage);
      setTotalPages(res.totalPages);
    }
    fetchData();
  }, [page]);

  const handleChangePage = (data: { selected: number }) => {
    setPage(data.selected + 1);
  };

  return (
    <div className={css["songs"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id}>
              {item.title} - {item.artist}
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        className={css["pagination"]}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handleChangePage}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />

      {/* <div>
        {hasPreviousPage && (
          <button onClick={() => setPage(page - 1)}>Prev</button>
        )}
        <p>{page}</p>
        {hasNextPage && <button onClick={() => setPage(page + 1)}>Next</button>}
      </div> */}
    </div>
  );
};

export default Songs;
