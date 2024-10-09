const BookingForm = () => {
    return (

<div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-md">
    <h2 className="text-lg font-semibold">Booking Details</h2>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Full Name */}
      <input type="text" placeholder="Full Name" className="p-3 border rounded-md" />
      
      {/* Email */}
      <input type="email" placeholder="Email" className="p-3 border rounded-md" />
      
      {/* Phone */}
      <input type="tel" placeholder="Phone Number" className="p-3 border rounded-md" />
      
      {/* Date of Birth */}
      <input type="date" className="p-3 border rounded-md" />
  
      {/* Payment Info */}
      <input type="text" placeholder="Card Number" className="p-3 border rounded-md" />
      <input type="text" placeholder="Expiration Date" className="p-3 border rounded-md" />
      <input type="text" placeholder="CVV" className="p-3 border rounded-md" />
      <input type="text" placeholder="Billing Address" className="p-3 border rounded-md" />
  
      <button type="submit" className="col-span-2 p-3 bg-blue-600 text-white rounded-md">
        Confirm Booking
      </button>
    </form>
  </div>
  );
};
  export default BookingForm;  