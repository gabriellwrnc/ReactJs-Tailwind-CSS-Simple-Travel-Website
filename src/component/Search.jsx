import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      {/* left content */}
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className="py-4">
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches in
          Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving premium
          liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is the
          leader in Caribbean destination weddings and honeymoon packages.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
          <div>
            <h3 className="py-2">LEADING SERVICE</h3>
            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
          <div>
            <h3 className="py-2">LEADING SERVICE</h3>
            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
          </div>
        </div>
      </div>
      {/* right content */}
      <div>
        <div className="border text-center p-2">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOUR LEFT</p>
          <p className="bg-blue-800 text-gray-200 py-2 rounded-md">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full p-2">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Nusa Dua Beach, Bali</option>
              <option>Pink Beach, Komodo Island</option>
              <option>Gili Trawang, Lombok</option>
              <option>Nongsa Beach, Batam</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <button className="w-full my-2">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
