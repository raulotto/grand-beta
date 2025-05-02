import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -12.0300049,
  lng: -77.1188108
};

const MapaPersonalizado = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'TU_API_KEY' // usa process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY si lo pasas por entorno
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  ) : <p>Cargando mapa...</p>;
};

export default MapaPersonalizado;
