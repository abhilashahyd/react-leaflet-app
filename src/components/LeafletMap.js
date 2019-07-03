import React,{Component} from 'react';
import { Map , Marker, Popup, TileLayer } from 'react-leaflet';
import '../App.css';
import L from "leaflet";
import  MarkerClusterGroup  from "react-leaflet-markercluster";
import localforage from 'localforage';
import 'leaflet-offline';

const markerList = [
  {
    lat: 17.441013,
    lng: 78.391796,
    name: "ABC Hospitals",
    info: 10
  },
  {
    lat: 17.442889,
    lng: 78.396873,
    name: "XYZ Hospitals",
    info: 20
  },
  {
    lat: 17.441681,
    lng: 78.394357,
    name: "NRI Hospitals",
    info: 10
  },
  {
    lat:17.441597,
    lng: 78.356214,
    name:"sandya Hospitals"
  },
  {
    lat:17.441264, 
    lng:78.360184,
    name:"childrens Hospitals"
  }
];

const customMarker = new L.icon({
  iconUrl: require('../assets/hostpital-building.svg'),
  iconSize: new L.Point(35, 46),
  // iconAnchor:   [22, 94],
});

class LeafletMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 17.44212,
      lng: 78.391384,
      zoom: 15,
      maxZoom: 30
    }
  }
  componentDidMount() {
    const map = L.map('map-id');
    const offlineLayer = L.tileLayer.offline('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', localforage, {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abc',
    minZoom: 13,
    maxZoom: 19,
    crossOrigin: true
});
    offlineLayer.addTo(map);
  }
  customIconCreateFunction(cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "marker-cluster-custom",
      iconSize: L.point(40, 40, true)
    });
  }

  
  renderPopup = (index) =>{
    return (
      <Popup
        tipSize={5}
        anchor="bottom-right"
        longitude={markerList[index].lng}
        latitude={markerList[index].lat}
      >
        <p>
          <strong>{markerList[index].name}</strong>
          <br />
          Available beds:{markerList[index].info}
        </p>
      </Popup>
    );
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log(position);
    
    return (
      <div id="map-id">
       <Map center={position} zoom={13} maxZoom={20} id="map" >
        <TileLayer
          attribution="&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         <MarkerClusterGroup
          showCoverageOnHover={true}
          spiderfyDistanceMultiplier={2}
          iconCreateFunction={this.customIconCreateFunction}
        >
          {markerList.map((marker, index) => {
            let post = [marker.lat, marker.lng];
            return (
              <Marker key={index} position={post} icon={customMarker} >
                {this.renderPopup(index)}
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </Map>
      </div>
    );
  }
}

export default LeafletMap;
