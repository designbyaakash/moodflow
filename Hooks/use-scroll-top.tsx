import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10 ) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handledScroll = () => {
            if (window.scrollY>threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            } 
        };
        window.addEventListener("scroll",handledScroll);
        return () => window.removeEventListener("scroll",handledScroll);
    }, [threshold]);

    return scrolled;
}