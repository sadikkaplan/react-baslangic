import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    state={
        isVisible:false
    }
    static defaultProps={
        name:"No Name",
        department:"No Department",
        cost:"no Cost"
    }
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isVisible:false
    //     }
    // }
    render() {
        //destruction
        const{name,department,cost,gender}=this.props;
        const{isVisible}=this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                <div className="card-header d-flex justify-content-between" >
                    <h4 className="d-inline">{name}</h4>
                    <i className="far fa-trash-alt" style={{cursor:"pointer"}} ></i>
                </div>
                {
                    isVisible ?   <div className=" card-body" >
                        <p className="card-text">Cost:{cost} </p>
                        <p className="card-text">Department:{department} </p>
                        <p className="card-text">Gender:{gender} </p>
                    </div> :null
                }
                    <div className=" card-body" >
                        <p className="card-text">Cost:{cost} </p>
                        <p className="card-text">Department:{department} </p>
                        <p className="card-text">Gender:{gender} </p>
                    </div>                   
                </div>
            
            </div>
        )
    }
}

User.propTypes= {
    name:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired,
    cost:PropTypes.string.isRequired
}

export default User;
