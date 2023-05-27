import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {


  
  // to disable previous days of current days
  const currentDate = new Date();
  const previousDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);
  console.log(previousDate);
  // console.log(new Date());

  const disabledDays =[
    // new Date(2023, 5, 10),
    // new Date(2023, 5, 12),
    // new Date(2023, 5, 21),
    { from: new Date(1900, 1, 1), to: previousDate }
  ];
  // console.log(disabledDays)



  return (
    <header className="py-8 h-3/5 me-12" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 justify-center align-content-center">
          <img
            src={chair}
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
            alt="chair"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={disabledDays}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
