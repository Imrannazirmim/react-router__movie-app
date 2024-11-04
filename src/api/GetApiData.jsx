
export const movieData = async() => {
    const api = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=Batman&page=1`
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}