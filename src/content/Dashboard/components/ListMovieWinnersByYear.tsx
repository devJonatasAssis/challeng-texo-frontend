"use client";

import "./styles.css";
import { DashboardApi } from "@/services/dashboard.service";
import { use, useState } from "react";
import SelectInput from "@/components/SelectInput";
import { FiSearch } from "react-icons/fi";
import { mockYears } from "@/mock/years";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import Loader from "@/components/Loader";
import { useListMovieWinnersByYear } from "@/hooks/useListMovieWinnersByYear";
import Grid from "@/components/Grid";
import { Col } from "@/components/Col";
import { Button } from "@/components/Button";

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
  const [loading, setLoading] = useState(false);

  const { setValue, watch, getValues } = useForm();

  const { year } = watch();

  if (loading) return <Loader />;

  const onFilter = async () => {
    try {
      setLoading(true);
      const response = await DashboardApi.getWinnersByYear(year);
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <span className="table-title">List movie winners by year</span>

        <SelectInput
          data={(mockYears ?? []).map((item) => ({
            value: item.value,
            label: item.label,
          }))}
          onSelected={(e) => setValue("year", e)}
          name="year"
          label="Selecione um ano"
          value={getValues("year")}
        />

        <div className="button-filter">
          <Button onClick={onFilter} label="Filtrar" />
        </div>

        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Year</th>
              <th>Title</th>
            </tr>

            {data.map((item: IProps) => (
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
