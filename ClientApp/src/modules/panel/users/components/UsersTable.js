import { Table } from "reactstrap";
import adminUser from "../../../../utils/admin";

const UsersTable=({users, onClick})=>{
    return (
        <Table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Profile</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>

            </thead>
            <tbody>
                {users.map(({firstName, lastName,createdAt, image, username,email, userType, createdBy},index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td><img className='img-icon' src={image} alt='na'/></td>
                        <td>{`${firstName} ${lastName}`}</td>
                        <td>{email}</td>
                        <td>{userType}</td>
                        <td>{createdBy}</td>
                        <td>{createdAt}</td>
                        <td>{index+1}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default adminUser(UsersTable);