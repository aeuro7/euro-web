import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-opacity-30  backdrop-blur-lg bg-black text-white py-6 mt-8 border-t border-b border-gray-600">
      <div className='flex flex-row items-center justify-between'>
        <Link href="mailto:tibet.cpb@gmail.com">
          <button 
            className="ml-5 mr-5 text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-white bg-opacity-10 rounded-full p-2 px-4"
          >
            Email&nbsp;now
          </button>
        </Link>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-4 sm:mb-0">
            <p>&copy; 2025 Built by <span className='underline'>Euro.</span></p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <div className='space-x-5 text-sm'>
              <Link href="/" className="hover:underline duration-500">
                About
              </Link>
              <Link href="/" className="hover:underline duration-500">
                Contact
              </Link>
              <Link href="/" className="hover:underline duration-500">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
