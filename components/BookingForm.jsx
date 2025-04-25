// BookingForm.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { RxCalendar } from "react-icons/rx";
import es from "date-fns/locale/es";
import { useBooking } from "@/context/BookingContext";
import MenuInterno from "./MenuInterno";

registerLocale("es", es);


export default function BookingForm({ embedMenu }) {
  const { showForm, setShowForm, formIsSticky } = useBooking();
  const locationRef = useRef(null);
  const dropdownRef = useRef(null);

  const [shouldRender, setShouldRender] = useState(showForm);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRateType, setSelectedRateType] = useState("discount");
  const [discountCode, setDiscountCode] = useState("");
  const [corporateCode, setCorporateCode] = useState("");
  const [showPromoBox, setShowPromoBox] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowPromoBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  useEffect(() => {
    if (showForm) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [showForm]);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  
  const defaultHotel = {
    name: "Wyndham Grand Costa del Sol Lima Airport",
    id: "9878731"
  };
  
  const [dateRange, setDateRange] = useState([today, tomorrow]);
  const [startDate, endDate] = dateRange;
  const [selectedHotel, setSelectedHotel] = useState(defaultHotel);
  const [query, setQuery] = useState(defaultHotel.name);
  

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

  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex items-center gap-2 border bg-white border-gray-300 px-4 py-2 text-left w-full text-sm"
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
    e.preventDefault();
    if (!selectedHotel) {
      alert("Selecciona un hotel");
      return;
    }

    const baseUrl = `https://reservations.travelclick.com/${selectedHotel.id}?LanguageID=2`;

    const params = new URLSearchParams();
    if (selectedRateType === "discount" && discountCode) {
      params.append("discount", discountCode);
    } else if (selectedRateType === "identifier" && corporateCode) {
      params.append("identifier", corporateCode);
    }

    if (startDate && endDate) {
      const format = (d) =>
        `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d
          .getDate()
          .toString()
          .padStart(2, "0")}/${d.getFullYear()}`;
      params.append("datein", format(startDate));
      params.append("dateout", format(endDate));
    }

    const finalUrl = `${baseUrl}&${params.toString()}`;
    window.open(finalUrl, "_blank");

    // Reset
    setDiscountCode("");
    setCorporateCode("");
    setSelectedRateType("discount");
    setShowPromoBox(false);
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
      ${formIsSticky ? "fixed max-w-full right-0 top- lg:top-34 left-50% w-full z-50   StickyFormCar" : ""}`}
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
  {embedMenu && (
    <div className="lg:block ">
      <MenuInterno embedMenu={embedMenu} />

    </div>
  )}

<form
  name="resform"
  id="resform"
  className={`ResForm ${embedMenu ? "lg:grid-cols-6" : "lg:grid-cols-12"}`}
  method="get"
  target="_blank"
  onSubmit={handleSubmit}
>

        <input name="LanguageID" type="hidden" value="2" />
        {selectedHotel && (
          <input type="hidden" name="HotelID" value={selectedHotel.id} />
        )}

        <div
          className={`flex flex-col col-span-4 lg:col-span-4 relative ${
            embedMenu ? "hidden" : ""
          }`}
        >
          <label className="text-xs text-gray-500 uppercase tracking-wide">
          </label>
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
                if (query !== "") {
                  setQuery("");
                  setSelectedHotel(null);
                }
                setShowDropdown(true);
              }}
              
              placeholder="Seleccionar Hotel"
              className="border border-gray-300 px-4 py-2 text-sm w-full pr-8"
            />
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
            {showDropdown && (
              <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1  max-h-64 overflow-y-auto">
                {renderGroupedHotels()}
              </div>
            )}
          </div>
        </div>

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
        <div
        ref={dropdownRef}
          className={`flex flex-col col-span-4 lg:col-span-2 relative  ${
            embedMenu ? "hidden" : ""
          }`}
        >
            <input
              type="text"
              readOnly
              value={
                selectedRateType === "discount" ? discountCode : corporateCode
              }
              onClick={() => setShowPromoBox(!showPromoBox)}
              placeholder="Código"
              className="border border-gray-300 px-4 py-2 text-sm"
            />

            {showPromoBox && (
              <div className="absolute z-10 bg-white border border-gray-200 w-[230px] mt-9  p-4 space-y-4">
                <p className="text-sm font-semibold ">Seleccionar tipo de tarifa</p>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="rateType"
                      value="discount"
                      checked={selectedRateType === "discount"}
                      onChange={() => setSelectedRateType("discount")}
                    />
                    Código Promocional
                  </label>
                  {selectedRateType === "discount" && (
  <input
    type="text"
    className="border border-gray-300 mt-1 px-2 py-1 w-full text-sm"
    placeholder="Ingresar código"
    value={discountCode}
    onChange={(e) => setDiscountCode(e.target.value)}
  />
)}

                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="rateType"
                      value="identifier"
                      checked={selectedRateType === "identifier"}
                      onChange={() => setSelectedRateType("identifier")}
                    />
                    Código Corporativo
                  </label>
                  {selectedRateType === "identifier" && (
  <input
    type="text"
    className="border border-gray-300 mt-1 px-2 py-1 w-full text-sm"
    placeholder="Ingresar código"
    value={corporateCode}
    onChange={(e) => setCorporateCode(e.target.value)}
  />
)}

                </div>
              </div>
            )}
          </div>

        <div className="flex flex-col col-span-4 lg:col-span-3">
          <button
            type="submit"
            className="ColorButton1 h-[36px] w-full px-4 py-1 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            Reservar
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
