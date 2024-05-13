import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./styles.css";

interface IProps {
  totalPage: number;
  onPagination: (e: any) => void;
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}

export default function Pagination({
  onPagination,
  totalPage,
  page,
  nextPage,
  prevPage,
}: IProps) {
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  const changeCurrentPage = (n: any) => {
    onPagination(n);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={prevPage}
            data-testid="prev-page"
          >
            <FiArrowLeft />
          </button>
        </li>

        {numbers.map((n: any, i) => (
          <li className={`page-item`} key={i}>
            <button
              className={`page-item ${page === n ? "page-item-active" : ""}`}
              onClick={() => changeCurrentPage(n)}
            >
              {n}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button
            className="page-link"
            onClick={nextPage}
            data-testid="next-page"
          >
            <FiArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
