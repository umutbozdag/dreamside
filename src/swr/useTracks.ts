import useSWR from "swr";
import fetcher from "./fetcher";

export default function useTracks(limit: number = 100) {
  const { data, error } = useSWR(`api/tracks?limit=${limit}`, fetcher);
  return {
    tracks: data,
    isLoading: !error && !data,
    isError: error,
  };
}
