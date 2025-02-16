import { useEffect, useRef } from "react";

interface IRevealOnScrollState {
    children: React.ReactNode;
}
export const RevealOnScroll: React.FC<IRevealOnScrollState> = ({ children }) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=> {

        const observer = new IntersectionObserver(([entry])=> {
            if(entry.isIntersecting && ref.current){
                ref.current.classList.add('visible')
            }
        }, { threshold: 0.5, rootMargin: "0px 0px -50px 0px "});

        if(ref.current) observer.observe(ref.current);

        return ()=> {
            observer.disconnect();
        }

    }, [ref])

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    )
}

