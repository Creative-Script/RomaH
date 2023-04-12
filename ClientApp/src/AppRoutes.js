import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Auth } from "./modules/auth/Auth";
import { Booking } from "./modules/book/Booking";
import AuthRoutes from "./modules/panel/users/UserRoutes";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/login',
    element: <Auth />
  },
  {
    path: '/booking',
    element: <Booking />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  ...AuthRoutes,
];

export default AppRoutes;
