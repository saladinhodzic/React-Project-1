import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export function Pagination({ brojStranica, setPage, page }) {
  const niz = [];
  for (let i = 1; i <= brojStranica; i++) {
    niz.push(i);
  }
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={() => setPage(page - 1)}>
        <MdKeyboardArrowLeft />
      </button>
      {niz.map((value, index) => {
        return (
          <button
            onClick={() => setPage(value)}
            key={index}
            style={{ fontSize: "1.25em" }}
            className="pagination-btn"
          >
            {value}
          </button>
        );
      })}
      <button className="pagination-btn" onClick={() => setPage(page + 1)}>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
