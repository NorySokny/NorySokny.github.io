import '../assets/css/login.css';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [textButton, setTextButton] = useState('Submit')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const notify = () => {
        // Calling toast method by passing string
        toast("Hello Geeks");
    };
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setTextButton("Processing...", false)
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            })
        });

        if (!response.ok) {
            console.error('Network response was not ok:', response.status);
            notify()
        }

        const token = await response.json();
        console.log(token);
        redirectToHome();
    }


   const redirectToHome = () => {
       navigate('/');
   } 


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className='card-login'>
                <h2 className='login-header'>Login</h2>
                <form action="" className='form-login'>
                    <div className="form-control">
                        <input type="text" name='username' onChange={handleUsername} placeholder='Username' value={username}/>
                    </div>
                    <div className="form-control">
                        <input type="password" name='password' onChange={handlePassword} placeholder='Password' value={password}/>
                    </div>
                    <div className="form-control">
                        <input type="submit" className='btn' onClick={submit} value={textButton}/>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}

export default Login;