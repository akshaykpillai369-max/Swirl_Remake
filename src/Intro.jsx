import {useState, useEffect} from "react"
import Portfolio from "./Portfolio"

export default function Intro() {

    const [playing, setPlaying] = useState(false)
    const [finished, setFinished] = useState(false)
    const [exit, setExit] = useState(false)

    useEffect(() => {

        if(!exit) return

        const timer = setTimeout(() => {

            setFinished(true)
        }, 700)

        return () => clearTimeout(timer)
    }, [exit])

return (
    <>
        {finished ? (

            <Portfolio />

            ) : playing ? (

            <main className="intro-inverted flex min-h-screen items-center justify-center bg-white px-6">


                <video src="/hello.mp4" autoPlay playsInline onEnded={() => setExit(true)} className={`w-full max-w-3xl transition-opacity duration-700 ${exit ? 'opacity-0' : 'opacity-100'}`}/>

            </main>
            ) : (
            
            <main className="intro-inverted flex min-h-screen items-center justify-center bg-white px-6">
                <div className="flex w-full max-w-md flex-col items-center text-center">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                        swirl<span className="text-[#F0A36B]">.</span>
                    </h1>

                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                        A small project for Cont.d
                    </p>
                    <div className="my-10 h-px w-12 bg-[#F0A36B]" />

                    <p className="max-w-xs text-sm leading-7 text-neutral-500">
                        TRY AGAIN • FAIL AGAIN • TRY AGAIN • FAIL AGAIN
                    </p>
                
                <button onClick={() => setPlaying(true)} className="group mt-9 inline-flex items-center gap-3 rounded-full border border-black px-8 py-3.5 text-sm transition-all duration-300 hover: bg-black hover: text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A36B]">
                    Enter→
                </button>

                <p className="mt-12 text-[10px] tracking-[0.2em] text-neutral-500">

                    REDESIGNED & REBUILT BY AKSHAY
                </p>
                </div>
            </main>
            )}
    </>
    )}