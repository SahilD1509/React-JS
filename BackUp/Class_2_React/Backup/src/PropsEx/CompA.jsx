import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    emp_Id=101;
    emp_Name="Rahul";
    emp_Details={
        'emp_Sal':45000,
        'Locl':["Wayand","ND","Bangalore"]
    }
    render(){
        return <div>
                    <h3>Component A</h3>
                    <hr/>
                    <CompB eid={this.emp_Id} ename={this.emp_Name}/>
               </div>
    }
}
export default CompA;