"use client";

import "./styles.css";
import Loader from "@/components/Loader";
import { useListTopThreeStudiosWinners } from "@/hooks/useListTopThreeStudiosWinners";

interface ITopThreeStudiosWinner {
  name: string;
  winCount: number;
}

export default function ListTopThreeStudiosWinners() {
  const { data, isLoading, isError } = useListTopThreeStudiosWinners();

  if (isLoading) return <Loader />;
  if (isError) return <span>Não foi possível buscar os dados</span>;

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <span className="table-title">Top 3 studios with winners</span>

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Win Count</th>
            </tr>

            {data.studios
              .map((item: ITopThreeStudiosWinner, index: number) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.winCount}</td>
                </tr>
              ))
              .slice(0, 3)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
