import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import userServices from '../../services/User';

// import user from '../pages/adminPage/user.png';
import user from './user.png';
// import padlock from '../pages/adminPage/padlock.png';
import padlock from './padlock.png';
import search from '../Home/search.png';
import cart from '../Home/shopping-cart.png';

const LoginSignup = ({ user, setUser }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const incomingUser = {
            username,
            password
        };

        const loggedInUser = await userServices.getOne(incomingUser.username);

        setUser(loggedInUser);
        window.localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        navigate('/');
    }

    const handleLogout = () => {
        setUser(null);
        window.localStorage.clear();
        navigate('/'); 
    }

    return (
        <main>
            <header>
			<a href="#" class="logo">
			<h1>CELC Inc.</h1></a>
		<ul class="navbar">
			<li><a href="#home" class="active">Home</a></li>
			<li><Link to="/login" class= "active">Admin</Link></li>
		</ul>

		<div class="icons">
			{/*<img src={search}/>*/}
			<a href="#">search</a>
			{/*<img src={cart}/>*/}
			<a href="#">cart</a>
		</div>
		</header>
        { !user ? 
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        :
        <button onClick={handleLogout}>Logout</button>
        }
          {/* <div className="container">
            <div className= "header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="input">
                 <img src={user} alt="" />
                 <input type="text" placeholder='Username' />
                 </div>}
            <div className="input">
            <img src={padlock} alt=""/>
            <input type="password" placeholder='Password'/>
            </div>
            </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div> */}
        </main>
    )
}

export default LoginSignup;