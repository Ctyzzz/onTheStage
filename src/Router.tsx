import { Routes, Route } from "react-router-dom"; 
import { Layout } from "@components/Layout"; 
import { routes } from "./const";
import PrivateRoute from './PrivateRoute';
 
function Router() { 
  return ( 
    <Routes> 
      {routes.map((route) => { 
        const Element = route.isAuth ? (
          <PrivateRoute element={<route.component />} />
        ) : (
          <route.component />
        );

        return (
          <Route key={route.path} path={route.path} element={<Layout />}>
            <Route index element={Element} />
          </Route>
        );
      })} 
    </Routes> 
  ); 
} 
 
export default Router;