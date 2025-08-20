import Axios from 'axios'
let Users=()=>{
    let getUserData = ()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{console.log(resp.data)})
        .catch(()=>{})
    }
    return <div>
                <h3>User Component</h3>
                <button onClick={getUserData}>Get Users</button>
            </div>
}
export default Users;