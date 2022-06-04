import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { MovieDetail } from "~/types";
import { latestApi } from "~/apis/movieApi";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    "latestMovie",
    latestApi
  );
};

export default useLatestMovie;
