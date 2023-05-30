import React, { useRef } from 'react';
import Home from '../components/Home';
import About from '../components/About';

export default function Landing() {
    const HomeRef = useRef();
    const AboutRef = useRef();
    return (
        <>
            <section ref={HomeRef}>
                <Home />
            </section>
            <section ref={AboutRef}>
                <About />
            </section>
        </>
    )
}