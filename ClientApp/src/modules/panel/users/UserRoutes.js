
import CreateUser from "./containers/CreateUser";
import Users from "./Users";

const AuthRoutes = [
    // {
    //   index: '/users',
    //   element: <Users />
    // },
    {
      path: '/create-user',
      element: <CreateUser />
    },
];
export default AuthRoutes;