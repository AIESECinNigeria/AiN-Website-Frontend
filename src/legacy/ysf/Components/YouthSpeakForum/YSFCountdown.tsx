"use client";
import React, { useEffect, useState } from "react";

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const YSFCountdown = () => {
  const targetDate = new Date(
    "2026-06-26T00:00:00"
  ).getTime();

  const calculateTime = (): CountdownTime => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(
          difference /
            (1000 * 60 * 60 * 24)
        )
      ).padStart(2, "0"),

      hours: String(
        Math.floor(
          (
            difference %
            (1000 * 60 * 60 * 24)
          ) /
            (1000 * 60 * 60)
        )
      ).padStart(2, "0"),

      minutes: String(
        Math.floor(
          (
            difference %
            (1000 * 60 * 60)
          ) /
            (1000 * 60)
        )
      ).padStart(2, "0"),

      seconds: String(
        Math.floor(
          (
            difference %
            (1000 * 60)
          ) / 1000
        )
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState<CountdownTime>(
    calculateTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () =>
      clearInterval(interval);
  });

  const values: string[] = [
    time.days,
    time.hours,
    time.minutes,
    time.seconds,
  ];

  const labels: string[] = [
    "Days",
    "Hours",
    "Mins",
    "Secs",
  ];

  return (
  <div className="flex font-body">

    {values.map((value, index) => (
      <React.Fragment key={index}>

        <div className="flex flex-col items-center">

          <h2
            className="
            text-white text-[40px]
            md:text-[60px]
            font-extrabold
            leading-[150%]
          "
          >
            {value}
          </h2>

          <span
            className="
            text-white
          text-sm md:text-base
            tracking-[-2%]
            leading-[150%]
            font-body
          "
          >
            {labels[index]}
          </span>

        </div>

        {index !== values.length - 1 && (
          <span
            className="
            text-white text-[40px]
            md:text-[60px]
            font-extrabold
            leading-[150%]
            mx-3
            self-start
          "
          >
            :
          </span>
        )}

      </React.Fragment>
    ))}

  </div>
);
};

export default YSFCountdown;
