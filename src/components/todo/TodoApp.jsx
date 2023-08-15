
import './TodoApp.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent'; 
import AuthProvider, { useAuth } from '../../security/AuthContext';


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
    const todos = [ {id:'1' , description : "Learn AWS!", done:false, targetDate : targetDate} ,
                    {id:'2' , description : "Learn DSA!", done:false, targetDate : targetDate},
                    {id:'3' , description : "Learn Azure!", done:false, targetDate : targetDate}

                  ]
    return (
        <div className='container'>
            <h1> Things you want to do! </h1>
            <table className = 'table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>task</td>
                        <td>Status</td>
                        <td>Target Date</td>

                    </tr>
                </thead>
                <tbody>
                   {

                       todos.map( 
                           todoTask => (
                               <tr key = {todoTask.id} >
                                    <td>{todoTask.id}</td>
                                    <td>{todoTask.description}</td>
                                    <td>{todoTask.done.toString()}</td> 
                                    <td>{todoTask.targetDate.toDateString()}</td>
                                </tr>
                        ) 
                        )              
                    }                         
                </tbody>

            </table>
        </div>
    )
}

