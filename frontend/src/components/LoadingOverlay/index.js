import { useState, useEffect } from 'react';

function LoadingOverlay({ show }) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (!show) {
            setFading(true);
            const timer = setTimeout(() => setVisible(false), 600);
            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!visible) return null;

    return (
        <div className={`loading-overlay${fading ? ' loading-overlay--hidden' : ''}`} />
    );
}

export default LoadingOverlay;
