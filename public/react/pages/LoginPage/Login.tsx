import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import userServices from '../../services/User';
import { UserObj, IncomingUserObj } from "../../types";

interface Props {
    user: UserObj,
    setUser: React.Dispatch<React.SetStateAction<UserObj>>
}

const LoginPage = ({ user, setUser } : Props) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) : Promise<void> => {
        e.preventDefault();
        const incomingUser: IncomingUserObj = {
            username,
            password
        };

        const loggedInUser: UserObj = await userServices.getOne(incomingUser.username);

        if(loggedInUser) {
            setUser(loggedInUser);
            window.localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
            navigate('/');
        } else {
            setUsername('');
            setPassword('');
            alert('User not found');
        }
    }

    const handleLogout = () : void => {
        setUser(null);
        window.localStorage.clear();
        navigate('/'); 
    }

    return (
        <main>
            <header>
                <a href="#" className="logo">
                <h1>CELC Inc.</h1></a>
                <ul className="navbar">
                    <li><Link to="/" className= "active">Home</Link></li>
                    <li><Link to="/login" className= "active">Login</Link></li>
                    { user && <li><Link to="/cart" className= "active">Cart</Link></li>}
                </ul>
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
                <>
                    <h3>{user.username} is currently logged in</h3>
                    <button onClick={handleLogout}>Logout</button>
                </>
            }
        </main>
    )
}

export default LoginPage;