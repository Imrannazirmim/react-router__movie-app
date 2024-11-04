import { useLoaderData } from "react-router";
import { Card } from "../components/ui/Card";


export const Movie = () => {
  const moviesData = useLoaderData();
  return(
    <>
     <ul className="flex flex-wrap gap-5 m-3 p-3">
       {
        moviesData.Search.map((currentEl) => {
          return <Card key={currentEl.imdbID} currentEl={currentEl}/>
        })
      }
    
     </ul>
    </>
  )
};