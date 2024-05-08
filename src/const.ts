import MainPage from "@components/MainPage/MainPage"
import Login from "@components/Login/Login"
import Registration from "@components/Login/Registration/Registration"

export const routes = [
  {
    path: "/",
    component: MainPage,
    isAuth: false,
  },
    {
      path: "/auth",
      component: Login,
      isAuth: false,
    },
    {
      path: "/registration",
      component: Registration,
      isAuth: false,
    },
]  