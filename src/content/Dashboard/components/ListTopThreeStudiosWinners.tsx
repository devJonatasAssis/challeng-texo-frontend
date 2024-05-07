"use client";

import { useQuery } from "react-query";
import "./styles.css";
import { DashboardApi } from "@/services/dashboard.service";
import Loader from "@/components/Loader";

interface ITopThreeStudiosWinner {
  name: string;
  winCount: number;
}

export default function ListTopThreeStudiosWinners() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getTopThreeStudios"],
    queryFn: () => DashboardApi.getStudiosWithWinCount(),
  });

  if (isLoading) return <Loader />;
  if (isError) return <span>Não foi possível buscar os dados</span>;

  const topThree = data.studios.slice(0, 3);

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

            {topThree.map((item: ITopThreeStudiosWinner, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.winCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
