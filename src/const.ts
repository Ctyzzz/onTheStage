import MainPage from "@components/MainPage/MainPage"
import NonAuthPage from "./pages/NonAuthPage/NonAuthPage"
import Login from "@components/Login/Login"
import Registration from "@components/Login/Registration/Registration"
import Category from "@components/Category/Category"
import Subscription from "@components/Subscription/Subscription"
import Payment from "@components/Payment/Payment"



export const routes = [
    {
      path: "/",
      authComponent: NonAuthPage,
      nonAuthComponent: NonAuthPage,
    },
    {
      path: "/mainpage",
      authComponent: MainPage,
      nonAuthComponent: MainPage,
    },
    {
      path: "/auth",
      authComponent: Login,
      nonAuthComponent: Login,
    },
    {
      path: "/registration",
      authComponent: Registration,
      nonAuthComponent: Registration,
    },
    {
      path: "/category",
      authComponent: Category,
      nonAuthComponent: Category,
    },
    {
      path: "/subscription",
      authComponent: Subscription,
      nonAuthComponent: Subscription,
    },
    {
      path: "/payment",
      authComponent: Payment,
      nonAuthComponent: Payment,
    },
]

import img1 from '@public/img1.svg'
import img2 from '@public/img2.svg'
import img3 from '@public/img3.svg'
import img4 from '@public/img4.svg'
import img5 from '@public/img5.svg'
import img6 from '@public/img6.svg'
import img7 from '@public/img7.svg'
import img8 from '@public/img8.svg'
import img9 from '@public/img9.svg'
import img10 from '@public/img10.svg'
import img11 from '@public/img11.svg'

export const Cards1 = [
  {
    title: "СПЕКТАКЛИ",
    imageUrl: img1,
  },
  {
    title: "ОПЕРА",
    imageUrl: img2,
  },
  {
    title: "МЮЗИКЛ",
    imageUrl: img3,
  },
  {
    title: "БАЛЕТ",
    imageUrl: img4,
  },
];

export const Cards2 = [
  {
    title: "КОМЕДИЯ",
    imageUrl: img5,
  },
  {
    title: "ДРАМА",
    imageUrl: img3,
  },
  {
    title: "ТРАГЕДИЯ",
    imageUrl: img5,
  },
  {
    title: "КЛАССИКА",
    imageUrl: img7,
  },
  {
    title: "ФЕЕРИЯ",
    imageUrl: img8,
  },
  {
    title: "МИСТЕРИЯ",
    imageUrl: img9,
  },
];

export const Cards3 = [
  {
    title: "ГРУСТНОЕ",
    imageUrl: img6,
  },
  {
    title: "ВЕСЁЛОЕ",
    imageUrl: img2,
  },
  {
    title: "НОВОЕ",
    imageUrl: img10,
  },
  {
    title: "БОДРОЕ",
    imageUrl: img7,
  },
  {
    title: "ДЕТСКОЕ",
    imageUrl: img11,
  },
];
  

