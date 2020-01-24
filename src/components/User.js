import React, { Component } from 'react'

class User extends Component {
    render() {
        //destruction
        const{name,department,cost,gender}=this.props;
        return (
            <div>
            <ul>
            <li>Name:{name}</li>
            <li>Department:{department}</li>
            <li>Cost:{cost}</li>
            <li>Gender:{gender}</li>
            </ul>
                
            </div>
        )
    }
}
export default User;
