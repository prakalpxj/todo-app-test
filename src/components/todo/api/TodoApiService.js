import axios from 'axios';

const apiClient  = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);



export function retrieveAllTodosForUsernameApi(username){
    return apiClient.get(`/users/${username}/todos`)
    // return apiClient.get(`/hello-world/path-variable/${username}`)

}
    

export function deleteTodoApi(username,id){
    return apiClient.delete(`/users/${username}/todos/${id}`)
    
    // return apiClient.get(`/hello-world/path-variable/${username}`)

}
   

