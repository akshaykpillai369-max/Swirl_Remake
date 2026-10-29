import {useState } from "react"
import Portfolio from "./Portfolio"

export default function Intro() {

    const [playing, setPlaying] = useState(false)
    const [finished, setFinished] = useState(false)

return (
    <>
        {finished ? (

            <Portfolio />

            ) : playing ? (

            <main className="intro-inverted flex min-h-screen items-center justify-center bg-white">

                <video src="/hello.mp4" autoPlay playsInline onEnded={() => setFinished(true)} className="w-full max-w-3xl"/>

            </main>
            ) : (
            
            <main className="intro-inverted flex min-h-screen items-center justify-center bg-white">
                <button onClick={() => setPlaying(true)} className="rounded-full border border-black px-8 py-3 text-sm transition hover hover">
                    Enter
                </button>
            </main>
            )}
    </>
    )}