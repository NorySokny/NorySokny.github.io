import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import UserList from './pages/backend/users/UserList';
import Dashboard from './pages/backend/Dashboard';
import AdminLayout from './pages/backend/layouts/AdminLayout';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="/account" element={<Auth />}>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path="users" element={<UserList />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
