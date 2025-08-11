import React from "react";
class Message extends React.Component{
    msg="Hello"  //Property
    gmHandler = ()=>{
        this.msg="Good Morning";
        console.log(this.msg);
        this.forceUpdate()
    }  
    gnHandler = ()=>{
        this.msg="Good Night";
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        return <div>
                
                <h4>Message Compononent</h4>
                <h3>Message Value:{this.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
               </div>
    }
}
export default Message