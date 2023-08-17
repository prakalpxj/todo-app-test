import axios from 'axios';

const apiClient  = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);


export  const retrieveHelloWorldApi = () => 
    apiClient.get("/hello-world");


export function retrieveTodosApi(username){
    return apiClient.get(`/users/in28minutes/todos`)
    // return apiClient.get(`/hello-world/path-variable/${username}`)

}
    


