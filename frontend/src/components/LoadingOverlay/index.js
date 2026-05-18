import { useState, useEffect, useRef } from 'react';
import loadingIcon from "../../assets/images/bookpics/book1.webp";

 const MIN_DISPLAY_MS = 600;

function LoadingOverlay({ show }) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);
    const mountTime = useRef(Date.now());

    useEffect(() => {
        if (!show) {
            const elapsed = Date.now() - mountTime.current;
            const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
            const fadeTimer = setTimeout(() => {
                setFading(true);
                const removeTimer = setTimeout(() => setVisible(false), 600);
                return () => clearTimeout(removeTimer);
            }, delay);
            return () => clearTimeout(fadeTimer);;
        }
    }, [show]);

    if (!visible) return null;

    return (
        <div className={`loading-overlay${fading ? ' loading-overlay--hidden' : ''}`}>
            <img src={loadingIcon} alt="Loading..." />
        </div>
    );
}

export default LoadingOverlay;