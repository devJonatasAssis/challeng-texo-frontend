import { DashboardApi } from "@/services/dashboard.service";
import { useQuery } from "react-query";

export const useListTopThreeStudiosWinners = () => {
  return useQuery({
    queryKey: ["getTopThreeStudiosWinner"],
    queryFn: () => DashboardApi.getStudiosWithWinCount(),
  });
};
