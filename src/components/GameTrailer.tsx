import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  const videoUrl = first?.data?.max || first?.data?.["480"];

  return first && videoUrl ? (
    <video
      src={videoUrl}
      poster={first.preview}
      controls
      style={{ width: "100%", height: "auto" }}
    />
  ) : null;
};

export default GameTrailer;
