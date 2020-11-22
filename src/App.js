import React, { Component } from 'react';
import { Polygon, Map, GoogleApiWrapper } from 'google-maps-react';
import lightOrangeMap from './LightOrangeMap';
import Dashboard from './components/Dashboard/Dashboard';
import Community from './components/Community/Community';
import Toronto from './toronto.js';
import Communities from './communities.js';

let poly = Toronto.features.map(community => {
  return ({
    data: {
      name: community.properties.AREA_NAME,
      municipality: 'Toronto',
      avgPrice: 789129,
      change: 3.12
    },
    path: community.geometry.coordinates[0].map(latlng => {
      return ({
        lng: latlng[0],
        lat: latlng[1]
      });
    })
  });
});

export class App extends Component {
  constructor() {
    super();
    this.state = {
      communityOpen: false,
      communityData: {
        name: 'Hillcrest Village',
        municipality: 'Toronto',
        avgPrice: 789129,
        change: 3.12
      }
    };
    this.openCommunity = this.openCommunity.bind(this);
  }

  openCommunity(communityData) {
    if (this.state.communityOpen) {
      this.setState({communityData: communityData});
    } else {
      this.setState({
        communityOpen: true,
        communityData: communityData
      })
    }
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
                    this.openCommunity(community.data);
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
        /> 
        <Community 
          communityData={this.state.communityData}
          closeCommunity={()=>{
            this.setState({
              communityOpen: false
            });
          }}
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