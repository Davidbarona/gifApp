import React, { useState } from "react";

const GifExpertApp = () => {
  
    // const categories = ['One Punch Man', 'Samurai X','Dragon Ball']
    const [ cat, setCat] = useState(['One Punch Man', 'Samurai X','Dragon Ball'] );

    const handleAdd = () =>{

         setCat([...cat,'Baki Hanma '])  
        //setCat(cats =>[...cats,'Baki'])

    }
    return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

        <button onClick={handleAdd}>Add Serie</button>

      <ol>
          {
              cat.map(category=>{
                  return <li key={category}>{category}</li>
              })
          }
      </ol>
    </>
  );
};

export default GifExpertApp;
