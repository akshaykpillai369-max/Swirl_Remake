import {useState } from "react"

export default function Intro() {

    const [playing, setPlaying] = useState(false)
return (
<main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#FEFEFE] text-black">

    {playing ? (

        <video src="/hello.mp4" autoPlay playsInline className="w-full max-w-3xl" />

    ): (

        <button onClick={() => setPlaying(true)} className="rounded-full border border-black px-8 py-3 text-sm transition hover hover font-['Dancing_Script']">

            Enter to the World of Magic 
        </button>
    )}
    
   
</main>
)
}