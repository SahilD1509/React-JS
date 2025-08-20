import React from 'react'

const Employee = () => {
let employees=[{"eid":1,"ename":"Roxane","gender":"Female"},
            {"eid":2,"ename":"Toma","gender":"Female"},
            {"eid":3,"ename":"Mario","gender":"Male"},
            {"eid":4,"ename":"Gavin","gender":"Male"},
            {"eid":5,"ename":"Aileen","gender":"Female"},
            {"eid":6,"ename":"Graham","gender":"Male"},
            {"eid":7,"ename":"Floris","gender":"Agender"},
            {"eid":8,"ename":"Gratiana","gender":"Female"},
            {"eid":9,"ename":"Alan","gender":"Male"},
            {"eid":10,"ename":"King","gender":"Male"},
            {"eid":11,"ename":"Burke","gender":"Male"},
            {"eid":12,"ename":"Tobin","gender":"Male"},
            {"eid":13,"ename":"Erastus","gender":"Bigender"},
            {"eid":14,"ename":"Angelica","gender":"Female"},
            {"eid":15,"ename":"Harcourt","gender":"Male"},
            {"eid":16,"ename":"Vittoria","gender":"Bigender"},
            {"eid":17,"ename":"Dorri","gender":"Female"},
            {"eid":18,"ename":"Bale","gender":"Male"},
            {"eid":19,"ename":"Dacie","gender":"Female"},
            {"eid":20,"ename":"Chrissie","gender":"Male"},
            {"eid":21,"ename":"Dorelia","gender":"Female"},
            {"eid":22,"ename":"Brena","gender":"Female"},
            {"eid":23,"ename":"Jude","gender":"Male"},
            {"eid":24,"ename":"Frasquito","gender":"Male"},
            {"eid":25,"ename":"Avrom","gender":"Male"},
            {"eid":26,"ename":"Alon","gender":"Male"},
            {"eid":27,"ename":"Meryl","gender":"Male"},
            {"eid":28,"ename":"Leila","gender":"Female"},
            {"eid":29,"ename":"Kaile","gender":"Female"},
            {"eid":30,"ename":"Quinlan","gender":"Male"},
            {"eid":31,"ename":"Marco","gender":"Male"},
            {"eid":32,"ename":"Erastus","gender":"Male"},
            {"eid":33,"ename":"Rutter","gender":"Male"},
            {"eid":34,"ename":"Konrad","gender":"Male"},
            {"eid":35,"ename":"Olivero","gender":"Male"},
            {"eid":36,"ename":"Jeromy","gender":"Male"},
            {"eid":37,"ename":"Gabbey","gender":"Female"},
            {"eid":38,"ename":"Cristiano","gender":"Male"},
            {"eid":39,"ename":"Dolley","gender":"Agender"},
            {"eid":40,"ename":"Haily","gender":"Male"},
            {"eid":41,"ename":"Tiena","gender":"Female"},
            {"eid":42,"ename":"Franky","gender":"Female"},
            {"eid":43,"ename":"Brnaba","gender":"Agender"},
            {"eid":44,"ename":"Tabby","gender":"Female"},
            {"eid":45,"ename":"Gilemette","gender":"Female"},
            {"eid":46,"ename":"Drucie","gender":"Bigender"},
            {"eid":47,"ename":"Chancey","gender":"Male"},
            {"eid":48,"ename":"Leonelle","gender":"Female"},
            {"eid":49,"ename":"Simonne","gender":"Female"},
            {"eid":50,"ename":"Dal","gender":"Male"}]
    return <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <table className='table'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((emp,index)=>{
                                        return <tr key={index}>
                                                    <td>{emp.eid}</td>
                                                    <td>{emp.ename}</td>
                                                    <td>{emp.gender}</td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
}

export default Employee