import Panorama from "@/components/Panorama";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative fade-in-1 animation-delay-1">
      <Panorama
        imageUrl="/images/bgr-dreamscape.jpg"
        className="fixed top-0 left-0 inset-0 z-10"
      />
      <div className="flex items-center flex-col relative z-20 fade-in animation-delay-2 pb-64">
        <h1
          className="text-8xl font-bold text-white pt-32 pb-8"
          style={{
            textShadow: "0 0 48px rgba(0,0,139,.5), 0 0 24px rgba(0,0,139,.25)",
          }}
        >
          POLABROS
        </h1>
        <h2
          className="text-white max-w-[360px] text-center text-xl"
          style={{
            textShadow:
              "0 0 16px rgba(0,0,139,.25), 0 0 4px rgba(0,0,139,.25), 0 0 2px rgba(0,0,139,1)",
          }}
        >
          Two wild and crazy Polacek Brothers making web applications together.
        </h2>
        <div className="text-black text-center italic py-24">
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
        <div className="my-16 flex gap-16">
          <div className="rounded-2xl px-6 pb-8 text-center w-96">
            <Image
              className="inline-block rounded-full mb-4 border-8 border-white"
              width="200"
              height="200"
              alt=""
              src="https://pbs.twimg.com/profile_images/2559037521/6o6wndyl1pgnn2mw5wx8_400x400.jpeg"
            />
            <div className="font-bold text-7xl">John</div>
            <div className="font-bold text-3xl">Polacek</div>
            <div className="pt-2 pb-4 text-[rgba(0,0,0,.5)]">CODE</div>
            <p className="w-64 mx-auto pb-8">
              Frontend Lead, Open Source Dev and Candy Crusher
            </p>
            <a
              type="button"
              className="mb-2 inline-flex px-6 py-2 rounded-2xl leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#1da1f2" }}
              href="https://twitter.com/johnpolacek"
            >
              <span className="scale-125 relative top-[6px] -left-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              @johnpolacek
            </a>
          </div>
          <div className="rounded-2xl px-6 pb-8 text-center w-96">
            <Image
              className="inline-block rounded-full mb-4 border-8 border-white"
              width="200"
              height="200"
              alt=""
              src="https://pbs.twimg.com/profile_images/1257014074723823616/-rhtZeex_400x400.jpg"
            />
            <div className="font-bold text-7xl">Steve</div>
            <div className="font-bold text-3xl">Polacek</div>
            <div className="pt-2 pb-4 text-[rgba(0,0,0,.5)]">DESIGN</div>
            <p className="pb-8">
              Creative Co-Founder, Designer and Unprofessional Golfer
            </p>
            <a
              type="button"
              className="mb-2 inline-flex px-6 py-2 rounded-2xl leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#1da1f2" }}
              href="https://twitter.com/stevepolacek"
            >
              <span className="scale-125 relative top-[6px] -left-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              @stevepolacek
            </a>
          </div>
        </div>
        <div className="my-16">
          <h3 className="text-6xl font-bold pb-6">Projects</h3>
          <div className="text-4xl text-[rgba(0,0,0,.5)]">Coming Soon</div>
        </div>
      </div>
    </main>
  );
}
