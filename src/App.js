import React, { Component } from 'react';
import { Polygon, Map, GoogleApiWrapper } from 'google-maps-react';
import lightOrangeMap from './LightOrangeMap';
import Dashboard from './components/Dashboard/Dashboard';
import Community from './components/Community/Community';
import Toronto from './toronto.js';
import Communities from './communities.js';

let poly = Toronto.features.map(community => {
  return ({
    name: community.properties.AREA_NAME,
    path: community.geometry.coordinates[0].map(latlng => {
      return ({
        lng: latlng[0],
        lat: latlng[1]
      });
    })
  });
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityOpen: false,
      name: 'Leaside',
      watchlist: []
    };
    this.openCommunity = this.openCommunity.bind(this);
    this.updateWatch = this.updateWatch.bind(this);
  }

  openCommunity(name) {
    if (this.state.communityOpen) {
      this.setState({name: name});
    } else {
      this.setState({
        communityOpen: true,
        name: name
      })
    }
  }

  updateWatch(community) {
    let watchlist = this.state.watchlist;
    let remove = false;
    let index;
    for (let i = 0; i < watchlist.length; i++) {
      if (community === watchlist[i]) {
        remove = true;
        index = i;
      }
    }

    if (remove) {
      watchlist.splice(index, 1);
    } else {
      watchlist.push(community);
    }

    this.setState({watchlist: watchlist});
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12}
          styles={lightOrangeMap.mapStyle}
          onLoad={this.onMapLoad}
          initialCenter={
            {
              lat: 43.6951,
              lng: -79.3751
            }
          }
          disableDefaultUI={true}
          disableDoubleClickZoom={true}
          >
            {poly.map(community => {
              return (
                <Polygon 
                  path={community.path}
                  options={{
                    strokeColor: '#e69845',
                    strokeWeight: 2,
                    fillColor: '#eddac5'
                  }}
                  clickable={true}
                  onClick={()=>{
                    this.openCommunity(community.name);
                  }}
                />
              );
            })}
          </Map>
        <Dashboard
          openCommunity={this.openCommunity}
          closeCommunity={()=>{
            this.setState({
              communityOpen: false
            });
          }}
          watchlist={this.state.watchlist}
        /> 
        <Community 
          name={this.state.name}
          closeCommunity={()=>{
            this.setState({
              communityOpen: false
            });
          }}
          watchlist={this.state.watchlist}
          updateWatch={this.updateWatch}
          style={
            this.state.communityOpen ? {transform: 'translateX(0px)'} : {transform: 'translateX(470px)'}
          }
        />
      </div>
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAJ985J5vexZFuD8uNt3GB0iMAQ7OHRx7w'
})(App);