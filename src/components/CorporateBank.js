import React, { Component } from 'react'

export default class CorporateBank extends Component {
    render(props) {
        return (
            <div>
                <h1>the main branch of CorporateBankis located at{this.props.location}</h1>
            </div>
        
         );
    }
}

