import React from "react";

export default function BookingForm() {
  return (
    <div className="FormTC ">
      <form
        name="resform"
        id="resform"
        className="w-full grid grid-cols-5 gap-4 items-center px-6 py-4"
        action="https://search.travelclick.com/cds/"
        method="get"
        target="_blank"
      >
        <input name="LanguageID" type="hidden" value="2" />

        {/* Check-in */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Check-in</span>
          <span className="text-lg font-medium">25 mar 2025</span>
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Check-out</span>
          <span className="text-lg font-medium">26 mar 2025</span>
        </div>

        {/* Occupancy */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Occupancy</span>
          <span className="text-lg font-medium">2-0-0</span>
        </div>

        {/* Promo code */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Promocode</span>
          <input
            type="text"
            name="discount"
            placeholder=""
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
