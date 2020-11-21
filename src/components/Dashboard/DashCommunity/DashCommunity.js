import React, { Component } from 'react';
import './DashCommunity.css';

class DashCommunity extends Component {
    render() {
        return(
            <div className='DashCommunity'>
                <div className='col1'>
                    <h3>{this.props.communityData.name}</h3>
                    <h5>{this.props.communityData.municipality.toUpperCase()}</h5>
                </div>
                <div className='col2'>
                    <h3>${this.props.communityData.avgPrice.toLocaleString()}</h3>
                    <h5>Avg. Quarterly Price</h5>
                </div>
                <div className='col3'>
                    <h4 className={'change ' + (this.props.communityData.change > 0 ? 'gain' : 'loss')}>{(this.props.communityData.change > 0 ? '+' : '') + this.props.communityData.change.toFixed(2)}%</h4>
                </div>
            </div>
        );
    }
}

export default DashCommunity;