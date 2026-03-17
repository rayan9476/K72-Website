import { useState, useEffect } from "react";

export function useActiveOnClickOutside(ref, initialState = false) {
  const [active, setActive] = useState(initialState);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return { active, setActive };
}
