import { DashboardApi } from "@/services/dashboard.service";
import { useQuery } from "react-query";

export const useListYearsMultipleWinners = () => {
  return useQuery({
    queryKey: ["getYearMultipleWinners"],
    queryFn: () => DashboardApi.getYearsMultipleWinners(),
  });
};
