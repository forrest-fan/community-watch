import React, { Component } from 'react';
import './Dashboard.css';
import DashCommunity from './DashCommunity/DashCommunity';

class Dashboard extends Component {
    render() {
        return(
            <div className='Dashboard'>
                <div className='header'>
                    <img src='./logo.png' height='100px'/>
                    <h1>Community Watch</h1>
                </div>
                <div className='container'>
                    <div>
                        <h2>My Watchlist</h2>
                        {this.props.watchlist.length !== 0 ? this.props.watchlist.map(community => {
                            return (
                                <DashCommunity 
                                    name={community}
                                    openCommunity={this.props.openCommunity}
                                />
                            );
                        }) : <div className='empty-watch'>
                            <p>Select a community to get started.</p>
                        </div>
                        }
                        <hr />
                        <h2>Trending Communities</h2>
                        <DashCommunity 
                            name={'Banbury-Don Mills'}
                            openCommunity={this.props.openCommunity}
                        />
                        <DashCommunity 
                            name={'Hillcrest Village'}
                            openCommunity={this.props.openCommunity}
                        />
                        <hr />
                        <h2>Biggest Gainers</h2>
                        <DashCommunity 
                            name={'Black Creek'}
                            openCommunity={this.props.openCommunity}
                        />
                        <DashCommunity 
                            name={'Glenfield-Jane Heights'}
                            openCommunity={this.props.openCommunity}
                        />
                        <hr />
                        <h2>Biggest Losers</h2>
                        <DashCommunity 
                            name={'Kingsway South'}
                            openCommunity={this.props.openCommunity}
                        />
                        <DashCommunity 
                            name={'Leaside'}
                            openCommunity={this.props.openCommunity}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;