import { getBookings } from "@/app/_actions/bookingActions";

const BookingList = async () => {
  const data = await getBookings();
  const bookings = data?.bookings || [];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        My Bookings ({bookings.length})
      </h2>

      {/* Mobile View: Cards | Desktop View: Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm text-left">
          {/* Table Header - Hidden on very small screens if needed, but standard for tablets/desktops */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-900">
                Service Info
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 hidden md:table-cell">
                Category
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900">Price</th>
              <th className="px-4 py-3 font-semibold text-gray-900 hidden sm:table-cell">
                Date
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.image}
                      alt={booking.title}
                      className="h-12 w-12 rounded-md object-cover hidden sm:block"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {booking.title}
                      </div>
                      <div className="text-xs text-gray-500 md:hidden">
                        {booking.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell text-gray-600">
                  {booking.category}
                </td>
                <td className="px-4 py-4 text-gray-700">
                  <span className="font-semibold text-primary">
                    ${booking.price}
                  </span>
                  <span className="text-[10px] block text-gray-400">
                    {booking.unit}
                  </span>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell text-gray-600">
                  {new Date(booking.date).toLocaleDateString("en-GB")}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${booking.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
