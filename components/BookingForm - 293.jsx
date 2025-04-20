// ✅ BookingForm.jsx usando contexto
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { RxCalendar } from "react-icons/rx";
import es from "date-fns/locale/es";
import { useBooking } from "@/context/BookingContext";


registerLocale("es", es);

export default function BookingForm() {
  const { showForm, setShowForm, formIsSticky } = useBooking();
  const [shouldRender, setShouldRender] = useState(showForm);
  
  useEffect(() => {
    if (showForm) {
      setShouldRender(true); // mostrar inmediatamente
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 700); // espera que termine la animación
      return () => clearTimeout(timeout);
    }
  }, [showForm]);
  
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [dateRange, setDateRange] = useState([today, tomorrow]);
  const [startDate, endDate] = dateRange;
  const [query, setQuery] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Controla si mostramos el dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Ref para detectar clics fuera del contenedor
  const locationRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hotelsGrouped = {
    Arequipa: [{ name: "Costa del Sol Wyndham Arequipa", id: "109836" }],
    Cajamarca: [{ name: "Costa del Sol Wyndham Cajamarca", id: "104307" }],
    Chiclayo: [{ name: "Costa del Sol Wyndham Chiclayo", id: "104314" }],
    Cusco: [{ name: "Costa del Sol Wyndham Cusco", id: "104313" }],
    Lima: [
      { name: "Costa del Sol Wyndham Lima Airport", id: "105840" },
      { name: "Costa del Sol Wyndham Lima City", id: "104308" },
      { name: "Wyndham Grand Costa del Sol Lima Airport", id: "9878731" },
    ],
    Piura: [{ name: "Costa del Sol Wyndham Piura", id: "104305" }],
    Pucallpa: [{ name: "Costa del Sol Wyndham Pucallpa", id: "104310" }],
    Trujillo: [
      { name: "Costa del Sol Wyndham Trujillo Golf", id: "104309" },
      { name: "Costa del Sol Trujillo Centro", id: "109838" },
    ],
    Tumbes: [{ name: "Costa del Sol Wyndham Tumbes", id: "104326" }],
  };

  const formatDate = (date) =>
    date?.toLocaleDateString("es-PE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  // Input para datepicker
  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-left w-full"
    >
      <RxCalendar />
      {startDate && endDate ? (
        <span>
          {formatDate(startDate)} — {formatDate(endDate)}
        </span>
      ) : (
        <span className="text-gray-400">Seleccionar fechas</span>
      )}
    </button>
  ));

  // Al enviar el form sin hotel, no dejamos avanzar.
  const handleSubmit = (e) => {
    if (!selectedHotel) {
      e.preventDefault();
      alert("Selecciona un hotel");
      return;
    }
    e.target.action = `https://reservations.travelclick.com/${selectedHotel.id}`;
  };

  // Renderiza la lista de hoteles, filtrando por `query`
  const renderGroupedHotels = () => {
    const lowerQuery = query.toLowerCase().trim();

    // Si `query` está vacío, mostramos TODO
    // Si no, filtramos por coincidencia
    return Object.entries(hotelsGrouped).map(([region, hotels]) => {
      const matched =
        !lowerQuery
          ? hotels
          : hotels.filter((h) => h.name.toLowerCase().includes(lowerQuery));

      if (matched.length === 0) return null;

      return (
        <div key={region} className="py-1">
          <div className="RegionLocation">{region}</div>
          {matched.map((hotel) => (
            <div
              key={hotel.id}
              className="px-4 py-2 text-light-oceanic hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedHotel(hotel);
                setQuery(hotel.name);
                setShowDropdown(false);
              }}
            >
              <div className="text-sm">{hotel.name}</div>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div
      className={`FormTC 
      ${showForm ? "transition-all duration-600 ease-in-out lg:transition-none opacity-100 fixed" : 
      "-translate-y-full  z-[2]  transition-all duration-600 ease-in-out lg:transition-none"}
      ${formIsSticky ? "fixed max-w-full right-0 top-0 lg:top-35 left-50% w-full z-50  shadow-sm rounded-none StickyFormCar" : ""}`}
    >
      <div className="HeadHiddenForm">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(false);
          }}
        >
          X Cerrar
        </Link>
      </div>
<div className="ContainerFlexOSize">
      <form
        name="resform"
        id="resform"
        className="ResForm"
        method="get"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <input name="LanguageID" type="hidden" value="2" />
        {selectedHotel && (
          <input type="hidden" name="HotelID" value={selectedHotel.id} />
        )}

        <div className="flex flex-col col-span-4 lg:col-span-4 relative">
          <label className="text-xs text-gray-500 uppercase tracking-wide mb-1">
           
          </label>

          {/* Contenedor con ref para detectar click outside */}
          <div className="relative" ref={locationRef}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
                setSelectedHotel(null);
              }}
              onFocus={() => {
                // Si ya había un hotel, lo limpiamos para iniciar búsqueda nueva
                if (selectedHotel) {
                  setSelectedHotel(null);
                  setQuery("");
                }
                setShowDropdown(true);
              }}
              placeholder="Seleccionar Hotel"
              className="border border-gray-300  rounded-md px-4 py-2 text-sm w-full pr-8"
            />

            {/* Botón para resetear la selección */}
            {selectedHotel && (
              <button
                type="button"
                onClick={() => {
                  setSelectedHotel(null);
                  setQuery("");
                }}
                className="absolute right-2 top-2 text-secondary-terracota font-bold hover:text-red-600 text-sm"
              >
                ✕
              </button>
            )}

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1  shadow-md max-h-64 overflow-y-auto">
                {renderGroupedHotels()}
              </div>
            )}
          </div>
        </div>

        {/* Sección de fechas */}
        <div className="flex flex-col col-span-4 lg:col-span-3">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
          </span>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            monthsShown={2}
            minDate={today}
            locale="es"
            customInput={<CustomDateInput />}
            dateFormat="MM/dd/yyyy"
          />
          {startDate && endDate && (
            <>
              <input
                type="hidden"
                name="datein"
                value={`${(startDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}/${startDate
                  .getDate()
                  .toString()
                  .padStart(2, "0")}/${startDate.getFullYear()}`}
              />
              <input
                type="hidden"
                name="dateout"
                value={`${(endDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}/${endDate
                  .getDate()
                  .toString()
                  .padStart(2, "0")}/${endDate.getFullYear()}`}
              />
            </>
          )}
        </div>

        {/* Promocode */}
        <div className="flex flex-col col-span-4 lg:col-span-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
          </span>
          <input
            type="text"
            name="discount"
            className="border border-gray-300  rounded-md px-4 py-2 text-sm"
          />
        </div>

        {/* Botón Reservar */}
        <div className="flex flex-col col-span-4 lg:col-span-3">
          <button
            type="submit"
            className="h-full w-full bg-[#40666a] text-white text-lg font-serif rounded-md px-4 py-1"
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
