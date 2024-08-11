
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
        <div className="admin-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <main className='content'>
                <Outlet></Outlet>
            </main>
        </div>
        <Footer/>
    </>)
}


export default AdminLayout;