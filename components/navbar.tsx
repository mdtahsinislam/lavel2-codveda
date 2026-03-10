

// // //C:\Web-Development\MyNextjs Journey\Copy Tipo graphy\tripgraphy\components\navbar.tsx
// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="backdrop-blur bg-white/30 border-b border-white/20 shadow-lg sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

// //         {/* Left - Logo */}
// //    <div className="flex mb-3">
// //          <Image
// //   src="/images/co.png"
// //   alt="TripGraphy Logo"
// //   width={100}
// //   height={100}
// //   className="rounded-lg"
// // />
        

        

// //    </div>
// //         {/* Center - Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8 text-lg font-medium">
// //            <Link href="/" className="hover:text-cyan-600 transition">
// //             Home
// //           </Link>
// //           <Link href="/about" className="hover:text-cyan-600 transition">
// //             About
// //           </Link>
// //           <Link href="/contact" className="hover:text-cyan-600 transition">
// //             Contact
// //           </Link>
         

// //             <Link href="/weather" className="hover:text-cyan-600 transition">
// //             Weather
// //           </Link>
// //         </div>

// //          {/* i want to show user login or register image in navbar */}
// //         {/* Right - Login */}
// //         <div className="hidden md:block">
// //           <Link
// //             href="/login"
// //             className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
// //           >
// //             Login
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden btn btn-ghost"
// //           onClick={() => setOpen(!open)}
// //         >
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             strokeWidth={1.5}
// //             stroke="currentColor"
// //             className="w-7 h-7"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
// //             />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Mobile Menu Items */}
// //       {open && (
// //         <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
// //           <Link href="/about" className="hover:text-blue-600 transition">
// //             About
// //           </Link>
          
// //            <Link href="/contact" className="hover:text-cyan-600 transition">
// //             Contact
// //           </Link>
         

// //             <Link href="/weather" className="hover:text-cyan-600 transition">
// //             Weather
// //           </Link>

// //           <Link
// //             href="/login"
// //             className="mt-2 px-5 py-2 bg-blue-600 text-white text-center rounded-lg shadow hover:bg-blue-700 transition"
// //           >
// //             Login
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\components\navbar.tsx

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useSession, signOut } from "next-auth/react";

// const Navbar = () => {

//   const [open, setOpen] = useState(false);

//   const { data: session } = useSession();

//   return (

//     <nav className="backdrop-blur bg-white/30 border-b shadow-lg sticky top-0 z-50">

//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

//         {/* Logo */}

//         <Image
//           src="/images/co.png"
//           alt="TripGraphy Logo"
//           width={100}
//           height={100}
//         />

//         {/* Desktop Menu */}

//         <div className="hidden md:flex items-center gap-8 text-lg font-medium">

//           <Link href="/">Home</Link>

//           <Link href="/about">About</Link>

//           <Link href="/contact">Contact</Link>

//           <Link href="/weather">Weather</Link> 
          

//         </div>



        

//         {/* Right Side */}

//         <div className="hidden md:flex items-center gap-4">

//           {session?.user ? (

//             <>

              


//     <Image
//   src={session?.user?.image || "/images/user.png"}
//   alt="user"
//   width={40}
//   height={40}
//   className="rounded-full"
//   />

//               <button
//                 onClick={() => signOut()}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Logout
//               </button>

//             </>

//           ) : (

//             <Link
//               href="/login"
//               className="px-5 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Login
//             </Link>

//           )}

//         </div>

//         {/* Mobile Button */}

//         <button
//           className="md:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>

//       </div>

//       {open && (

//         <div className="md:hidden flex flex-col gap-4 p-4">

//           <Link href="/">Home</Link>

//           <Link href="/about">About</Link>

//           <Link href="/contact">Contact</Link>

//           <Link href="/weather">Weather</Link>

//         </div>

//       )}

//     </nav>
//   );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  // Weather click handler
  const handleWeatherClick = (e: React.MouseEvent) => {
    if (!session?.user) {
      e.preventDefault();
      router.push("/login");
    }
  };

  return (
    <nav className="backdrop-blur bg-white/30  shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Image
          src="/images/co.png"
          alt="TripGraphy Logo"
          width={100}
          height={100}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          {/* Weather Protected */}
          <Link href="/weather" onClick={handleWeatherClick}>
            Weather
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <Image
                src={session?.user?.image || "/images/user.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/weather" onClick={handleWeatherClick}>
            Weather
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;