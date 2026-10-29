import { useEffect, useRef, useState } from "react";

export default function Reveal({children, className =''}){

    const ref = useRef(null)
    const [visible, setVisible] = useState(false)


    useEffect(() => {

        const element = ref.current
        if(!element) return

        const looker = new IntersectionObserver(

        ([entry]) => {

            if(entry.isIntersecting){

                setVisible(true)
                looker.unobserve(element)
            }
        },
        {threshold: 0.25, rootMargin: '0px 0px -100px 0px'}
    )

    looker.observe(element)
    return () => looker.disconnect()
    }, [])

    return(
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
        
        {children}
        
        </div>
    )

    
}