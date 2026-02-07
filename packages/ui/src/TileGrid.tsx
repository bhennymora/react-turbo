"use client";
import React, { useState } from "react";

export type TileData = {
  title: string;
  image: string;
  description: string;
};

type TileGridProps = {
  tiles?: TileData[];
  count?: number;
  onChange?: (tiles: TileData[]) => void;
};

const emptyTile = (): TileData => ({
  title: "",
  image: "",
  description: "",
});

export const TileGrid: React.FC<TileGridProps> = ({
  tiles: externalTiles,
  count = 0,
  onChange,
}) => {
  const [internalTiles, setInternalTiles] = useState<TileData[]>(
    externalTiles ??
      Array.from({ length: count }, emptyTile)
  );

  const tiles = externalTiles ?? internalTiles;

  const setTiles = (next: TileData[]) => {
    if (!externalTiles) setInternalTiles(next);
    onChange?.(next);
  };

  const updateTile = <K extends keyof TileData>(
    index: number,
    field: K,
    value: TileData[K]
  ) => {
    const next = tiles.map((t, i) =>
      i === index ? { ...t, [field]: value } : t
    );
    setTiles(next);
  };

  return (
    <div style={{ display: "grid", gap: 20 }}>
      {tiles.map((tile, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: 12 }}>
          <input
            value={tile.title}
            placeholder="Title"
            onChange={e =>
              updateTile(i, "title", e.target.value)
            }
          />

          <input
            value={tile.image}
            placeholder="Image URL"
            onChange={e =>
              updateTile(i, "image", e.target.value)
            }
          />

          <textarea
            value={tile.description}
            placeholder="Description"
            onChange={e =>
              updateTile(i, "description", e.target.value)
            }
          />

          {tile.image && (
            <img
              src={tile.image}
              style={{ width: "100%", height: 120, objectFit: "cover" }}
            />
          )}

          <strong>{tile.title}</strong>
          <p>{tile.description}</p>
        </div>
      ))}
    </div>
  );
};
