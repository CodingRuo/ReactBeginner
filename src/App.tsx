import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && <Alert onClose={() => setVisible(false)}>hy!</Alert>}
      <Button onClick={() => setVisible(true)}>hy!</Button>
    </div>
  );
}

export default App;
