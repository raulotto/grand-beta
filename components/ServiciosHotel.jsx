import {
    FaCoffee, FaUtensils, FaDog, FaGlassMartiniAlt, FaTv, FaWifi, FaCocktail, FaWheelchair,
    FaSpa, FaDumbbell, FaParking, FaDoorOpen, FaHotTub, FaCheckCircle, FaShower, FaFan,
    FaTshirt, FaPlug, FaBoxOpen, FaConciergeBell
  } from 'react-icons/fa';
  
  const servicios = [
    { nombre: 'Desayuno Incluido', icono: <FaCoffee /> },
    { nombre: 'Restaurante Páprika', icono: <FaUtensils /> },
    { nombre: 'Paraka Barrio Gourmet', icono: <FaUtensils /> },
    { nombre: 'Spa', icono: <FaSpa /> },
    { nombre: 'Wallak Bar', icono: <FaGlassMartiniAlt /> },
    { nombre: 'Dog Friendly (sin costo)', icono: <FaDog /> },
    { nombre: 'Minibar', icono: <FaBoxOpen /> },
    { nombre: 'Lavandería', icono: <FaTshirt /> },
    { nombre: 'Piscina temperada', icono: <FaHotTub /> },
    { nombre: 'Cafetera', icono: <FaCoffee /> },
    { nombre: 'TV Cable', icono: <FaTv /> },
    { nombre: 'Wifi gratuito', icono: <FaWifi /> },
    { nombre: 'Gimnasio', icono: <FaDumbbell /> },
    { nombre: 'Caja fuerte', icono: <FaBoxOpen /> },
    { nombre: 'Bata y pantuflas', icono: <FaConciergeBell /> },
    { nombre: 'Cóctel de bienvenida', icono: <FaCocktail /> },
    { nombre: 'Self check in', icono: <FaCheckCircle /> },
    { nombre: 'Premium Amenities', icono: <FaBoxOpen /> },
    { nombre: 'Aire acondicionado', icono: <FaFan /> },
    { nombre: 'Sala de eventos', icono: <FaDoorOpen /> },
    { nombre: 'Silla de ruedas', icono: <FaWheelchair /> },
    { nombre: 'Plancha y planchador', icono: <FaTshirt /> },
    { nombre: 'Hervidora', icono: <FaPlug /> },
    { nombre: 'Estacionamiento Incluido', icono: <FaParking /> },
    { nombre: 'Servicio a la habitación', icono: <FaConciergeBell /> },
  ];
  
  const ServiciosHotel = () => {
    return (
      <section className="SectionDiv BgImageLeft bg-primary-dune/60">
        <div className='ContainerFlex flex-col'>
        <h4 className="TitleSectionMd">Incluido con cada estancia</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full">
          {servicios.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary-oceanic text-lg pr-2">{item.icono}</span>
              <span className="text-gray-500">{item.nombre}</span>
            </div>
          ))}
        </div>
        </div>
      </section>
      
    );
  };
  
  export default ServiciosHotel;
  