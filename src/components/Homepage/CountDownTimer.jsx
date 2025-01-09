"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`03/08/2025`) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval];
    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">
          {value}
        </div>
        <div className="text-xs md:text-xl lg:text-3xl text-gray-400 uppercase tracking-wider">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center md:justify-between items-center w-full bg-black p-5 md:p-10">
      {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
    </div>
  );
};

export default CountdownTimer;
