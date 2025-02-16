import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen object-cover duration-1000 animate-fadeInUp">
      <div className="absolute w-full h-10 bg-bluemain items-center justify-center flex hover:underline z-20">
        latest version create by euro.
      </div>
      <div className="bg-gradient-to-b from-[#040405] to-[#040405] w-full min-h-[2000px]">
        <div className="h-20 z-10"></div>

        <Navbar />

        {/* Position the red div below Navbar */}
        <div className="relative flex items-center justify-center w-full min-h-screen">
          <div className="absolute top-[-660px] left-2/4 transform -translate-x-2/4 w-[1500px] h-[1000px] bg-[#314561] blur-[220px] rounded-full z-10"></div>

          {/* Section with fade-in and slide-up animation */}
          <div className="absolute top-16 z-10 h-[500px] w-2/5 flex flex-col items-center justify-start transition-all duration-700 opacity-0 translate-y-10 animate-fadeInUp">
            <h1 className="text-4xl text-white font-bold">Hi I'am Euro</h1>
            <p className="mt-6 text-md text-white">
              Hello, my name is Mr. Tibet Charoensripaiboon, and my nickname is
              Euro. I am currently a third-year student at the Faculty of
              Science, Department of Computer Science, Kasetsart University,
              Bangkhen Campus. I have an interest in technology and software
              development processes, particularly in creating high-quality
              systems with excellent stability. I believe that building good
              software is not just about development, but also requires a 
              quality assurance process to go hand-in-hand.
            </p>

            <div className="mt-12" >
              <Image className="rounded-[30px] shadow-lg shadow-[#1111]"
                src="/image/3.jpeg" // ที่อยู่ของไฟล์ภาพ
                alt="Description of image" // คำอธิบายภาพ (สำหรับการเข้าถึงและ SEO)
                width={500} // กำหนดความกว้างของภาพ
                height={300} // กำหนดความสูงของภาพ
                priority
              />
            </div>

          </div>
        </div>

        {/* <div className="h-20 bg-white mt-[100px]"></div> */}

      </div>
    </div>
  );
}
