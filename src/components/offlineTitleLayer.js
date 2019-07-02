import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import localforage from 'localforage';
import L from "leaflet";

// class OfflineTileLayer extends TileLayer {
//   constructor(props){
//         super(props);
//       }
// 	createLeafletElement() {
//   	return new L.tileLayer.offline(
//       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//       localforage,
//       {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         minZoom: 5,
//         maxZoom: 20,
//         crossOrigin: true,
//       }
//     );
//   }
// }
// export default OfflineTileLayer