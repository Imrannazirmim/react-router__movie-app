import { useLoaderData } from "react-router";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Released,
    Runtime,
    Title,
    Type,
    Writer,
    Year,
    imdbRating,
    imdbVotes,
  } = movieData;

  return (
    <li className="list-none">
      <div className="flex justify-evenly shadow-md border p-6 gap-2">
        <div className="shadow-md w-56 p-4 rounded-md">
            <img src={Poster} alt={Title} className="w-48" />
            <span>Movie Name: {Title}</span>
        </div>
        <div className="shadow-md p-4">
              <h1 className="text-2xl m-2 text-center">Movie Details </h1>
              <span>Actors Name: {Actors}</span>
              <p>Writer Name: {Writer}</p>
              <p>Director Name: {Director}</p>
              <p>Awards: {Awards}</p>
              <p>BoxOffice Name: {BoxOffice}</p>
              <p>Genre: {Genre}</p>
              <p>Language: {Language}</p>
              <p>Metascore: {Metascore}</p>
              <p>Plot: {Plot}</p>
              <p>Released: {Released}</p>
              <p>Runtime: {Runtime}</p>
              <p>Type: {Type}</p>
              <p>Year: {Year}</p>
              <p>Country: {Country}</p>               
              <p>imdbRating: {imdbRating}</p>
              <p>imdbVotes: {imdbVotes}</p>               
        </div>
      </div>
    </li>
  );
};
