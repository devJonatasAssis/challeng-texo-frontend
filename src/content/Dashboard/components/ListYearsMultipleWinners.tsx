"use client";

import "./styles.css";
import Loader from "@/components/Loader";
import { useListYearsMultipleWinners } from "@/hooks";

interface ITopThreeStudiosWinner {
  year: string;
  winnerCount: number;
}

export default function ListYearsMultipleWinners() {
  const { data, isLoading, isError } = useListYearsMultipleWinners();

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
