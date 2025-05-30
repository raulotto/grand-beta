// BookingForm.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { RxCalendar } from "react-icons/rx";
import es from "date-fns/locale/es";
import { useBooking } from "@/context/BookingContext";
import MenuInterno from "./MenuInterno";
import lang from "@/data/lang";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdEditNote } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import LogoHeader from "./LogoHeader";
import { RxCross2 } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';

registerLocale("es", es);

export default function BookingForm({ embedMenu, initialHotel }) {
  const { showForm, setShowForm, formIsSticky } = useBooking();
  const locationRef = useRef(null);
  const dropdownRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(showForm);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRateType, setSelectedRateType] = useState("discount");
  const [discountCode, setDiscountCode] = useState("");
  const [corporateCode, setCorporateCode] = useState("");
  const [showPromoBox, setShowPromoBox] = useState(false);

const [showModifyModal, setShowModifyModal] = useState(false);
const [selectedHotelId, setSelectedHotelId] = useState('');
const [confirmId, setConfirmId] = useState('');
const pathname = usePathname();
const currentLang = pathname.startsWith('/en') ? 'en' : 'es';

  const t = lang[currentLang];

const modalRef = useRef(null);

useEffect(() => {
  if (!showModifyModal) return;

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModifyModal(false);
    }
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      setShowModifyModal(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscKey);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscKey);
  };
}, [showModifyModal]);

  const hotelList = [
  { id: '104326', name: 'Tumbes' },
  { id: '104305', name: 'Piura' },
  { id: '104314', name: 'Chiclayo' },
  { id: '104309', name: 'Trujillo Golf' },
  { id: '109838', name: 'Trujillo Centro' },
  { id: '104307', name: 'Cajamarca' },
  { id: '105840', name: 'Lima Aeropuerto' },
  { id: '9878731', name: 'Wyndham Grand' },
  { id: '104308', name: 'Lima Ciudad' },
  { id: '109836', name: 'Arequipa' },
  { id: '104313', name: 'Cusco' },
  { id: '104310', name: 'Pucallpa' },
];


  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [dateRange, setDateRange] = useState([today, tomorrow]);
  const [startDate, endDate] = dateRange;

  const hotelCodes = {
    lim: { name: "Costa del Sol Wyndham Lima City", id: "104308" },
    aer: { name: "Costa del Sol Wyndham Lima Airport", id: "105840" },
    wga: { name: "Wyndham Grand Costa del Sol Lima Airport", id: "9878731" },
    puc: { name: "Costa del Sol Wyndham Pucallpa", id: "104310" },
    tum: { name: "Costa del Sol Wyndham Tumbes", id: "104326" },
    piu: { name: "Costa del Sol Wyndham Piura", id: "104305" },
    trg: { name: "Costa del Sol Wyndham Trujillo Golf", id: "104309" },
    trc: { name: "Costa del Sol Trujillo Centro", id: "109838" },
    caj: { name: "Costa del Sol Wyndham Cajamarca", id: "104307" },
    cix: { name: "Costa del Sol Wyndham Chiclayo", id: "104314" },
    are: { name: "Costa del Sol Wyndham Arequipa", id: "109836" },
    cus: { name: "Costa del Sol Wyndham Cusco", id: "104313" }
  };

  const foundHotel = initialHotel?.code && hotelCodes[initialHotel.code] ? hotelCodes[initialHotel.code] : null;

  const [selectedHotel, setSelectedHotel] = useState(foundHotel || null);
  const [query, setQuery] = useState(foundHotel ? foundHotel.name : "");

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showForm) setShouldRender(true);
    else {
      const timeout = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [showForm]);
