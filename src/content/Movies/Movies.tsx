import Header from "@/components/Header";
import "./styles.css";
import Pagination from "@/components/Pagination";
import { useQuery } from "react-query";
import { DashboardApi } from "@/services/dashboard.service";
import Loader from "@/components/Loader";
import { useState } from "react";
import FilterMovies from "./components/FilterMovies";
import { useForm } from "react-hook-form";

interface IDataProps {
  id: string;
  year: string;
  title: string;
  winner: boolean;
}

export default function Movies() {
  const [page, setPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  const form = useForm();

  const { year, winner } = form.watch();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [page, "getMovies"],
    queryFn: () => DashboardApi.getMovies({ page, size: 10 }),
  });

  const onPagination = (value) => {
    setPage(value);
  };

  const handleFilter = async () => {
    try {
      setIsFiltered(true);
      const response = await DashboardApi.getMovies({ page, winner, year });
      setMoviesFiltered(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchAll = () => {
    setIsFiltered(false);
    form.resetField("year", undefined);
    form.resetField("winner", undefined);
    refetch();
  };

  if (isLoading)
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  if (isError) return <span>Não foi possível buscar os dados</span>;

  return (
    <>
      <Header />

      <div className="table-wrapper">
        <div className="table-content">
          <span className="table-title">List movies</span>

          <div className="filter-wrapper">
            <FilterMovies
              form={form}
              onFilter={handleFilter}
              onSearchAll={handleSearchAll}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Year</th>
                <th>Title</th>
                <th>Winner?</th>
              </tr>

              {isFiltered ? (
                <>
                  {moviesFiltered.map((item: IDataProps) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.year}</td>
                      <td>{item.title}</td>
                      <td>{item.winner ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {data.content.map((item: IDataProps) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.year}</td>
                      <td>{item.title}</td>
                      <td>{item.winner ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>

          {!isFiltered ? (
            <div className="pagination-wrapper">
              <Pagination
                onPagination={onPagination}
                nextPage={() => setPage(page + 1)}
                prevPage={() => setPage(page - 1)}
                totalPage={data.totalPages}
                page={page}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
