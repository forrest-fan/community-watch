import React, { Component } from 'react';
import './DashCommunity.css';
import Communities from '../../../communities.js';

class DashCommunity extends Component {
    constructor(props) {
        super(props);
        let data;
        for (let i = 0; i < Communities.data.length; i++) {
            if (Communities.data[i].name === this.props.name) {
                let total = 0;
                let sales = 0;
                Communities.data[i]["sales info"][10].data.map(type => {
                    total += Number(type.data["Average Price"]) * Number(type.data["Sales"]);
                    sales += Number(type.data["Sales"]);
                })
                let thisYr = total/sales;
                total = 0;
                sales = 0;
                Communities.data[i]["sales info"][0].data.map(type => {
                    total += Number(type.data["Average Price"]) * Number(type.data["Sales"]);
                    sales += Number(type.data["Sales"]);
                })
                let lastYr = total/sales;
                let change = ((thisYr - lastYr) * 100 / lastYr).toFixed(2);
                data = {
                    price: thisYr,
                    change: change
                }
                break;
            }
        }
        this.state={data: data};
    }

    render() {
        return(
            <div className='DashCommunity' onClick={() => {
                this.props.openCommunity(this.props.name);
            }}>
                <div className='col1'>
                        <h3>{this.props.name}</h3>
                    <h5>TORONTO</h5>
                </div>
                <div className='col2'>
                    <h3>${Number(this.state.data.price.toFixed(0)).toLocaleString()}</h3>
                    <h5>2020 Avg. Price</h5>
                </div>
                <div className='col3'>
                    <h4 className={'change ' + (this.state.data.change > 0 ? 'gain' : 'loss')}>{(this.state.data.change > 0 ? '+' : '') + this.state.data.change}%</h4>
                </div>
            </div>
        );
    }
}

export default DashCommunity;