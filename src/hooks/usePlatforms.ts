import platforms from "@/data/platforms";
import APICLient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiCLient = new APICLient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiCLient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: platforms
});

export default usePlatforms;