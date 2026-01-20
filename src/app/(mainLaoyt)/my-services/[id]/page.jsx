import React from "react";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  console.log("Service ID:", id);

  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });
  const service = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>
      <p className="text-primary font-bold">Price: ৳{service.price}</p>
    </div>
  );
};

export default ServiceDetails;
