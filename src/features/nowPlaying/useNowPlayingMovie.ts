import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { nowPlayingApi } from "~/apis/movieApi";
import { MovieDetail, ListResponse } from "~/types";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "nowPlayingMovie",
    nowPlayingApi
  );
};

export default useNowPlayingMovie;
