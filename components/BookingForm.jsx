import React, { useState } from "react";
import Link from "next/link";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { RxCalendar } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

import es from "date-fns/locale/es";
registerLocale("es", es);

export default function BookingForm({ showForm, onCloseForm, isFixed })
 {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [dateRange, setDateRange] = useState([today, tomorrow]);
  const [startDate, endDate] = dateRange;

  const [query, setQuery] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const hotelsGrouped = {
    Arequipa: [{ name: "Costa del Sol Wyndham Arequipa", id: "109836" }],
    Cajamarca: [{ name: "Costa del Sol Wyndham Cajamarca", id: "104307" }],
    Chiclayo: [{ name: "Costa del Sol Wyndham Chiclayo", id: "104314" }],
    Cusco: [{ name: "Costa del Sol Wyndham Cusco", id: "104313" }],
    Lima: [
      { name: "Costa del Sol Wyndham Lima Airport", id: "105840" },
      { name: "Costa del Sol Wyndham Lima City", id: "104308" },
      { name: "Wyndham Grand Costa del Sol Lima Airport", id: "104308" },
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

  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-left w-full text-sm"
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

  const handleSubmit = (e) => {
    if (!selectedHotel) {
      e.preventDefault();
      alert("Selecciona un hotel");
      return;
    }

    e.target.action = `https://reservations.travelclick.com/${selectedHotel.id}`;
  };

  const renderGroupedHotels = () => {
    const lowerQuery = query.toLowerCase();

    return Object.entries(hotelsGrouped).map(([region, hotels]) => {
      const matched = hotels.filter((h) =>
        h.name.toLowerCase().includes(lowerQuery)
      );

      if (matched.length === 0) return null;

      return (
        <div key={region} className="py-1">
          <div className="RegionLocation">
            {region}
          </div>
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
    <div className={`FormTC 
    ${showForm ? "transition-all duration-500 ease-in-out lg:transition-none opacity-100 fixed " : 
    " -translate-y-full  z-[1] bg-white transition-all duration-500 ease-in-out lg:transition-none "}
    ${isFixed ? "fixed max-w-full right-0 top-0 lg:top-22 left-50% w-full z-50 bg-white shadow-md rounded-none" : ""}`}>


      <div className="HeadHiddenForm">
        <Link href={"#"} onClick={(e) => {
            e.preventDefault();
            onCloseForm();
          }}>X Cerrar</Link>
      </div>
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

        {/* Campo búsqueda de hotel con limpieza */}
        <div className="flex flex-col col-span-4 lg:col-span-4 relative">
          <label className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            ¿Adónde vas?
          </label>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
                setSelectedHotel(null);
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Seleccionar Hotel"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full pr-8"
            />
            {/* X para limpiar */}
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
              <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded-md shadow-md max-h-64 overflow-y-auto">
                {renderGroupedHotels()}
              </div>
            )}
          </div>
        </div>

        {/* Fecha Check-in + Check-out */}
        <div className="flex flex-col col-span-4 lg:col-span-3">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Fechas
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
            className="font-gotham-book "
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

        {/* Occupancy */}
        

        {/* Promo code */}
        <div className="flex flex-col col-span-4 lg:col-span-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Promocode
          </span>
          <input
            type="text"
            name="discount"
            placeholder=""
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col col-span-4 lg:col-span-3">
          <button
            type="submit"
            className="h-full w-full bg-[#40666a] text-white text-lg font-serif px-6 py-3"
          >
            Book here
          </button>
        </div>
      </form>
    </div>
  );
}
