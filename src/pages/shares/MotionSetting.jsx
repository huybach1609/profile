import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const FadeInOnScroll = ({ children }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once when element comes into view
        threshold: 0.2,    // Trigger when 20% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }} 
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
