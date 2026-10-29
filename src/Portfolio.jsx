export default function Portfolio(){


    return(

        <div className="min-h-screen bg-[#080808] text-white">

            <header className="px-6 py-5 sm:px-12">
                <nav className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                        swirl<span className="text-[#F0A36B]">.</span>
                    </h1>

                    <div className="flex items-center gap-2 sm:gap-5 lg:gap-8">

                        <a href="#home" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">Home</a>
                        <a href="#about" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">About</a>
                        <a href="#skills" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">Skills</a>
                        <a href="#projects" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">Projects</a>
                        <a href="#contact" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">Contact</a>
                    </div>
                </nav>
            </header>

    
            <section id="home" className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-16 sm:px-12">
                    <div className="flex items-center gap-3">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">

                            Python Full Stack Developer   

                        </p>
                        
                        </div>
                        <h1 className="text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                            Turning ideas into
                            <span className="mt-2 block text-[#F0A36B]">
                                Reality.
                            </span>
                        </h1>

                        <div>
                        <p className="max-w-lg text-base leading-8 text-neutral-400 mt-5 sm:text-lg">
                            I build web applications, games, explore new technologies, and turn ideas into projects like this.
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#F0A36B] px-5 py-3.5 text-sm font-semibold text-[#080808] transition-all duration-300 hover:bg-white">

                                Explore projects
                                
                            </a>

                            <a href="#contact" className="rounded-full border border-white/15 px-5 py-3.5 text-sm text-neutral-300 transition-colors duration-300 hover:border-white/40 hover:text-white">Get in touch</a>
                        </div>
                        </div>

                        <div className="mt-3 text-xs leading-6 tracking-[0.15em] text-neutral-500">
                            TRY AGAIN · FAIL AGAIN · TRY AGAIN · FAIL AGAIN
                        </div>

                        <div className="mt-3 border-t border-white/10 pt-4">
                            

                        </div>

                    
                    </section>
        </div>
    )
}