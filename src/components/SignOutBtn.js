import React, { Component } from 'react'

export default class SignOutBtn extends Component {
    render() {
        return (
            <div className="">
                <button onClick={ this.props.handleLogout } className="btn btn-outline-dark">Sign Out</button>
            </div>
        )
    }
}
