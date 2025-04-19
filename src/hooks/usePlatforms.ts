import platforms from "@/data/platforms";
import APICLient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiCLient = new APICLient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiCLient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: platforms
});

export default usePlatforms;