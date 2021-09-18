import useSWR, { mutate } from "swr";
import { fetcher } from "../fetcher";
export const getClassrooms = (user_id) => {
  const { data, error } = useSWR(
    `api/classroom/getUserClassrooms/?user_id=${user_id}`,
    fetcher,
    { refreshInterval: 1000 }
  );
  return { data, isLoading: !error && data, error };
};
