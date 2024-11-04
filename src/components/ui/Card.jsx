import { NavLink } from "react-router-dom";

export const Card = ({currentEl}) => {
    const {Poster, imdbID, Title, Type, Year} = currentEl;
    return(
        <>
            <li>
                <div className="shadow-md p-2">
                    <img src={Poster} alt={imdbID} className="h-60" />
                    <span>{Title}</span>
                    <p>{Type}</p>
                    <span>{Year}</span><br />
                    <NavLink to={`/movie/${imdbID}`}>
                        
                    <button className="border p-2 rounded bg-blue-400">Watch Now</button>
                    </NavLink>
                </div>
            </li>
        
        </>
    )
}
