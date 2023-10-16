import { useRef, useEffect, useState } from 'react';

const useElementHeight = () => {
    const elementRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const element = elementRef.current
        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                setHeight(entry.contentRect.height);
            });
        });

        if (element) {
            resizeObserver.observe(element);
        }

        return () => {
            if (resizeObserver && element) {
                resizeObserver.unobserve(element);
            }
        }
    }, []);

    return [elementRef, height];
}

export default useElementHeight