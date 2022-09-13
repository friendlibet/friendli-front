import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [widthWindow, setWidthWindow] = useState<number>(0);
  const handleResize = () => {
    setWidthWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return widthWindow;
};
