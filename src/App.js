import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import lightOrangeMap from './LightOrangeMap';
import Dashboard from './components/Dashboard/Dashboard';
import Community from './components/Community/Community';


export class App extends Component {

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={10}
          styles={lightOrangeMap.mapStyle}
          
          initialCenter={
            {
              lat: 43.8012,
              lng: -79.3832
            }
          }
          disableDefaultUI={true}
          disableDoubleClickZoom={true}
        />
        <Dashboard />
        <Community 
          communityData={{
            name: 'Hillcrest Village',
            municipality: 'Toronto',
            avgPrice: 789129,
            change: 3.12
          }}
        />
      </div>
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAJ985J5vexZFuD8uNt3GB0iMAQ7OHRx7w'
})(App);