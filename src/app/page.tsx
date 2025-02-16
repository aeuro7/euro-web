import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full object-cover duration-1000 animate-fadeInUp overflow-x-hidden">
      <div className="absolute w-full h-10 bg-bluemain items-center justify-center flex hover:underline z-20">
        latest version create by euro2.
      </div>
      <div className="bg-gradient-to-b from-[#040405] to-[#040405] w-full min-h-[2000px]">
        <div className="h-20 z-10"></div>

        <Navbar />

        {/* Position the red div below Navbar */}
        <div className="relative flex items-center justify-center w-full min-h-screen">
          <div className="absolute top-[-500px] left-2/4 transform -translate-x-2/4 sm:w-[1200px] w-[1500px] sm:h-[800px] h-[1000px] bg-[#314561] blur-[220px] rounded-full z-10"></div>

          {/* Section with fade-in and slide-up animation */}
          <div className="absolute top-16 z-10 h-[500px] w-4/5 sm:w-2/4 md:w-3/4 lg:w-2/4 sm:h-auto sm:top-10 sm:translate-y-0 sm:opacity-100 flex flex-col items-center justify-start transition-all duration-700 opacity-0 translate-y-10 animate-fadeInUp px-10 sm:px-10">
            <h1 className="text-4xl text-white font-bold text-center sm:text-3xl sm:px-4">
              Hi I'am Euro
            </h1>
            <p className="mt-6 text-md text-white text-center sm:text-sm sm:px-4">
              Hello, my name is Mr. Tibet Charoensripaiboon, and my nickname is
              Euro. I am currently a third-year student at the Faculty of
              Science, Department of Computer Science, Kasetsart University,
              Bangkhen Campus. I have an interest in technology and software
              development processes, particularly in creating high-quality
              systems with excellent stability. I believe that building good
              software is not just about development, but also requires a
              quality assurance process to go hand-in-hand.
            </p>

            <div className="mt-12">
              <Image
                className="rounded-[30px] shadow-lg shadow-[#1111]"
                src="/image/3.jpeg"
                alt="Description of image"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
