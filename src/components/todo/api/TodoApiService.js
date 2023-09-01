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
   
export function retrieveTodoApi(username,id){
    return apiClient.get(`/users/${username}/todos/${id}`)

}

export function updateTodoApi(username,id, todo){
    return apiClient.put(`/users/${username}/todos/${id}`, todo )
}

export function createTodoApi(username, todo){
    return apiClient.post(`/users/${username}/todos`, todo )
}