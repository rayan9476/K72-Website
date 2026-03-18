import { useState, useEffect } from "react";

export function useLockedHoverCardInfo({ hoveredIndex, hoveredImage, data }) {
  // logic for dynamic info start here

  const validIndex =
    hoveredImage &&
    Number.isInteger(hoveredImage.index) &&
    hoveredImage.index >= 0 &&
    hoveredImage.index < data.length;

  const [lockedInfo, setLockedInfo] = useState(null);

  // Update locked info only when hovering
  useEffect(() => {
    if (hoveredIndex && validIndex) {
      const card = data[hoveredImage.index];
      const newInfo = hoveredImage.side === 1 ? card.image1 : card.image2;
      setLockedInfo(newInfo);
    }
  }, [hoveredIndex, hoveredImage, data, validIndex]);

  //  logic for dynamic info ends here

  return lockedInfo;
}
