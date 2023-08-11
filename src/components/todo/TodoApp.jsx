import { useState} from 'react';
import './TodoApp.css'
import {BrowserRouter, Route, Routes, useNavigate, useParams} from 'react-router-dom';

export default function TodoApp(){
    return (
    <div className="TodoApp">
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginComponent/>}></Route>
                <Route path="/login" element = {<LoginComponent/>}></Route>
                <Route path="/welcome/:username" element = {<WelcomeComponent/>}></Route>
                <Route path="/todos" element = {<ListTodos/>}></Route>
                <Route path="*" element = {<ErrorComponent/>}></Route>

            </Routes>
        </BrowserRouter>
    </div>

    );
}

function WelcomeComponent(){
    const {username} = useParams()   //deconstructing the object
    return (
        <>
        <h1>Welcome to my todo app</h1>
            <div className='Welcome'>Welcome {username}</div>
        </>
    );
}

function ErrorComponent(){
    return (
        <div>
            <h1> Sorry for the 404. </h1>
            <div>We are working on this. Contact our support team.</div>
        </div>
    )
}

function ListTodos(){

    const todos = [ {id:'1' , description : "Learn AWS!"} ,
                    {id:'2' , description : "Learn DSA!"},
                    {id:'3' , description : "Learn Azure!"}

                  ]
    return (
        <div className='ListTodosComponent'>
            <h1> Things you want to do! </h1>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>task</td>
                    </tr>
                </thead>
                <tbody>
                   {

                       todos.map( 
                           todoTask => (
                               <tr key = {todoTask.id} >
                                    <td>{todoTask.id}</td>
                                    <td>{todoTask.description}</td> 
                                </tr>
                        ) 
                        )              
                    }                         
                </tbody>

            </table>
        </div>
    )
}


function LoginComponent(){

    const [username,setUsername] = useState("prakalp-jain");
    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailedMessage, setShowFailedMessage] = useState(false);
    const navigate = useNavigate()   //useNavigate returns a reference to a function
    function handleSubmit(){
        if(username === "prakalp-jain" && password === "12345"){
            setShowFailedMessage(false);
            setShowSuccessMessage(true);
            navigate(`/welcome/${username}`)
        }
        else{
            setShowFailedMessage(true);
            setShowSuccessMessage(false);
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
                { showSuccessMessage && <WelcomeComponent/> }
                { showFailedMessage && <>Authentication Failed </>}               
                
            </div>


        </div>

    );
}