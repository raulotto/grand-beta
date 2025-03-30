import HotelCard from "./HotelCard ";

const HotelesGrid = () => {
  return (
    <section className="SectionDiv">
      <h2 className="text-2xl font-semibold mb-6">Encuentra un destino especial</h2>
      <div className="ContainerFlex">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <HotelCard
  href="#"
  image="/images/chiclayo.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Chiclayo"
/>
<HotelCard
  href="#"
  image="/images/cusco.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Cusco"
/>
<HotelCard
  href="#"
  image="/images/arequipa.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Arequipa"
/>
<HotelCard
  href="#"
  image="/images/cajamarca.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Cajamarca"
/>
<HotelCard
  href="#"
  image="/images/pucallpa.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Pucallpa"
/>
<HotelCard
  href="#"
  image="/images/trujillo-golf.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Trujillo Golf"
/>
<HotelCard
  href="#"
  image="/images/trujillo-centro.jpg"
  title="Costa del Sol"
  city="Trujillo Centro"
/>
<HotelCard
  href="#"
  image="/images/piura.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Piura"
/>
<HotelCard
  href="#"
  image="/images/tumbes.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Tumbes"
/>
<HotelCard
  href="#"
  image="/images/lima-aeropuerto.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Lima Aeropuerto"
/>
<HotelCard
  href="#"
  image="/images/lima-ciudad.jpg"
  badge="/images/tripadvisor-badge.png"
  title="Costa del Sol Wyndham"
  city="Lima City"
/>
<HotelCard
  href="#"
  image="/images/lima-grand.jpg"
  title="Wyndham Grand Costa del Sol"
  city="Lima Airport"
  tags={["Ver más", "Nuevo"]}
/>

      </div>
      </div>
    </section>
  );
};

export default HotelesGrid;
