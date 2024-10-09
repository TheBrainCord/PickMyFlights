const FlightCard = () => {
    return(
<div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md rounded-md">
    {/* Flight Info */}
    <div className="flex items-center gap-4">
      <img src="airline-logo.png" alt="Airline Logo" className="w-12 h-12" />
      <div>
        <p className="font-semibold">Delta Airlines</p>
        <p className="text-sm text-gray-500">Flight DL1234</p>
        <p>Departure: New York (JFK)</p>
        <p>Arrival: London (LHR)</p>
      </div>
    </div>
  
    {/* Time and Duration */}
    <div className="text-center">
      <p>09:30 AM - 10:00 PM</p>
      <p className="text-sm text-gray-500">Duration: 10h 30m</p>
    </div>
  
    {/* Price and Book Button */}
    <div className="text-right">
      <p className="text-lg font-bold">$550</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Book Now</button>
    </div>
  </div>
    );
};
  export default FlightCard;  