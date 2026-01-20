"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaSortAmountDown,
  FaFilter,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const allServices = [
  {
    id: 1,
    title: "Nursing Care",
    category: "Medical",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Elderly Care",
    category: "Personal",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Physiotherapy",
    category: "Medical",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Baby Sitting",
    category: "Personal",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Post-Surgical Care",
    category: "Emergency",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Dementia Care",
    category: "Personal",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Emergency Oxygen",
    category: "Emergency",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Palliative Care",
    category: "Medical",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop",
  },
];

const ServicesList = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const processedServices = useMemo(() => {
    let result = allServices.filter((s) => {
      const matchesSearch = s.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = filter === "All" || s.category === filter;
      return matchesSearch && matchesFilter;
    });

    if (sort === "az") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);

    setCurrentPage(1);
    return result;
  }, [search, filter, sort]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processedServices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(processedServices.length / itemsPerPage);

  return (
    <section className="bg-background pt-32 pb-24 transition-colors duration-300 min-h-screen">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 p-6 rounded-[2.5rem] bg-primary/5 dark:bg-primary/10 border border-primary/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
            <select
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground appearance-none cursor-pointer font-bold"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Medical">Medical</option>
              <option value="Personal">Personal Care</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          <div className="relative">
            <FaSortAmountDown className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
            <select
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground appearance-none cursor-pointer font-bold"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="az">A to Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentItems.length > 0 ? (
            currentItems.map((service) => (
              <div
                key={service.id}
                className="group bg-background border border-primary/10 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col shadow-sm"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-xl text-[10px] font-bold uppercase">
                    {service.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {service.title}
                  </h4>
                  <p className="text-foreground/50 text-xs mb-6">
                    Starting at{" "}
                    <span className="text-primary font-bold">
                      ৳{service.price}
                    </span>
                  </p>
                  <button className="w-full py-3 rounded-xl bg-primary/5 text-primary border border-primary/10 font-bold text-xs hover:bg-primary hover:text-white transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center uppercase tracking-widest text-foreground/20 font-black text-3xl">
              No Results Found
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-2xl bg-primary/10 text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5"
            >
              <FaChevronLeft />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110"
                      : "bg-primary/5 text-foreground/60 hover:bg-primary/20"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-4 rounded-2xl bg-primary/10 text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesList;
