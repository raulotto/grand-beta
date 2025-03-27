import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [focusedField, setFocusedField] = useState("start");

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Cierra el calendario solo si ya hay fecha de salida
    if (start && end) {
      setOpen(false);
    }
  };

  return (
    <div className="FormTC">
    <form
      name="resform"
      id="resform"
      className="w-full grid grid-cols-6 gap-4 items-center px-6 py-4"
      action="https://search.travelclick.com/cds/"
      method="get"
      target="_blank"
    >
      <input name="LanguageID" type="hidden" value="2" />
      {startDate && (
        <input
          type="hidden"
          name="datein"
          value={format(startDate, "yyyy-MM-dd")}
        />
      )}
      {endDate && (
        <input
          type="hidden"
          name="dateout"
          value={format(endDate, "yyyy-MM-dd")}
        />
      )}

      {/* Hotel */}
      <div className="flex flex-col col-span-1">
        <label className="text-xs text-gray-500 uppercase tracking-wide">
          Hotel
        </label>
        <select className="selectorhotel" id="ub-hotel" name="hotelid">
          <option value="">Seleccionar Hotel</option>
          <option value="104326">Tumbes</option>
          <option value="104305">Piura</option>
          {/* ...otros hoteles */}
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col relative col-span-2">
        <label className="text-xs text-gray-500 uppercase tracking-wide">
          Fechas
        </label>
        <div
          className="grid grid-cols-2 gap-2"
          onClick={() => setOpen(true)}
        >
          <input
            readOnly
            value={startDate ? format(startDate, "dd MMM yyyy") : ""}
            onFocus={() => {
              setFocusedField("start");
              setOpen(true);
            }}
            placeholder="Check-in"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm cursor-pointer"
          />
          <input
            readOnly
            value={endDate ? format(endDate, "dd MMM yyyy") : ""}
            onFocus={() => {
              setFocusedField("end");
              setOpen(true);
            }}
            placeholder="Check-out"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm cursor-pointer"
          />
        </div>

        {open && (
          <div className="absolute z-50 mt-2">
            <DatePicker
              selected={focusedField === "start" ? startDate : endDate}
              onChange={handleChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              monthsShown={2}
            />
          </div>
        )}
      </div>

      {/* Occupancy */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-500 uppercase tracking-wide">
          Occupancy
        </label>
        <span className="text-lg font-medium">2-0-0</span>
      </div>

      {/* Promo Code */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-500 uppercase tracking-wide">
          Promocode
        </label>
        <input
          type="text"
          name="discount"
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
        />
      </div>

      {/* Submit */}
      <div>
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
