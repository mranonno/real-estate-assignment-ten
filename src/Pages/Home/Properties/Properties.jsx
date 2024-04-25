import { useEffect, useState } from "react";
import Property from "../Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/residential.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="md:my-12 my-5 text-center font-cormorant">
      <h3 data-aos="fade-down" data-aos-duration="1000" className="md:text-5xl text-4xl font-extrabold">Our Feature & Offers</h3>
      <p data-aos="fade-up" data-aos-duration="1000" className="font-poppins text-slate-900 opacity-70 mt-4">Discover our latest features and exclusive offers tailored just for you. Experience <br /> excellence at unbeatable value.</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:mx-16 md:mt-12 mt-5 mx-4">
        {properties &&
          properties.map((property) => (
            <Property property={property} key={property.id}></Property>
          ))}
      </div>
    </div>
  );
};

export default Properties;
