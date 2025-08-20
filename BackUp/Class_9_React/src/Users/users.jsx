/*import React from "react";
import Axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  get_Data = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ users: resp.data });
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  render() {
    return (
      <div className="container mt-4">
        <h4>Users Component</h4>
        <button className="btn btn-primary mb-3" onClick={this.get_Data}>
          Get Data
        </button>

        {this.state.users.length > 0 && (
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Users;
 */

import React from "react";
import Axios from 'axios'
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={users:[]}
    }
    componentDidMount=()=>{  
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({users:resp.data})
        })
        .catch(()=>{})
    }
    render(){
        return <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <h4>Users Component</h4>
                    <pre>{JSON.stringify(this.state.users)}</pre>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Website</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((user)=>{
                                return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                            </div>
                        </div>
                    
                </div>
    }
}

export default Users; 