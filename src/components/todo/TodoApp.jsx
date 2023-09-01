
import './TodoApp.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent'; 
import AuthProvider, { useAuth } from '../../security/AuthContext';
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from './api/TodoApiService';
import { useEffect, useState } from 'react';
import TodoComponent from './TodoComponent';


function AuthenticatedRoute({children}){
    const auth = useAuth()
    if(auth.isAuthenticated)
        return children
    return <Navigate to="/"/>
}
export default function TodoApp(){
    return (
    <div className="TodoApp">
        <AuthProvider>

        <BrowserRouter>
        <HeaderComponent/>
            <Routes>
                <Route path="/" element = {<LoginComponent/>}></Route>
                <Route path="/login" element = {<LoginComponent/>}></Route>

                <Route path="/welcome/:username" element = {
                    <AuthenticatedRoute>
                        <WelcomeComponent/>
                    </AuthenticatedRoute>
                }>
                </Route>
                <Route path="/todos" element = {
                    <AuthenticatedRoute>
                        <ListTodos/>
                    </AuthenticatedRoute>
                    }>
                
                </Route>

                 <Route path="/todo/:id" element = {
                    <AuthenticatedRoute>
                        <TodoComponent/>
                    </AuthenticatedRoute>
                    }>
                
                </Route>
                <Route path="/logout" element = {<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}></Route>
                <Route path="*" element = {<ErrorComponent/>}></Route>

            </Routes>
        <FooterComponent/>
        </BrowserRouter>
        </AuthProvider>
    </div>

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

    const todayDate = new Date();
    const targetDate = new Date(todayDate.getFullYear()+12, todayDate.getMonth(), todayDate.getDay());
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const auth = useAuth()
    const username = auth.username
    const navigate = useNavigate()
    function refreshTodos(){
        // console.log(username + " todos")
        retrieveAllTodosForUsernameApi(username)
        .then((response) =>(
            setTodos(response.data))
        )
        .catch((error) => console.log(error))
    }

    useEffect(
        () => refreshTodos() , []
    )

    function deleteTodo(id){
        // console.log("clicked " + id)
        deleteTodoApi(username, id)
        .then (
            () => {
                setMessage(`deleted todo with ${id}`)
                refreshTodos()
 
            }

        )
    }

    function updateTodo(id){
        // console.log("clicked " + id) 
        navigate(`/todo/${id}`)             
    }

    function addNewTodo(){
        
        navigate(`/todo/-1`)             
    }

    // const todos = [ {id:'1' , description : "Learn AWS!", done:false, targetDate : targetDate} ,
    //                 {id:'2' , description : "Learn DSA!", done:false, targetDate : targetDate},
    //                 {id:'3' , description : "Learn Azure!", done:false, targetDate : targetDate}

    //               ]

    return (
        <div className='container'>
            <h1> Things you want to do! </h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <table className = 'table'>
                <thead>
                    <tr>
                        <th>task</th>
                        <th>Status</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>

                    </tr>
                </thead>
                <tbody>
                   {

                       todos.map( 
                           todoTask => (
                               <tr key = {todoTask.id} >
                                    <td>{todoTask.description}</td>
                                    <td>{todoTask.done.toString()}</td> 
                                    <td>{todoTask.targetDate.toString()}</td>
                                    <td><button className='btn btn-warning' onClick={() => deleteTodo(todoTask.id)}>Delete</button></td>
                                    <td><button className='btn btn-success' onClick={() =>updateTodo(todoTask.id)}>Update</button></td>
                                </tr>
                        ) 
                        )              
                    }                         
                </tbody>

            </table>
            <div className = "btn btn-success m-5" onClick={addNewTodo}>Add new todo</div>
        </div>
    )
}

