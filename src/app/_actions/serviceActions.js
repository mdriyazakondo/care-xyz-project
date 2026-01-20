"use server";

export const fetchServices = async ({
  search = "",
  category = "All",
  sort = "default",
  page = 1,
  limit = 8,
}) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (category && category !== "All") params.append("category", category);
  if (sort && sort !== "default") {
    if (sort === "az") {
      params.append("sortBy", "title");
      params.append("order", "asc");
    }
    if (sort === "price-low") {
      params.append("sortBy", "price");
      params.append("order", "asc");
    }
    if (sort === "price-high") {
      params.append("sortBy", "price");
      params.append("order", "desc");
    }
  }
  params.append("page", page);
  params.append("limit", limit);

  const res = await fetch(`/api/services?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json(); 
};

