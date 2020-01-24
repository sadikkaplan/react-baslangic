import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    render() {
        //destruction
        const{name,department,cost,gender}=this.props;
        return (
            <div>
            <ul>
            <li>name:{name}</li>
            <li>department:{department}</li>
            <li>cost:{cost}</li>
            <li>Gender:{gender}</li>
            </ul>
            </div>
        )
    }
}
User.defaultProps={
    name:"No Name",
    department:"No Department",
    cost:"no Cost"
}
User.propTypes= {
    name:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired,
    cost:PropTypes.string.isRequired
}

export default User;
