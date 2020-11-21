import React, { Component } from 'react';
import './Community.css';

class Community extends Component {
    render() {
        return(
            <div className='Community'>
                <div className='header'>
                    <h1>{this.props.communityData.name}</h1>
                    <h4>{this.props.communityData.municipality.toUpperCase()}</h4>
                </div>
                <div className='header'>
                    <h3>${this.props.communityData.avgPrice.toLocaleString()}</h3>
                    <h3 className={'change ' + (this.props.communityData.change > 0 ? 'gain' : 'loss')}>{(this.props.communityData.change > 0 ? '+' : '') + this.props.communityData.change.toFixed(2)}%</h3>
                </div>
            </div>
        );
    }
}

export default Community;