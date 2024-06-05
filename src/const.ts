import MainPage from "./components/MainPage/MainPage"
import NonAuthPage from "./pages/NonAuthPage/NonAuthPage"

export const routes = [
  {
    path: "/",
    component: MainPage,
    isAuth: false,
  },
  
  {
    path: "/nonAuthPage",
    component: NonAuthPage,
    isAuth: false,
  },
]  