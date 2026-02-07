import { useState } from "react";
import { TileGrid } from "@repo/ui/TileGrid";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
const App = () => {
  const [tilesA, setTilesA] = useState([
    { title: "A1", image: "globe.svg", description: "" },
  ]);

  const [tilesB, setTilesB] = useState([
    { title: "B1", image: "next.svg", description: "" },
  ]);

  return (
    <>
      <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      <TileGrid tiles={tilesA} onChange={setTilesA} />
      <TileGrid tiles={tilesB} onChange={setTilesB} />
    </>
  );
};

export default App;
