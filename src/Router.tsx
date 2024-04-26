import { Routes, Route } from "react-router-dom";
// @ts-ignore
import { Layout } from "@components/Layout";
import { routes } from "./const";

function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.isAuth) {
          return false;
        }

        return (
          <Route key={route.path} path={route.path} element={<Layout />}>
            <Route index element={<route.component />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default Router;
