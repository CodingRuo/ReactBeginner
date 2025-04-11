import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="red" size="40" onClick={toggle} />;

  return <AiOutlineHeart color="red" size="40" onClick={toggle} />;
}

export default Like;
