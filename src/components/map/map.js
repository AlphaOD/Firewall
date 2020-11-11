import React, {Component} from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';

import PopupPanel from './popup-panel';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer, heatmapLayer} from './layers';

import {json as requestJson} from 'd3-request';
// import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const queryParams = {
  country: 'us'
}
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
      popupInfo: null,
    };
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    requestJson(
      'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
      (error, response) => {
        if (!error) {
          // Would need validation in backend
          const features = response.features;
          // const endTime = features[0].properties.time;
          // const startTime = features[features.length - 1].properties.time;

          this.setState({
            data: response
          });
        }
      }
    );
  };
  componentDidUpdate(){
    
  }

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
    console.log(event);

    //Regular click to close popup
    if (event.features[0] === undefined ){
      this.setState({
        showPopup: false
      });
      return
    }//Specific fire click
    else if (event.features[0].layer.id !== "clusters"){
      console.log("IN")
      const feature = event.features[0];
      // console.log(popup);
      // _renderPopup
      // console.log(popup);
      this.setState({
        showPopup: true,
        popupInfo: feature
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
    const {viewport, data} = this.state;

    //data to be loaded in ComponentDidMount and state
    const mapData = {
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
    return (
      <ReactMapGL
        {...viewport}
        width="100vm"
        height="50vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange}
        {...mapAccess}
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        onClick={this._onClick}
        
      >
        {/* <Geocoder
          mapRef={this._sourceRef.current}
          onViewportChange={this.handleGeocoderViewportChange}
          {...mapAccess}
          position="top-left"
        /> */}
        
        {/* {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )} */}
          
        <Source
          type="geojson"
          data={mapData}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          ref={this._sourceRef}
        >
          <Layer  {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        {this.state.showPopup && <PopupPanel
          info={this.state.popupInfo}
          latitude={37.78}
          longitude={-122.41}
          closeButton={true}
          closeOnClick={false}/>
          }
      </ReactMapGL>
    );
  }
 }