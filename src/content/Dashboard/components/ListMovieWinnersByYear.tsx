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

interface IProps {
  id: string;
  year: string;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export default function ListMovieWinnersByYear() {
  const { setValue, getValues } = useForm({
    defaultValues: {
      year: "0",
    },
  });

  const { data, isLoading, isError, refetch } = useListMovieWinnersByYear(getValues('year'));

  if (isLoading) return <Loader />;
  if (isError) return <span>Não foi possível buscar os dados</span>;

  const onFilter = async () => {
    refetch();
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
            onSelected={(e) => setValue("year", e)}
            name="year"
            label="Selecione um ano"
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
