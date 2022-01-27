import React,{useState,useEffect} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    // only render this function one  time, 
    useEffect(()=>{
        getGifs()
    },[])

    const getGifs =async () =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Baki&limit=10&api_key=ed0ijcD8Xv8TKiiVrWxtciJB6Kb1spem'
        const response = await  fetch(url)
        const {data} = await response.json()

       

        const getImg = data.map(img=>{
            return{
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(getImg)
    }

    
   
    
  return <div>
            <h3>{category}</h3>
           <ol>
               {
                   images.map(img=>{
                       return(
                       < GifGridItem 
                       key={img.id}
                       {...img}
                       />
                       )
                   })
               }
           </ol>
        </div>;
};
