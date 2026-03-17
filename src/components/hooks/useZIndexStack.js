import { useState, useEffect } from "react";
export default function useZIndexStack(hoveredIndex) {
  const [zOrder, setZOrder] = useState([]);

  useEffect(() => {
    if (hoveredIndex === null) return;
    // Move hovered index to top of stack
    setZOrder((prev) => {
      const updated = prev.filter((i) => i !== hoveredIndex);
      return [...updated, hoveredIndex];
    });
  }, [hoveredIndex]);

  return { zOrder };
}
