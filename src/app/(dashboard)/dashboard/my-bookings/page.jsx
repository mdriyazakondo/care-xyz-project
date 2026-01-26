import { getBookings } from "@/app/_actions/bookingActions";
import Image from "next/image";
import BookingCancel from "./_components/BookingCancel";
export const dynamic = "force-dynamic";
const BookingList = async () => {
  const data = await getBookings();
  const bookings = data?.bookings || [];

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 px-2">
        My Bookings ({bookings.length})
      </h2>

      {/* Desktop & Tablet View (Hidden on Mobile) */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900">
                Service Info
              </th>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900">
                Category
              </th>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900">Price</th>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900">Date</th>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900">Status</th>
              <th className="px-4 uppercase py-3 font-semibold text-gray-900 text-center ">
                Actions
              </th>
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
                    <Image
                      width={48}
                      height={48}
                      src={booking.image}
                      alt={booking.title}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div className="font-medium text-gray-900 line-clamp-1">
                      {booking.title}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600">{booking.category}</td>
                <td className="px-4 py-4 text-gray-700">
                  <span className="font-semibold text-indigo-600">
                    ${booking.price}
                  </span>
                  <span className="text-[10px] block text-gray-400">
                    {booking.unit}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-600">
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
                <td className="px-4 py-4 text-center">
                  {booking.status === "cancelled" ? (
                    <p
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                        booking.status === "cancelled"
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      }
                          `}
                    >
                      {booking.status}
                    </p>
                  ) : (
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1 text-xs font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                        Pay
                      </button>
                      <BookingCancel id={booking._id} booking={booking} />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) - Hidden on Desktop */}
      <div className="md:hidden space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex gap-4">
              <Image
                width={64}
                height={64}
                src={booking.image}
                alt={booking.title}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 leading-tight">
                  {booking.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{booking.category}</p>
                <p className="text-sm font-bold text-indigo-600 mt-1">
                  ${booking.price}{" "}
                  <span className="text-[10px] text-gray-400 font-normal">
                    /{booking.unit}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <span className="block font-semibold">Date:</span>
                {new Date(booking.date).toLocaleDateString("en-GB")}
              </div>
              <div
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium 
                ${booking.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
              >
                {booking.status}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Pay Now
              </button>
              <div className="flex-1 border border-red-100 rounded-lg flex items-center justify-center">
                <BookingCancel id={booking._id} status={booking.status} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {bookings.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No bookings found.
        </div>
      )}
    </div>
  );
};

export default BookingList;
