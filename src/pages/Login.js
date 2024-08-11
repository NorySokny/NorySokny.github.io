import '../assets/css/login.css';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [textButton, setTextButton] = useState('Submit');
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        setTextButton("Processing...", false)
    }


   const redirectToHome = () => {
       navigate('/');
   } 

    return (
        <>
            <div className='card-login'>
                <h2 className='login-header'>Login</h2>
                <form action="" className='form-login'>
                    <div className="form-control">
                        <input type="text" name='username' placeholder='Username'/>
                    </div>
                    <div className="form-control">
                        <input type="password" name='password' placeholder='Password'/>
                    </div>
                    <div className="form-control">
                        <input type="submit" className='btn' onClick={submit} value={textButton}/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;