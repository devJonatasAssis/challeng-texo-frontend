"use client";

import "./styles.css";
import { DashboardApi } from "@/services/dashboard.service";
import { useState } from "react";
import SelectInput from "@/components/SelectInput";
import { FiSearch } from "react-icons/fi";
import { mockYears } from "@/mock/years";

interface IProps {
  id: string;
  year: string;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export default function ListMovieWinnersByYear() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("");

  const onFilter = async () => {
    try {
      const response = await DashboardApi.getWinnersByYear(year);
      setData(response);
    } catch (error) {
      alert("Não foi possível buscar os dados");
    }
  };

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <span className="table-title">List movie winners by year</span>

        <div className="search-input-wrapper">
          <SelectInput
            data={(mockYears ?? []).map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            onSelected={(e) => setYear(e)}
            name="year"
          />

          <button onClick={onFilter}>
            <FiSearch />
          </button>
        </div>

        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Year</th>
              <th>Title</th>
            </tr>

            {data?.map((item: IProps) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.year}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
