import React from "react";

class CompB extends React.Component{
    render(){
        return <div>
                    <h3>Component B</h3>
                    <pre>{JSON.stringify(this.props)}</pre>
                    <h4>Employee Id: {this.props.eid}</h4>
                    <h4>Employee Name: {this.props.ename}</h4>
                    <hr/>
               </div>
    }
}

export default CompB;