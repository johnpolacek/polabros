import Panorama from "@/components/Panorama";

export default function Home() {
  return (
    <main className="relative fade-in-2 animation-delay-1">
      <Panorama
        imageUrl="/images/bgr-dreamscape.jpg"
        className="absolute inset-0 z-10"
      />
      <div className="flex items-center flex-col relative z-20">
        <h1
          className="fade-in-3 animation-delay-2 text-8xl font-bold text-white pt-32 pb-8"
          style={{
            textShadow: "0 0 48px rgba(0,0,139,.5), 0 0 24px rgba(0,0,139,.25)",
          }}
        >
          POLABROS
        </h1>
        <h2
          className="fade-in-2 animation-delay-2 text-white max-w-[360px] text-center text-xl"
          style={{
            textShadow:
              "0 0 16px rgba(0,0,139,.25), 0 0 4px rgba(0,0,139,.25), 0 0 2px rgba(0,0,139,1)",
          }}
        >
          Two wild and crazy Polacek Brothers making web applications together.
        </h2>
        <div className="fade-in-3 animation-delay-2 text-black text-center italic py-24">
          <iframe
            width="640"
            height="360"
            style={{ borderRadius: "8px" }}
            src="https://www.youtube.com/embed/GiiYwL2nO0Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="pt-1">
            Actual archival footage of Polabros 1st attempt to launch a product
          </div>
        </div>
      </div>
    </main>
  );
}
