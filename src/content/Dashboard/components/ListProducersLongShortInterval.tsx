"use client";

import "./styles.css";
import Loader from "@/components/Loader";
import { useListProducersLongShortInterval } from "@/hooks";

interface IProps {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export default function ListProducersLongShortInterval() {
  const { data, isLoading, isError } = useListProducersLongShortInterval();

  if (isLoading) return <Loader />;
  if (isError) return <span>Não foi possível buscar os dados</span>;

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <span className="table-title">
          Producers with longest and shortest interval between wins
        </span>

        <h2 className="subtitle">Maximum</h2>

        <table>
          <tbody>
            <tr>
              <th>Producer</th>
              <th>Interval</th>
              <th>Previous Year</th>
              <th>Following Year</th>
            </tr>

            {data.max.map((item: IProps, index: number) => (
              <tr key={index}>
                <td>{item.producer}</td>
                <td>{item.interval}</td>
                <td>{item.previousWin}</td>
                <td>{item.followingWin}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="subtitle">Minimun</h2>

        <table>
          <tbody>
            <tr>
              <th>Producer</th>
              <th>Interval</th>
              <th>Previous Year</th>
              <th>Following Year</th>
            </tr>

            {data.min.map((item: IProps, index: number) => (
              <tr key={index}>
                <td>{item.producer}</td>
                <td>{item.interval}</td>
                <td>{item.previousWin}</td>
                <td>{item.followingWin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
