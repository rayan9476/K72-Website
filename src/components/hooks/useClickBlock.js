import { useRef } from "react";
export default function useClickBlock(setismenuOpen) {
  const isBlockingRef = useRef(false);

  const handleClick = () => {
    if (isBlockingRef.current) return;

    isBlockingRef.current = true;
    setismenuOpen(true);

    setTimeout(() => {
      isBlockingRef.current = false;
    }, 2000);
  };

  return handleClick;
}
