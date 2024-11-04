import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { movieData } from "./api/GetApiData";
import { MovieDetails } from "./components/ui/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";
const App = () => {
  //old version router create

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/About" element={<About />} />
  //       <Route path="/Movie" element={<Movie />} />
  //       <Route path="/Contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  //new router create

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: movieData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails/>,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
