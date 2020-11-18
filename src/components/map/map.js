import React, {Component} from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';

import PopupPanel from './popup-panel';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer/*, heatmapLayer*/} from './layers';
import Pins from './pins';

import axios from 'axios';

// For Searching purpose, WIP

// import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// const queryParams = {
//   country: 'us'
// }

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MapboxAccessToken
}

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      },
      showPopup: false,
      popupInfo: 0,
      popupType: true,
      isLoaded: false,
      data: null,
    };
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
     //Getting only data for opened shelters
    axios.get(`https://opendata.arcgis.com/datasets/bcaf5fdb3db24c78afee52d4c8a02748_5.geojson?where=%20(FACILITY_USAGE_CODE%20%3D%20'EVAC'%20OR%20FACILITY_USAGE_CODE%20%3D%20'BOTH')%20%20AND%20%20(SHELTER_STATUS_CODE%20%3D%20'INACTIVE'%20OR%20SHELTER_STATUS_CODE%20%3D%20'ALERT')%20`)
    .then(res => {
      console.log(res)
      try {
        var d = res.data; 
    } catch (e) {
      console.log(e)
    }
    
      this.setState({
        data: d,
        isLoaded: true
      });
    })
  };

  componentDidUpdate(){
    
  }

  _onClickMarker = shelter => {
    this.setState({popupInfo: shelter, showPopup:true, popupType:false});
  };

  _sourceRef = React.createRef();
  _onViewportChange = viewport => this.setState({viewport});

  handleGeocoderViewportChange = (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return this._onViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    };
  
  _onClick = event => {

    //Regular click to close popup
    if (event.features[0] === undefined ){
      this.setState({
        showPopup: false
      });
      return
    }//Specific fire click
    else if (event.features[0].layer.id !== "clusters"){
      const feature = event.features[0];
      this.setState({
        showPopup: true,
        popupInfo: feature,
        popupType: true
      });

      return
    } 
    //Cluster click
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;
    const mapboxSource = this._sourceRef.current.getSource();
    //Expections to catch
    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }
      //movement of focus
      this._onViewportChange({
        ...this.state.viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
      this.setState({
        showPopup: false
      });
    });
  };

  //for testing will be replaced by onviewportchange
  onSelected = (viewport, item) => {
    this.setState({viewport});
    console.log('Selected: ', item)
}

  
  render() {
    const {viewport} = this.state;
    const mapdata = require('../../static/ex/fire.geojson');
    const a = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            id: '1',
            name: 'One',
          },
          geometry: {
            coordinates: [-79.887, 33.015],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '2',
            name: 'two',
          },
          geometry: {
            coordinates: [-110.867, 33.42],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '3',
            name: 'three',
          },
          geometry: {
            coordinates: [ -150.5129, 64.1016, 0.0 ],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '3',
            name: 'three',
          },
          geometry: {
            coordinates: [ -152.5129, 63.1016, 0.0 ],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '3',
            name: 'three',
          },
          geometry: {
            coordinates: [ -150.5129, 63.1016, 0.0 ],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '3',
            name: 'three',
          },
          geometry: {
            coordinates: [ -150.5129, 62.1016, 0.0 ],
            type: 'Point',
          }
        },
        {
          type: 'Feature',
          properties: {
            id: '10',
            name: 'Testing point',
          },
          geometry: {
            coordinates: [ -122.74041066894553, 38.0567804350058, 0.0 ],
            type: 'Point',
          }
        },
     ],
    }
    const { isLoaded, data } = this.state;
    return (
      <div>
      {isLoaded? (
          <ReactMapGL
            {...viewport}
            width="100vm"
            height="75vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={this._onViewportChange}
            {...mapAccess}
            interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
            onClick={this._onClick}
          >
            {/* Geocoder for searching - WIP */}
            {/* <Geocoder
              mapRef={this._sourceRef.current}
              onViewportChange={this.handleGeocoderViewportChange}
              {...mapAccess}
              position="top-left"
            /> */}
            
            {/* Data from database - WIP */}
            {/* {data && (
                <Source type="geojson" data={data}>
                  <Layer {...heatmapLayer} />
                </Source>
              )} */}
              
            {/* cluster layers */}
            <Source
              type="geojson"
              data={mapdata}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
              ref={this._sourceRef}
            >
              <Layer  {...clusterLayer} />
              <Layer {...clusterCountLayer('visible')} />
              <Layer {...unclusteredPointLayer} />
            </Source>

            {/* Pins for shelters, visible at zoom level >= 5 */}
              {this.state.viewport.zoom >= 5?(
            <Pins data={data} onClick={this._onClickMarker} />): <div/>}
            

            {/* Popup - Fire Informations */}
            {this.state.showPopup && <PopupPanel
              info={this.state.popupInfo}
              latitude={37.78}
              longitude={-122.41}
              closeButton={true}
              closeOnClick={false}
              type={this.state.popupType}/>
              }
              
          </ReactMapGL>): 
          
          // To be changed into a loading scene
          <div/>};
          </div>
    );
  }
 }