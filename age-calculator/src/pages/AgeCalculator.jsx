import React, { useState } from "react";
import moment from "moment";

const AgeCalculator = () => {
  const [startsDate, setStartsDate] = useState("");
  const [endsDate, setEndsDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (startsDate && endsDate) {
      const startDate = moment(startsDate);
      const endDate = moment(endsDate);

      const years = endDate.diff(startDate, "years");
      startDate.add(years, "years");

      const months = endDate.diff(startDate, "months");
      startDate.add(months, "months");

      const weeks = endDate.diff(startDate, "weeks");
      startDate.add(weeks, "weeks");

      const days = endDate.diff(startDate, "days");
      startDate.add(days, "days");

      const hours = endDate.diff(startDate, "hours");
      startDate.add(hours, "hours");

      const minutes = endDate.diff(startDate, "minutes");

      setAge({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
      });
    } else {
      alert("Kindly Select First Start & End Date");
      setAge(null);
    }
  };

  const renderAge = () => {
    if (age) {
      return (
        <>
          <p className="renderData">
            {age.years <= 0 ? null : age.years}{" "}
            {age.years <= 0 ? null : age.years === 1 ? "year" : "years"}{" "}
            {age.months <= 0 ? null : age.months}{" "}
            {age.months <= 0 ? null : age.months === 1 ? "month" : "months"}{" "}
            {age.weeks <= 0 ? null : age.weeks}{" "}
            {age.weeks <= 0 ? null : age.weeks === 1 ? "week" : "weeks"}{" "}
            {age.days <= 0 ? null : age.days}{" "}
            {age.days <= 0 ? null : age.days === 1 ? "day" : "days"}{" "}
            {age.hours <= 0 ? null : age.hours}{" "}
            {age.hours <= 0 ? null : age.hours === 1 ? "hour" : "hours"}{" "}
            {age.minutes <= 0 ? null : age.minutes}{" "}
            {age.minutes <= 0 ? null : age.minutes === 1 ? "minute" : "minutes"}
          </p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="agecalculator">
      <h2>Age Calculator</h2>
      <div className="sdate">
        <h3>Start Date: </h3>
        <input
          type="date"
          value={startsDate}
          onChange={(e) => setStartsDate(e.target.value)}
        />
      </div>
      <div className="sdate">
        <h3>End Date: </h3>
        <input
          type="date"
          value={endsDate}
          onChange={(e) => setEndsDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {renderAge()}
    </div>
  );
};

export default AgeCalculator;
