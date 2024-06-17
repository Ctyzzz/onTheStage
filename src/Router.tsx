import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout";
import { routes } from "./const";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute
                authComponent={route.authComponent}
                nonAuthComponent={route.nonAuthComponent}
              />
            }
          />
        </Route>
      ))}
    </Routes>
  );
}

export default Router;
