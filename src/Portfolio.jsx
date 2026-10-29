export default function Portfolio(){


    return(

        <div className="min-h-screen bg-[#080808] text-white">

            <header className="px-6 py-5 sm:px-12">
                <nav className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                        swirl<span className="text-[#A3E635]">.</span>
                    </h1>

                    <div className="flex items-center gap-5 sm:gap-8">

                        <a href="#home" className="text-sm text-neutral-400 transition-colors hover:text-white">Home</a>
                        <a href="#about" className="text-sm text-neutral-400 transition-colors hover:text-white">About</a>
                        <a href="#skills" className="text-sm text-neutral-400 transition-colors hover:text-white">Skills</a>
                        <a href="#projects" className="text-sm text-neutral-400 transition-colors hover:text-white">Projects</a>
                        <a href="#contact" className="text-sm text-neutral-400 transition-colors hover:text-white">Contact</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}