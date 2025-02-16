import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="w-full min-h-screen object-cover duration-1000 animate-fadeInUp">
      <div className="absolute w-full h-10 bg-bluemain items-center justify-center flex hover:underline z-20">
        latest version create by euro.
      </div>
      <div>
        <div className="bg-gradient-to-b from-[#292946] via-[#040405] to-[#040405] w-full min-h-screen">
          <div className="h-20 z-10"> </div>

          <Navbar />
          {/* Position the red div below Navbar */}
          <div className="relative flex items-center justify-center w-full min-h-screen">
            {/* Section with fade-in and slide-up animation */}
            <div className="absolute top-16 z-10 h-[500px] w-4/5 sm:w-2/5 flex flex-col items-center justify-start transition-all duration-700 opacity-0 translate-y-10 animate-fadeInUp">
              <h1 className="text-4xl text-white font-bold">Hi I'am Euro</h1>
              <p className="mt-6 text-md text-white">
                Hello, I'm Mr. Tibet Charoensripaiboon, or Euro. I'm a
                third-year Computer Science student at Kasetsart University,
                Bangkhen. I'm passionate about technology and software
                development, focusing on building high-quality, stable systems
                with strong quality assurance.{" "}
              </p>
              <div className="mt-12">
                <Image
                  className="rounded-[30px] shadow-lg shadow-[#1111]"
                  src="/image/3.jpeg" // ที่อยู่ของไฟล์ภาพ
                  alt="Description of image" // คำอธิบายภาพ (สำหรับการเข้าถึงและ SEO)
                  width={500} // กำหนดความกว้างของภาพ
                  height={300} // กำหนดความสูงของภาพ
                  priority
                />
              </div>
            </div>
          </div>

          <div className="bg-[#040405] h-[1000px] w-full">
            {/* <div className="bg-slate-400 h-64"> */}
              {/* <div className="flex overflow-x-auto animate-scroll gap-8 justify-start items-center container mx-auto px-8 py-4"> */}
                
                {/* <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-64"> */}
                  
                {/* </div> */}
                {/* <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-64"> */}
                  
                {/* </div> */}
                {/* <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-64"> */}
                  
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
