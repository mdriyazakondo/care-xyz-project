"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";

const ServiceClientSide = ({ initialServices }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const processedServices = useMemo(() => {
    let result = initialServices.filter((s) => {
      const matchesSearch = s.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = filter === "All" || s.category === filter;
      return matchesSearch && matchesFilter;
    });

    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, filter, sort, initialServices]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processedServices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(processedServices.length / itemsPerPage);

  return (
    <>
      <div className="mb-12 p-6 rounded-[2.5rem] bg-primary/5 border border-primary/10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
          <input
            type="text"
            placeholder="Search service..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <select
          className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 text-foreground font-bold outline-none"
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Medical">Medical</option>
          <option value="Personal">Personal Care</option>
          <option value="Emergency">Emergency</option>
        </select>

        <select
          className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 text-foreground font-bold outline-none"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentItems.map((service) => (
          <div
            key={service._id}
            className="group bg-background border border-primary/10 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                {service.category}
              </div>
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-black text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {service.title}
                </h4>
                <div className="flex items-center gap-1 text-secondary font-bold text-sm">
                  <FaStar size={12} /> {service.rating}
                </div>
              </div>

              <p className="text-foreground/50 text-sm mb-4 line-clamp-2">
                {service.short_desc}
              </p>

              <div className="space-y-2 mb-6 grow">
                {service.features.slice(0, 2).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[11px] font-bold text-foreground/70 uppercase tracking-tighter"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                    {f}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-foreground/40 leading-none">
                    {service.unit}
                  </p>
                  <p className="text-2xl font-black text-primary">
                    ৳{service.price}
                  </p>
                </div>
                <Link
                  href={`/my-services/${service?._id}`}
                  className="bg-secondary flex items-center justify-center gap-1 cursor-pointer hover:bg-secondary-dark text-white p-4 rounded-2xl transition-all shadow-lg shadow-secondary/20 active:scale-90"
                >
                  Book Now <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-4 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
          >
            <FaChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === i + 1 ? "bg-primary text-white" : "bg-primary/5 text-foreground/50"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-4 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default ServiceClientSide;
