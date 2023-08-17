import { useParams, Link} from 'react-router-dom';
import { useState } from 'react';
import {retrieveHelloWorldApi, retrieveTodosApi} from './api/RestApiCalls';
export default function WelcomeComponent(){
    
    const {username} = useParams()   //deconstructing the object
    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        retrieveHelloWorldApi()
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))

    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error){
        console.log(error)
    }

    function retrieveTodos(){
        retrieveTodosApi(username)
        .then((response) => response.data.map((x) => console.log(x)))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }


    return (
        <>
        <h1>Welcome to my todo app {username}</h1>
            <div>Manage your <Link to="/todos">todos</Link></div>
            <button className = "btn btn-primary" onClick={callHelloWorldRestApi}>Click to call API</button>
            <div className='text-info'>{message}</div>
            <button className = "btn btn-primary" onClick={retrieveTodos}>Click to call API</button>
            {/* <div className='text-info m-5'></div> */}
        </>
    );
}
