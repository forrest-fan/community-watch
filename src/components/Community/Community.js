import React, { Component } from 'react';
import './Community.css';

class Community extends Component {
    render() {
        return(
            <div className='Community'>
                <h1>{this.props.communityData.name}</h1>
                <h4>{this.props.communityData.municipality.toUpperCase()}</h4>

            </div>
        );
    }
}

export default Community;