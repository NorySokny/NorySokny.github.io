
import { Outlet } from 'react-router-dom'
import '../../../assets/css/styles/admin.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AdminLayout = () => {
    return (<>
        <header>
            <Navbar />
        </header>
        <Sidebar />
        <main>
            <Outlet></Outlet>
        </main>
        <Footer/>
    </>)
}


export default AdminLayout;