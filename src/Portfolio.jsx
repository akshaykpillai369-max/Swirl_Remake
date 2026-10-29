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

    
            <section id="home" className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-12 sm:px-12">
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

           <section id="about" className="px-6 py-12 sm:px-12 lg:py-16">
                
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-16">

                    <div>

                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F0A36B]">
                            A little about me
                        </p>

                        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                            From web apps to 
                            <span className="block text-neutral-500">
                                weird little games.
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-lg leading-8 text-neutral-300">
                            I'm a developer who enjoys turning ideas into reality through web applications, games and experiments with new technologies
                        </p>

                        <p className="mt-5 leading-7 text-neutral-500">

                            I've created games like Hollow Woods and Troll Bound, and I'm always looking 
                            for new ideas to explore. I'm also interested in expanding my knowledge of 
                            cybersecurity and discovering what else I can build through code.
                        </p>

                    </div>
                </div>
            </section>
            
        </div>
    )
}