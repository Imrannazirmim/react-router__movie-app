

export const getMovieDetails = async({params}) => {

    const id = params.movieID;
    const api = `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}