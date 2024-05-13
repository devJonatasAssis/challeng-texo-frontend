import { DashboardApi } from "@/services/dashboard.service";
import { useQuery } from "react-query";

export const useListProducersLongShortInterval = () => {
  return useQuery({
    queryKey: ["getProducersLongShortInterval"],
    queryFn: () => DashboardApi.getProducersLongShortInterval(),
  });
};
