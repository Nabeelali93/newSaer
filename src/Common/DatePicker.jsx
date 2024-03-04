import React from 'react';

const DatePicker = ({ startDate, numberOfDays }) => {
  const dates = Array.from({ length: numberOfDays }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <div className="date-picker-container overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap scrollbar-hide">
        {dates.map((date, index) => (
          <div
            key={index}
            className="scrollbar-hide flex flex-col items-center justify-center border border-gray-300 rounded-lg py-4 px-10 m-1 cursor-pointer hover:bg-gray-100"
          >
            <div className="text-lg">{date.getDate()}</div>
            <div className="text-sm">{date.toLocaleString('default', { month: 'long' })}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
