import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import RestaurantesGallery from '@/components/RestaurantesGallery'




export default function Restaurantes() {
  return (
    <main className="mx-auto">
        <HeroSlider />
        <Header />
      {/* SECCIÓN: Déjate envolver por ... */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Déjate envolver por los sabores de Lima</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
            Descubre la reconocida escena culinaria de Perú junto con un ambiente sofisticado y un servicio excepcional en Wyndham Grand Costa del Sol Lima Airport. Comienza el día con energía disfrutando de un variado desayuno buffet que combina lo mejor de la gastronomía peruana y mundial en nuestro restaurante internacional abierto todo el día.
            Nuestro elegante bar 24/7 ofrece cócteles elaborados por expertos, además de una selecta carta de vinos, licores y bebidas sin alcohol. Para quienes buscan algo rápido y delicioso, nuestro snack bar presenta opciones de comida callejera al estilo peruano, perfectas para viajeros en movimiento.
            Y para la máxima comodidad, el servicio a la habitación disponible las 24 horas lleva hasta tu puerta una exquisita selección de platos locales e internacionales.
          </p>
        </div>
      </section>

      {/* SECCIÓN: TARJETAS EN GRILLA Y CARRUSEL */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col w-full">

          {/* GRILLA: solo visible en md+ */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {data.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="TitleSectionMd">
                    {card.title}
                  </h3>
                  <div className=" text-parrafos">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: card.description.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CARRUSEL: solo visible en móvil */}
          <div className="block sm:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {data.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-serif text-gray-800 mb-2">
                        {card.title}
                      </h3>
                      <div className="w-12 h-[2px] bg-green-900 mb-4"></div>
                      <div className="bg-cyan-900 text-white text-sm p-4 rounded shadow-inner leading-relaxed whitespace-pre-line">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: card.description.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

        {/* DESAYUNO BUFFET */}
       <section className="pt-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex ">
               {/* Contenedor de imágenes */}
               <div className="w-full md:max-w-lg hidden lg:block">
         <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
           <Image
             src="/images/Costa-del-sol-Desayuno-buffet-mobile.jpg"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="flex-1 max-w-lg">
                 <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Empieza el día con desayuno buffet desde las 04:00
                 </h4>
                   
                 </div>
                 
                 <p className="text-gray-700 leading-relaxed text-parrafos">
                   Ubicado dentro de la Ciudad aeropuerto (Jorge Chávez - LIM), Wyndham
                   Grand Costa del Sol Lima Airport te evita la caminata de ida y vuelta
                   por tiempo, al estar en una ciudad estratégica, con acceso directo a la
                   terminal aérea a través de un cómodo pasillo. A tan solo 30 minutos, la
                   sede se encuentra financiera y un megaplex ideal para los 1,200 m² con
                   25 renovadas habitaciones con diseño de lujo y totalmente premium en un
                   entorno sin igual. Además, en la región se pueden encontrar sitios con
                   la importancia de Lima, como la Plaza de Armas o el Museo Submarino
                   Abtao, la Catedral de Lima, la iglesia de San Francisco y el icónico
                   Parque del Amor en Miraflores.
                 </p>
               </div>
             </div>
           </section>


 {/* PAPRIKA */}
 
 <section className="pt-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex ">
               {/* Contenedor de imágenes */}
               <div className="w-full md:max-w-lg hidden lg:block">
         <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
           <Image
             src="/images/wg-paprika.jpg"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="flex-1 max-w-lg">
                 <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Páprika Restaurantes
                 </h4>
                   
                 </div>
                 
                 <p className="text-gray-700 leading-relaxed text-parrafos">
                 A chic bistro concept, with the signature of Olivier da Costa. The restaurant takes over with a menu that exposes the connection between respect for traditions, with the irreverence of restaurateur Olivier, where highlights are the Monkfish Picanha or Lobster steak.
                 </p>
               </div>
             </div>
           </section>
           <RestaurantesGallery />

 {/* SARIA */}

<section className="SectionDiv">
  <div className="ContainerFlex flex-col lg:flex-row-reverse items-center gap-10 text-left">
    
    {/* Imagen a la derecha */}
    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative">
      <Image
        src="https://www.costadelsolperu.com/wp-content/uploads/2022/03/Hotel_Costa_del_Sol_wyndham_Lima_bar_2-845x684-1-768x622.jpeg"
        alt="Saria Bar"
        fill
        className="object-cover rounded-md shadow-md"
      />
    </div>

    {/* Contenido a la izquierda */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h4 className="TitleSection mb-4">
        Saria Bar
      </h4>

      <p className="text-parrafos mb-4">
        Take your seat in the early evening to enjoy an irresistible beverage and sample a seductive selection of tasty bites or join only for a relaxing nightcap.
      </p>

      <p className="text-parrafos mb-4">
        Explore the cocktails menu and try one of our signature cocktails. For the less adventurous, the classics are always available.
      </p>

      <p className="text-parrafos mb-4">
        <strong>Opening times:</strong> 5 pm to midnight (service)<br />
        5 pm to 10:30 pm (kitchen)
      </p>

      <div className="flex gap-4 mt-4">
        <button className="ButtonSolid ButtonRounded">MENU</button>
      </div>
    </div>
  </div>
</section>

<section className="SectionDiv">
  <div className="ContainerFlex flex-col lg:flex-row items-center gap-10 text-left">
    
    {/* Imagen a la izquierda */}
    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative">
      <Image
        src="https://www.costadelsolperu.com/wp-content/uploads/2022/10/Hotel_Costa_del_Sol_wyndham_Lima_galeria-2022-10.jpg"
        alt="Paraka Barrio Gourmet"
        fill
        className="object-cover rounded-md shadow-md"
      />
    </div>

    {/* Contenido a la derecha */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
    <h4 className="TitleSection mb-4">
        Paraka Barrio Gourmet
      </h4>

      <p className="text-parrafos mb-2">
        A sun-splashed spot beside the swimming pool, a popular spot for leisurely indulgence, serving cool drinks and refreshing cocktails daily from 10:30 am to 6 pm.
      </p>

      <p className="text-parrafos mb-2">
        For lunch, be tempted with a fresh, playful, delicious menu focused on healthy signature dishes, salads, pizzas and burgers.
      </p>

      <p className="text-parrafos mb-4">
        <strong>Service:</strong> 10:30 am to 5 pm<br />
        <strong>Lunch:</strong> 12 pm to 5 pm<br />
        Seasonally open
      </p>

      <div className="flex gap-4 mt-4">
        <button className="ButtonSolid ButtonRounded">MENU</button>
      </div>
    </div>
  </div>
</section>







      <Footer/>
    </main>
  );
}

const data = [
    {
      title: "Alta cocina peruana",
      description: `Descubre la esencia de la costa, sierra y selva en cada plato. En **Paprika**, la tradición peruana se fusiona con técnicas innovadoras para ofrecerte una experiencia que respeta el producto y sorprende con texturas sofisticadas. Déjate llevar por sabores auténticos reinventados con creatividad.`,
      image: "https://picsum.photos/id/1011/800/600",
    },
    {
      title: "La mejor experiencia gastronómica en Lima",
      description: `Más que un restaurante, **Paprika** es un destino gastronómico único donde la tradición y la modernidad se fusionan en un espacio al aire libre lleno de energía. Disfruta lo mejor de la comida callejera peruana con bocados irresistibles y bebidas refrescantes.`,
      image: "https://picsum.photos/id/1015/800/600",
    },
    {
      title: "Coctelería peruana",
      description: `**Saria** es **el bar cosmopolita del aeropuerto, donde Perú y el mundo se encuentran**. Disfruta cócteles de autor inspirados en la tradición peruana, cervezas artesanales y piqueos perfectos para compartir.`,
      image: "https://picsum.photos/id/1025/800/600",
    },
  ];