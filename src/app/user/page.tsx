import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-[1000px] object-cover">
      <div className="absolute w-full h-10 bg-bluemain items-center justify-center flex hover:underline z-20">
        Watch the latest videos about tvOS
      </div>
      <div className="bg-gradient-to-b from-[#373780] to-[#040405] w-full h-full animate-fadeInUp">
        <div className="h-20 z-10"></div>

        <Navbar />

        {/* Position the red div below Navbar */}
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute top-[-660px] left-2/4 transform -translate-x-2/4 w-[1500px] h-[1000px] bg-[#314561] blur-[220px] rounded-full z-10"></div>
          <div className="absolute top-16 z-10 h-[500px] w-2/5 flex flex-col items-center justify-start">
            <h1 className="text-4xl text-white font-bold">
              Hi I'am king
            </h1>
            <p className="mt-6 text-md text-white">
             lopment, but also
              requires a strong quality assurance process to go hand-in-hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
