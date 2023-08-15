import {useState} from "react"
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../../security/AuthContext";
export default function LoginComponent(){

    const [username,setUsername] = useState("prakalp-jain");
    const [password, setPassword] = useState('');

    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailedMessage, setShowFailedMessage] = useState(false);
    const authContext = useAuth()
    const navigate = useNavigate()   //useNavigate returns a reference to a function
    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }
        else{
            setShowFailedMessage(true);
            
        }
    }

    return (
        <div className="Login">
             <h1>Welcome to my todo app. Please Login.</h1>
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type="button" name="login" onClick={handleSubmit}>login</button>
                { showFailedMessage && <>Authentication Failed </>}               
                
            </div>


        </div>

    );
}