import React, { useState } from "react";

const countryCityData = {
  India: ["New Deldi", "Mumbai", "Kolkata", "Pune", "Noida", "Gurgaon"],
  USA: ["New York", "Chicago", "Texas", "Alaska", "Mishigan", "California"],
  UK: ["London", "Manchestar", "Wembly", "Brimghan", "warwick"],
};

const Dropdown = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity(""); //ON COUNTRY CHANGE WE ARE RESTTING THE VALUE
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };

  console.log(country, city);
  return (
    <div className="pb-10">
      <h2>Dropdown</h2>
      <select
        className="border p-2"
        value={country}
        onChange={handleCountryChange}
      >
        <option value={""}>Select Country</option>
        {Object.keys(countryCityData).map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        className="border p-2 ml-5"
        value={city}
        onChange={cityChange}
        disabled={!country}
      >
        <option value="">Select City</option>
        {country &&
          countryCityData[country].map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
