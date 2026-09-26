import { Suspense, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { useInView } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
function App() {
    const contactRef = useRef();
    // defer loading three.js until the contact section is close to the viewport
    const contactInView = useInView(contactRef, { once: true, margin: "300px" });

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div ref={contactRef} className="relative z-0">
                    <Contact />
                    {contactInView && (
                        <Suspense fallback={null}>
                            <StarsCanvas />
                        </Suspense>
                    )}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
