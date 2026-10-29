import Reveal from './Reveal';

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
                         <a href="#credits" className="text-sm text-neutral-400 transition-colors hover:text-white sm:text-sm">Credits</a>

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
                <Reveal>
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
                            I'm Akshay, a developer who enjoys turning ideas into reality through web applications, games and experiments with new technologies
                        </p>

                        <p className="mt-5 leading-7 text-neutral-500">

                            I've created games like Hollow Woods and Troll Bound, and I'm always looking 
                            for new ideas to explore. I'm also interested in expanding my knowledge of 
                            cybersecurity and discovering what else I can build through code.
                        </p>

                    

                    </div>
                </div>
                </Reveal>
            </section>

            <section id="skills" className="border-t border-white/10 px-6 py-16 sm:px-12 lg:py-24">

                <Reveal>
                <div className="mx-auto max-w-6xl">

                    <div className="mb-12">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F0A36B]">
                            A peek behind the curtain
                        </p>

                        <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">

                            The stuff behind the scenes
                        </h2>

                        <p className="mt-4 max-w-lg leading-7 text-neutral-400">

                            Things I use to turn ideas into something real
                        </p>
                        
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">

                        <div className="min-w-0">

                            <p className="mb-2 text-xs tracking-[0.18em] text-[#F0A36B]">
                                01 / WORDS THAT MAKE THINGS WORK
                            </p>

                            <div className="min-w-0 grid grid-cols-2 gap-3">
                                {['Python','HTML', 'CSS'].map((skill)=> (

                                    <div key={skill} className="rounded-lg border border-white/10 p-4 text-sm text-neutral-300 transition-all duration-200 hover:border-[#F0A36B]/60 hover:bg-[#F0A36B]/5 hover:text-[#F0A36B]">

                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="min-w-0">
                            <p className="mb-2 text-xs tracking-[0.18em] text-[#F0A36B]">
                                02 / WHERE IDEAS TAKE SHAPE
                            </p>

                            <div className="min-w-0 grid grid-cols-2 gap-3">
                                {['React', 'Django REST Framework', 'Streamlit', 'Bootstrap', 'Tailwind CSS'].map((skill)=> (

                                    <div key={skill} className="rounded-lg border border-white/10 p-4 text-sm text-neutral-300 transition-all duration-200 hover:border-[#F0A36B]/60 hover:bg-[#F0A36B]/5 hover:text-[#F0A36B]">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="min-w-0">
                            <p className="mb-2 text-xs tracking-[0.18em] text-[#F0A36B]">
                                03 / MY WEAPONS OF CHOICE
                            </p>

                            <div className="min-w-0 grid grid-cols-2 gap-3">
                                {['VS Code','Git', 'GitHub', 'Godot', 'OpenCode', 'Antigravity'].map((skill)=>(

                                    <div key={skill} className="rounded-lg border border-white/10 p-4 text-sm text-neutral-300 transition-all duration-200 hover:border-[#F0A36B]/60 hover:bg-[#F0A36B]/5 hover:text-[#F0A36B]">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                </Reveal>

            </section>

            <section id="projects" className="border-t border-white/10 px-6 py-16 sm:px-12 lg:py-24">

                
                
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                    <div className="mb-12">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F0A36B]">
                            THE SHOWCASE
                        </p>
                        
                        <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
                            Things I've made
                        </h2>

                        <p className="mt-4 max-w-lg leading-7 text-neutral-400">
                            Alright, here's where I show off a little
                        </p>
                    </div>
                    </Reveal>

                    <Reveal>

                    <div className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-2 md:items-center md:gap-12">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
                            <img src="/shopkart.png" alt="Shopkart e-commerce application" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"/>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F0A36B]">
                                01 / E-commerce
                            </p>

                            <h3 className="mt-4 text-3xl font-medium tracking-tight">
                                ShopKart
                            </h3>

                            <p className="mt-4 leading-7 text-neutral-400">
                                A full-stack e-commerce project built to explore product browsing, category navigation, and the core features of an online store
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {['React', 'Django REST Framework','PostgreSQL'].map((tech)=> (

                                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                                
                            <div className="flex flex-wrap gap-6"> 
                            <a href="https://github.com/akshaykpillai369-max/ShopKart" target="_blank" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]" rel="noopener noreferrer">
                                 
                                 View Repository
                            </a>

                            <a href="https://shopkart-lake.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]">
                            Live Demo
                             </a>
                             </div>   
                        </div>
                        </div>
                        </Reveal>

                        <Reveal>

                    <div className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-2 md:items-center md:gap-12">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
                        <img src="/trollbound.png" alt="Troll bound main menu" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"/>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F0A36B]">
                                02 / Game Development
                            </p>

                            <h3 className="mt-4 text-3xl font-medium tracking-tight">
                                Troll Bound
                            </h3>

                            <p  className="mt-4 leading-7 text-neutral-400">
                                A pixel art game built in Godot, inspired by Level Devil, which is famous for unexpected traps, troll mechanics and plenty of surprises. Give it a try!

                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Godot', 'GDScript', 'Pixel Art'].map((tech)=>(

                                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-9 ">

                                <a href="https://github.com/akshaykpillai369-max/trollbound" target="_blank" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]" rel="noopener noreferrer">
                                View Repository 
                                </a>


                                <a href="https://akshay369.itch.io/trollbound" target="_blank" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]" rel="noopener noreferrer">
                                Live Demo </a>
                            </div>
                        </div>
                    </div>  

                    </Reveal>

                    <Reveal>  

                    <div className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-2 md:items-center md:gap-12">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
                        <img src="/hollow_woods.png" alt="hollow woods main menu" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]" />
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F0A36B]">
                                03 / Game Development
                            </p>

                            <h3 className="mt-4 text-3xl font-medium tracking-tight">
                                Hollow Woods
                            </h3>

                            <p className="mt-4 leading-7 text-neutral-400">

                                A pixel art game built in Godot for hackclub 3am challenge. Explore the experience and see what awaits you in the woods.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Godot', 'GDScript', 'Pixel Art'].map((tech)=> (

                                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300">

                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-6">

                                <a href="https://github.com/akshaykpillai369-max/hollow_woods" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]">
                                View Repository
                                </a>

                                <a href="https://akshay369.itch.io/hollow-woods" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F0A36B]">
                                Live Demo 
                                </a>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>
            </section>

            <section id="contact" className="border-t border-white/10 px-6 py-20 sm:px-12 lg:py-28">

                <Reveal>
                <div className="mx-auto max-w-6xl">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F0A36B]">
                        GET IN TOUCH
                    </p>

                    <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        
                        Have an idea?
                        <span className="block text-neutral-500">
                            Let's make it real
                        </span>
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-neutral-400">
                        Whether it's a project, an interesting idea, or just casual conversation, my inbox is open. I'm always happy to connect.

                    </p>

                    <a href="mailto:akshaykpillai369@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F0A36B] px-6 py-3.5 text-sm font-semibold text-[#080808] transition-colors duration-300 hover:bg-white">
                        Say Hello
                
                    </a>


                    <div className="flex flex-wrap md:border-t-0 gap-5">
                        <a href="https://github.com/akshaykpillai369-max" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between  py-5 text-neutral-300  transition-colors hover:text-[#F0A36B]">
                        Github↗
                        </a>

                        <a href="https://www.linkedin.com/in/akshaykpillai369/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-5 text-neutral-300 transition-colors hover:text-[#F0A36B]">
                        LinkedIn↗
                        </a>

                        <a href="https://hackclub.enterprise.slack.com/team/U0BBAC3E9U5" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-5 text-neutral-300 transition-colors hover:text-[#F0A36B]">
                        Slack↗ 
                        </a>
                    </div>
                </div>
                </Reveal>
            </section>
            
            <section id="credits" className="border-t border-white/10 px-6 py-12 sm:px-12">
            
            <Reveal>
            <div className="mx-auto max-w-6xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F0A36B]">
                    THE PEOPLE BEHIND THIS
                </p>

                <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">

                    Built with inspiration
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                    This project is a remake of Swirl, created for the Hack Club's Cont.d programme.
                    Thanks to Alex, the Cont.d lead, for leading this amazing programme, and to Rohan for the original project that inspired this work.

                </p>

                <a href="https://github.com/Rohan317685/Swirl-Project" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text -sm text-neutral-300 transition-colors hover:text-[#F0A36B]">
                Explore the original repository↗
                </a>
            </div>
            </Reveal>
                
            </section>

            <footer className="border-t border-white/10 px-6 py-8 sm:px-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <a href="#home" className="w-fit text-xl font-bold tracking-tight text-white">
                    swirl<span className="text-[#F0A36B]">.</span>
                </a>

                <a href="#home" className="w-fit text-sm text-neutral-400 transition-colors hover:text-[#F0A36B]">
                Back to top↑
                                
                </a>
                
                </div>
                </footer>
            
        </div>
    )
}