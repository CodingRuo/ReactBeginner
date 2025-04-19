import platforms from "@/data/platforms";
import APICLient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiCLient = new APICLient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms
});

export default usePlatforms;