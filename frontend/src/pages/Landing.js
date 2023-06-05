import React, { useRef } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contacts from '../components/Contacts';
import Team from '../components/Team'

export default function Landing() {
    const HomeRef = useRef();
    const AboutRef = useRef();
    const GalleryRef = useRef();
    const FaqRef = useRef();
    const ContactsRef = useRef();
    const TeamRef = useRef();
    return (
        <>
            <section ref={HomeRef}>
                <Home />
            </section>
            <section ref={AboutRef}>
                <About />
            </section>
            <section ref={GalleryRef}>
                <Gallery />
            </section>
            <section ref={TeamRef}>
                <Team />
            </section>
            <section ref={FaqRef}>
                <FAQ />
            </section>
            <section ref={ContactsRef}>
                <Contacts />
            </section>
        </>
    )
}