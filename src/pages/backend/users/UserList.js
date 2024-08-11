import { useState, useEffect } from "react";
import '../../../assets/css/styles/userList.css';

const UserList = () => {
	const [users, setUsers] = useState(null);
	useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data =>  setUsers(data.users));
	}, [false]);

    const userList = users ? users.map((item, index) => (
        <tr key={index}><td>{item.id}</td><td>{item.firstName}</td></tr>
    )) : "Empty User List";

	return (
		<>
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<td>Id</td>
							<td>First name</td>
							<td>Last name</td>
						</tr>
					</thead>
                    <tbody>
                        {userList}
                    </tbody>
				</table>
			</div>
		</>
	);
};

export default UserList;
