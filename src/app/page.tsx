import Panorama from "@/components/Panorama"

export default function Home() {
  return (
    <main className="relative fade-in-2 animation-delay-2">
      <Panorama
        imageUrl="/images/bgr-dreamscape.jpg"
        className="absolute inset-0 z-10"
      />
      <div className="flex items-center flex-col relative z-20">
        <h2 className="fade-in-2 animation-delay-3 py-16 text-white max-w-[360px] text-center text-xl" style={{textShadow: "0 0 8px rgba(0,0,139,.5), 0 0 4px rgba(0,0,139,.25)"}}>Two wild and crazy Polacek Brothers making web applications together.</h2>
        <h1 className="fade-in-4 animation-delay-3 text-8xl font-bold text-white" style={{textShadow: "0 0 48px rgba(0,0,139,.5), 0 0 24px rgba(0,0,139,.25)"}}>POLABROS</h1>
      </div>
    </main>
  )
}
