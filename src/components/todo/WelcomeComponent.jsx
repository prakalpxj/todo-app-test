import { useParams, Link} from 'react-router-dom';
export default function WelcomeComponent(){
    
    const {username} = useParams()   //deconstructing the object
    return (
        <>
        <h1>Welcome to my todo app {username}</h1>
            <div>Manage your <Link to="/todos">todos</Link></div>
        </>
    );
}
