import genres from "@/data/genres";
import APICLient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APICLient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h,
    initialData: genres
});

export default useGenres;