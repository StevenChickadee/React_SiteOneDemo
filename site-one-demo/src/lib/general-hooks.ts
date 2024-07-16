import { useState, useEffect } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkIsMobile = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileRegex = /iphone|ipad|ipod|android|blackberry|windows phone/;
        setIsMobile(mobileRegex.test(userAgent));
      };
  
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
  
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);
  
    return isMobile;
};