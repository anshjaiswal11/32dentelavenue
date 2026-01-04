import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Scroll to top on initial page load (refresh)
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return null;
}
