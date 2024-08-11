import { useState, useEffect} from "react"

const UserList = () => {
    const [users, setUsers] = useState({})
    useEffect(() => {
    fetchUsers();
    }, [false]);
    
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    
    return (<>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td></td>
                    </tr>
                </thead>
            </table>
        </div>
    </>)
}


export default UserList;