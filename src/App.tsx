import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {game.player.name}
    </div>
  );
}

export default App;
