import React, { Component } from 'react';
import './Dashboard.css';
import DashCommunity from './DashCommunity/DashCommunity';

class Dashboard extends Component {
    render() {
        return(
            <div className='Dashboard'>
                <h1>Community Watch</h1>
                <input className='search-bar' placeholder='Search communities'></input>
                <h2>My Watchlist</h2>
                <DashCommunity 
                    communityData={{
                        name: 'Hillcrest Village',
                        municipality: 'Toronto',
                        avgPrice: 789129,
                        change: 3.12
                    }}
                />
                <DashCommunity 
                    communityData={{
                        name: 'Buttonville',
                        municipality: 'Markham',
                        avgPrice: 1293180,
                        change: 5.37
                    }}
                />
                <hr />
                <h2>Trending Communities</h2>
                <DashCommunity 
                    communityData={{
                        name: 'Don Mills',
                        municipality: 'Toronto',
                        avgPrice: 954123,
                        change: -2.32
                    }}
                />
                <DashCommunity 
                    communityData={{
                        name: 'Victoria Village',
                        municipality: 'Toronto',
                        avgPrice: 842512,
                        change: 1.10
                    }}
                />
                <hr />
                <h2>Biggest Gainers</h2>
                <DashCommunity 
                    communityData={{
                        name: 'The Beaches',
                        municipality: 'Toronto',
                        avgPrice: 1453521,
                        change: 7.32
                    }}
                />
                <DashCommunity 
                    communityData={{
                        name: 'The Annex',
                        municipality: 'Toronto',
                        avgPrice: 1356213,
                        change: 6.74
                    }}
                />
            </div>
        );
    }
}

export default Dashboard;