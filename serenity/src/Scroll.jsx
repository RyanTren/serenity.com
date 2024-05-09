import { useEffect } from "react";
import './styles/scroll.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger outside the component

export const Scroll = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);


    return (
        <>
                <progress max="100" value="0"></progress>
        </>
    );
};

export default Scroll;