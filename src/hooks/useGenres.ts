import genres from "@/data/genres";
import APICLient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APICLient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h,
    initialData: genres
});

export default useGenres;