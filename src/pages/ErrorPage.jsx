import { useNavigate, useRouteError } from "react-router"

export const ErrorPage = () => {

    const error = useRouteError();
    const navigatePage = useNavigate();

    const handleNavigate = () => {
        navigatePage(-1)
    }

    if(error.status === 404){
        return(
            <section>
                <div className="mt-10">
                    <h1>Error 404 Page</h1>
                </div>
                <button className="border m-10 p-2 rounded bg-red-400 hover:bg-red-300" onClick={handleNavigate} >Go Back</button>
            </section>
        )
    }
}