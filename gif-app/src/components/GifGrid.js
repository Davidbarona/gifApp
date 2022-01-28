import React, { useState, useEffect } from "react";
import { getGifs } from "../Helpers/GetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // only render this function one  time,
  useEffect(() => {
    getGifs(category).then(imgs => setImages(imgs));
  }, [category]);

  

  return (
    <>
      <div className="card-grid">
        <ol>
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </ol>
      </div>
      ;
    </>
  );
};