useEffect(() => {
  if (showForm) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [showForm]);

  const hotelsGrouped = {
    Arequipa: [{ name: "Costa del Sol Wyndham Arequipa", id: "109836" }],
    Cajamarca: [{ name: "Costa del Sol Wyndham Cajamarca", id: "104307" }],
    Chiclayo: [{ name: "Costa del Sol Wyndham Chiclayo", id: "104314" }],
    Cusco: [{ name: "Costa del Sol Wyndham Cusco", id: "104313" }],
    Lima: [
      { name: "Costa del Sol Wyndham Lima Airport", id: "105840" },
      { name: "Costa del Sol Wyndham Lima City", id: "104308" },
      { name: "Wyndham Grand Costa del Sol Lima Airport", id: "9878731" }
    ],
    Piura: [{ name: "Costa del Sol Wyndham Piura", id: "104305" }],
    Pucallpa: [{ name: "Costa del Sol Wyndham Pucallpa", id: "104310" }],
    Trujillo: [
      { name: "Costa del Sol Wyndham Trujillo Golf", id: "104309" },
      { name: "Costa del Sol Trujillo Centro", id: "109838" }
    ],
    Tumbes: [{ name: "Costa del Sol Wyndham Tumbes", id: "104326" }]
  };

  const formatDate = (date) =>
    date?.toLocaleDateString(currentLang === "en" ? "en-US" : "es-PE", {
      weekday: "short",
      day: "numeric",
      month: "short"
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
        <p>
          {formatDate(startDate)} — {formatDate(endDate)}
        </p>
      ) : (
        <span className="text-gray-400">{t.selectDates}</span>
      )}
    </button>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedHotel) {
      alert(t.selectHotelAlert);
      return;
    }

    const baseUrl = `https://reservations.travelclick.com/${selectedHotel.id}?LanguageID=${currentLang === "en" ? "1" : "2"}`;
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

    setDiscountCode("");
    setCorporateCode("");
    setSelectedRateType("discount");
    setShowPromoBox(false);
  };

  const renderGroupedHotels = () => {
    const lowerQuery = query.toLowerCase();
    return Object.entries(hotelsGrouped).map(([region, hotels]) => {
      const matched = hotels.filter((h) => h.name.toLowerCase().includes(lowerQuery));
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
              <div className="text-[12px]">{hotel.name}</div>
            </div>
          ))}
        </div>
      );
    });
  };
