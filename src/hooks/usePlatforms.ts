import { $api, FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => $api.get<FetchResponse<Platform>>('/platforms/lists/parents').then(({ data }) => data),
    staleTime: 24 * 60 * 60 * 1000 // 24h
});

export default usePlatforms;