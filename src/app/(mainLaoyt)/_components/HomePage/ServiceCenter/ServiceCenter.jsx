"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";

// Leaflet default icon fix
const customIcon = L.divIcon({
  html: renderToString(<FaMapMarkerAlt className="text-primary" size={30} />),
  className: "custom-marker-icon",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// রংপুর বিভাগের ৮টি জেলার তথ্য
const rangpurDistricts = [
  {
    name: "Rangpur",
    lat: 25.7439,
    lon: 89.2752,
    address: "Central Care Hub, Rangpur City",
  },
  {
    name: "Dinajpur",
    lat: 25.6217,
    lon: 88.6354,
    address: "Dinajpur Support Point",
  },
  {
    name: "Kurigram",
    lat: 25.8054,
    lon: 89.6361,
    address: "Kurigram Service Unit",
  },
  {
    name: "Gaibandha",
    lat: 25.3287,
    lon: 89.5424,
    address: "Gaibandha Care Center",
  },
  {
    name: "Nilphamari",
    lat: 25.9417,
    lon: 88.8503,
    address: "Nilphamari Health Post",
  },
  {
    name: "Panchagarh",
    lat: 26.3341,
    lon: 88.5527,
    address: "Panchagarh Regional Office",
  },
  {
    name: "Thakurgaon",
    lat: 26.0337,
    lon: 88.4616,
    address: "Thakurgaon Care Hub",
  },
  {
    name: "Lalmonirhat",
    lat: 25.9125,
    lon: 89.4426,
    address: "Lalmonirhat Service Point",
  },
];

const ServiceCenter = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Our Network
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Available Across{" "}
            <span className="text-secondary">Rangpur Division</span>
          </h3>
          <p className="text-foreground/60 mt-4 text-lg">
            We provide home care services in every district of Rangpur.
          </p>
        </div>

        <div className="h-125 w-full rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative z-10">
          <MapContainer
            center={[25.75, 88.9]}
            zoom={8}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            {/* Dark Mode and Light Mode Map Tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {rangpurDistricts.map((dist, idx) => (
              <Marker
                key={idx}
                position={[dist.lat, dist.lon]}
                icon={customIcon}
              >
                <Popup>
                  <div className="p-2">
                    <h4 className="font-bold text-primary text-lg">
                      {dist.name}
                    </h4>
                    <p className="text-sm text-gray-600">{dist.address}</p>
                    <p className="text-xs text-secondary font-bold mt-1">
                      24/7 Service Available
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {rangpurDistricts.map((dist, i) => (
            <span
              key={i}
              className="bg-primary/5 border border-primary/10 text-foreground/80 px-4 py-2 rounded-full text-sm font-bold"
            >
              {dist.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
