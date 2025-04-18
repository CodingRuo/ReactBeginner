import genres from "@/data/genres";
import { $api, FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => $api.get<FetchResponse<Genre>>('/genres').then(({ data }) => data),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: { count: genres.length, results: genres }
});

export default useGenres;