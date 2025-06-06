import Platform from "@/entities/Platform";
import Genre from "./Genre";
import Publisher from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    description_raw: string;
}
