import { Outlet, useNavigation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";


export const AppLayout = () => {

  const loadingData = useNavigation()
 
  if(loadingData.state === 'loading') return <Loading/>
  

  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};