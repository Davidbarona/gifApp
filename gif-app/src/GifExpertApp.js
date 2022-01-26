import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";


const GifExpertApp = () => {
  
  
    const [ cat, setCat] = useState(['One Punch Man', 'Samurai X','Dragon Ball'] );

    // const handleAdd = () =>{

    //      setCat([...cat,'Baki Hanma '])  
    //     //setCat(cats =>[...cats,'Baki'])

    // }


    return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCat }/>
      <hr />

      

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

 