import { useQuery } from 'react-query'
import { toast } from "react-toastify";
import adminUser from "../../../utils/admin";
import { getUsers } from "./lib/users";
import UsersTable from './components/UsersTable';
import Loader from '../../../components/loader';
// import { NavMenu } from '../../components/NavMenu';

const CreateUser = () => {

  const { isLoading, data, } = useQuery("contactData", async () =>
        await getUsers()
            .then((res) => {
                toast.success('Contacts Loaded');
                return res.data;
            })
            .catch((error) => {
                toast.error("Failed");
                toast.error(error.message);
            })
    );
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <NavMenu /> */}
        {/* <article>     */}
        <div className="col-sm-3">
          <h6>System Users</h6>
          {/* <Link to={`/`}></Link> */}
          {data && <UsersTable  users={data.data}/>}
          {isLoading && <Loader isLoading={isLoading}></Loader>}
          {/* </article> */}
        </div>
      </div>
    </div>
  );
};
export default adminUser(CreateUser);
