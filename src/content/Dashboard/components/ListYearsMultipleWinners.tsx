"use client";

import { useQuery } from "react-query";
import "./styles.css";
import { DashboardApi } from "@/services/dashboard.service";
import Loader from "@/components/Loader";

interface ITopThreeStudiosWinner {
  year: string;
  winnerCount: number;
}

export default function ListYearsMultipleWinners() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getYearMultipleWinners"],
    queryFn: () => DashboardApi.getYearsMultipleWinners(),
  });

  if (isLoading) return <Loader />;
  if (isError) return <span>Não foi possível buscar os dados</span>;

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <span className="table-title">List years with multiple winners</span>

        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Win Count</th>
            </tr>

            {data.years.map((item: ITopThreeStudiosWinner, index: number) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.winnerCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
