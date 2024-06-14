import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export function Pagination() {
  return (
    <div className="pagination">
      <MdKeyboardArrowLeft className="pagination-btn" />
      <MdKeyboardArrowRight className="pagination-btn" />
    </div>
  );
}
