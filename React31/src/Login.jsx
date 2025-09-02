let Login = ()=>{


    return <div className="container">
                <div className="row">
                    <div className="col-4">
                    <h3>Login Details</h3>
                    <form >
                    <div>
                        <label className="form-group">User Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                     <div className="form-group">
                        <label >Password:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <input type="submit"  className="btn btn-warning"/>
                </form>
                    </div>
                </div>
                
                <hr/>
                
            </div>
}
export default Login;