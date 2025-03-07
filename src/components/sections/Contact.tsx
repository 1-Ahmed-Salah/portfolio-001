import { RevealOnScroll } from "../RevealOnScroll"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex justify-center items-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <form className="space-y-6">
                    <div className="relative ">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name..."
                            required
                            className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        />
                    </div>
                    <div className="relative ">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@gmail.com"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        />
                    </div>

                    <div className="relative ">
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={5}
                            placeholder="Your Message..."
                            required
                            className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition resize-none focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Contact