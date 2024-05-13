import { DashboardApi } from "@/services/dashboard.service";
import { useQuery } from "react-query";

export const useListMovieWinnersByYear = (year: string) => {
  return useQuery({
    queryKey: ["getWinnersByYear"],
    queryFn: () => DashboardApi.getWinnersByYear(year),
  });
};