const [errorHotel, setErrorHotel] = useState(false);
const [errorConfirmId, setErrorConfirmId] = useState(false);

  return (
    <>
    <div
      className={`FormTC 
      ${showForm ? "transition-all duration-600 ease-in-out lg:transition-none opacity-100 fixed" : 
      "-translate-y-full lg:translate-y-0  z-[2]  transition-all duration-600 ease-in-out lg:transition-none"}
      ${formIsSticky ? "fixed max-w-full right-0 top- lg:top-17 left-50% w-full z-50   StickyFormCar transition-all duration-600 ease-in-out " : ""}overflow-y-auto lg:overflow-visible max-h-[100dvh] flex flex-col `}
    >
      <div className="lg:hidden ContainerFlex flex-row px-6 lg:px-[0px] lg:py-[20px] justify-between items-center">
        <LogoHeader isActive={true}  />
      </div>

      <div className="ContainerFlexOSize">
      {embedMenu && (
  <div className="transition-all duration-500 ease-in-out w-[52%]">
    <MenuInterno
  embedMenu={true}
  className={`${embedMenu ? 'block' : 'hidden'}`}
/>
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
          <p className="relative" ref={locationRef}>
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
                          
                          placeholder={t.selectHotel}
                          className="border border-gray-300 px-4 py-2 text-[sm] w-full pr-8"
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
                      </p>
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
  locale={currentLang}
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

          <p
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
              placeholder={t.code}
              className="border border-gray-300 px-4 py-2 text-sm"
            />

            {showPromoBox && (
              <div className="absolute z-10 bg-white border border-gray-200 w-[230px] mt-9  p-4 space-y-4">
              <p className="text-sm font-semibold">{t.rateType}</p>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rateType"
                    value="discount"
                    checked={selectedRateType === "discount"}
                    onChange={() => setSelectedRateType("discount")}
                  />
                  {t.promoCode}
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
                                      {t.corpCode}
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


              </p>

          <div className="flex flex-col col-span-4 lg:col-span-3 relative">
          <button
            type="submit"
            className="ColorButton1 h-[36px] w-full px-4 py-1 transition duration-300 flex items-center justify-center cursor-pointer text-[.7em] font-[800] "
          >
            {t.bookNow}
          </button>
          
        </div>
        </form>
      </div>
    <div className="LinksAdicionales ContainerFlex  gap-3 text-sm justify-center">
  <Link
    href="https://www.costadelsolperu.com/landing-grupos/"
    target="_blank"
    className="LinkGrupos"
  >
    <PiUsersThreeFill className="text-[15px]" />
    {t.textGroups}
  </Link>          

  <button
  type="button"
  className="LinkGrupos"
  onClick={() => setShowModifyModal(true)}
>
  <MdEditNote className="text-[15px]" />
  {t.textModify}
</button>


  <Link
    href="https://www.costadelsolperu.com/contacto"
    target="_blank"
    className="LinkGrupos"
  >
    <MdHelpOutline className="text-[15px]" />
    {t.textHelp}
  </Link>

  
</div>
<div className="FooterHiddenForm">
        <Link
        className="bg-secondary-terracota ButtonSolid w-full text-center py-4 flex justify-center items-center"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(false);
          }}
        >
          <RxCross2 size={20} /> Cerrar
        </Link>
      </div>
      
    </div>
    <AnimatePresence>
  {showModifyModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        ref={modalRef}
        className="bg-white w-full max-w-md p-6 rounded-lg relative shadow-lg"
      >
      <button
        onClick={() => setShowModifyModal(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
      >
        <RxCross2 size={20} />
      </button>

      <h2 className="text-lg font-bold mb-4">
        {t.textModifyTitle}
      </h2>
      <p>
        {t.textModifySubTitle}
      </p>

      <div className="mb-4">
  {errorHotel && (
    <p className="text-sm text-red-500 mb-1">
      {currentLang === 'en' ? 'Please select a hotel' : 'Selecciona un hotel'}
    </p>
  )}
  <select
    value={selectedHotelId}
    onChange={(e) => {
      setSelectedHotelId(e.target.value);
      setErrorHotel(false);
    }}
    className={`w-full border px-3 py-2 rounded ${errorHotel ? 'border-red-500' : 'border-gray-300'}`}
  >
    <option value="">{currentLang === 'en' ? 'Select a Hotel' : 'Seleccionar Hotel'}</option>
    {hotelList.map((hotel) => (
      <option key={hotel.id} value={hotel.id}>
        {hotel.name}
      </option>
    ))}
  </select>
</div>


      <div className="mb-4">
  {errorConfirmId && (
    <p className="text-sm text-red-500 mb-1">
      {currentLang === 'en' ? 'Enter your confirmation ID' : 'Ingresa tu código de confirmación'}
    </p>
  )}
  <input
    type="text"
    placeholder="Confirm ID"
    value={confirmId}
    onChange={(e) => {
      setConfirmId(e.target.value);
      setErrorConfirmId(false);
    }}
    className={`w-full border px-3 py-2 rounded ${errorConfirmId ? 'border-red-500' : 'border-gray-300'}`}
  />
  
</div>


      <button
  onClick={() => {
    const hotelMissing = !selectedHotelId;
    const confirmMissing = !confirmId.trim();

    setErrorHotel(hotelMissing);
    setErrorConfirmId(confirmMissing);

    if (hotelMissing || confirmMissing) return;

    const baseUrl = `https://reservations.travelclick.com/${selectedHotelId}?LanguageID=${currentLang === "en" ? "1" : "2"}`;
    const url = `${baseUrl}&confirmId=${encodeURIComponent(confirmId)}#modify-booking`;

    window.open(url, '_blank');
  }}
  className="bg-primary-oceanic text-white px-4 py-2 rounded w-full"
>
  {currentLang === 'en' ? 'Search' : 'Buscar'}
</button>

    </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
