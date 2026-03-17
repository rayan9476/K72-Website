// useTorontoClock.js
import { useState, useEffect } from "react";

const useTorontoClock = () => {
  // logic for clock
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const currentTime = new Intl.DateTimeFormat("en-GB", options).format(
        new Date()
      );
      setTime(currentTime);
    };

    updateClock(); // initial render
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useTorontoClock;
