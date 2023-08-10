import { useState} from 'react';
import './TodoApp.css'
import Counter from '../counter/Counter';
export default function TodoApp(){
    return (
    <div className="TodoApp">
        {/* Todo Management Application */}
        <LoginComponent/>
        {/* <Counter/> */}
    </div>

    );
}




function LoginComponent(){

    const [username,setUsername] = useState("prakalp-jain");
    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailedMessage, setShowFailedMessage] = useState(false);

    function handleSubmit(){
        if(username === "prakalp-jain" && password === "12345"){
            setShowFailedMessage(false);
            setShowSuccessMessage(true);
        }
        else{
            setShowFailedMessage(true);
            setShowSuccessMessage(false);
        }
    }

    function ShowSuccess(){
        if(showSuccessMessage)
            return (<div>Authentication Success</div>);

        return null;
    }

    function ShowFailed(){
        if(showFailedMessage)
            return (<div>Authentication Fail</div>);
        return null;
    }

    return (
        <div className="Login">
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
                <ShowFailed></ShowFailed>
                <ShowSuccess></ShowSuccess>
                
            </div>


        </div>

    );
}