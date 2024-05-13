import { api } from "./api.service";

interface IMoviesProps {
  page: number;
  winner?: string;
  year?: number;
  size?: number;
}

const getYearsMultipleWinners = async () => {
  const response = await api.get("?projection=years-with-multiple-winners");
  return response.data;
};

const getStudiosWithWinCount = async () => {
  const response = await api.get("?projection=studios-with-win-count");
  return response.data;
};

const getProducersLongShortInterval = async () => {
  const response = await api.get(
    "?projection=max-min-win-interval-for-producers"
  );
  return response.data;
};

const getWinnersByYear = async (year: string) => {
  const response = await api.get(`?winner=true&year=${year}`);
  return response.data;
};

const getMovies = async ({ page, size, winner, year }: IMoviesProps) => {
  const response = await api.get("", {
    params: {
      page,
      size,
      winner,
      year,
    },
  });

  return response.data;
};

export const DashboardApi = {
  getYearsMultipleWinners,
  getStudiosWithWinCount,
  getProducersLongShortInterval,
  getWinnersByYear,
  getMovies,
};
