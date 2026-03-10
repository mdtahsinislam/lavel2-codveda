// import React from 'react'

// export default function footer() {
//   return (
//     <div>footer</div>
//   )
// }



// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\footer.tsx
// website name :   BuyFlow
// export const Footer = () => {

// // C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\footer.tsx
// import React from 'react';
// import { Twitter, Youtube, Facebook, Hash } from 'lucide-react';

// // Custom color matching the image background
// const FOOTER_BG_COLOR = 'bg-[#EFEAE4]'; 
// // Custom color matching the text/icon color
// const ACCENT_COLOR = 'text-[#5E516F]'; 

// // ------------------------------
// // Footer Link Data
// // ------------------------------
// interface FooterLink {
//   label: string;
//   href: string;
// }

// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }

// const footerData: FooterSection[] = [
//   {
//     title: 'SERVICES',
//     links: [
//       { label: 'Branding', href: '/services/branding' },
//       { label: 'Design', href: '/services/design' },
//       { label: 'Marketing', href: '/services/marketing' },
//       { label: 'Advertisement', href: '/services/advertisement' },
//     ],
//   },
//   {
//     title: 'COMPANY',
//     links: [
//       { label: 'About us', href: '#' },
//       { label: 'Contact', href: '' },
//       { label: 'Jobs', href: '/jobs' },
//       { label: 'Press kit', href: '/press' },
//     ],
//   },
//   {
//     title: 'LEGAL',
//     links: [
//       { label: 'Terms of use', href: '/terms' },
//       { label: 'Privacy policy', href: '/privacy' },
//       { label: 'Cookie policy', href: '/cookies' },
//     ],
//   },
// ];


// // ------------------------------
// // Reusable Link Column Component
// // ------------------------------
// const FooterColumn: React.FC<FooterSection> = ({ title, links }) => (
//   <div>
//     <h3 className={`text-sm font-semibold tracking-wider uppercase mb-5 ${ACCENT_COLOR}`}>
//       {title}
//     </h3>
//     <ul className="space-y-3">
//       {links.map((link) => (
//         <li key={link.label}>
//           <a
//             href={link.href}
//             className={`text-sm ${ACCENT_COLOR} opacity-80 hover:opacity-100 hover:underline transition-opacity`}
//           >
//             {link.label}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );


// // ------------------------------
// // Main Footer Component
// // ------------------------------
// export const Footer = () => {
//   return (
//     <footer className={`${FOOTER_BG_COLOR} py-12 sm:py-16`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Top Section: Links Grid */}
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-x-12">
//           {footerData.map((section) => (
//             <FooterColumn key={section.title} {...section} />
//           ))}
//           {/* Empty column for spacing on desktop, matching the image */}
//           <div className="hidden md:block"></div> 
//         </div>

//         {/* Horizontal Separator */}
//         <hr className={`my-10 border-t ${ACCENT_COLOR} opacity-20`} />

//         {/* Bottom Section: Branding and Social Icons */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          
//           {/* Copyright / Company Info */}
//           <div className={`flex items-start ${ACCENT_COLOR} mb-6 md:mb-0`}>
//             <Hash className={`w-6 h-6 mr-3 ${ACCENT_COLOR}`} aria-hidden="true" />
//             <div>
//               <p className="text-base font-medium">
//                 Acme Industries Ltd.
//               </p>
//               <p className="text-sm opacity-80 mt-1">
//                 Providing reliable tech since 1992
//               </p>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4">
//             <a href="#" aria-label="Twitter">
//               <Twitter className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
//             </a>
//             <a href="#" aria-label="YouTube">
//               <Youtube className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
//             </a>
//             <a href="#" aria-label="Facebook">
//               <Facebook className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };


// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\components\footer.tsx
"use client";
//import React from 'react';


import React from "react";
import Image from "next/image";
import { Twitter, Youtube, Facebook, Hash } from "lucide-react";
// Custom Tailwind colors for footer
const FOOTER_BG_COLOR = 'bg-black'; 
const ACCENT_COLOR = 'text-white'; 

// ------------------------------
// Footer Links Data
// ------------------------------
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: 'SERVICES',
    links: [
      { label: 'Branding', href: '/services/branding' },
      { label: 'Design', href: '/services/design' },
      { label: 'Marketing', href: '/services/marketing' },
      { label: 'Advertisement', href: '/services/advertisement' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Press kit', href: '/press' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Terms of use', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Cookie policy', href: '/cookies' },
    ],
  },
];

// ------------------------------
// Footer Column Component
// ------------------------------
const FooterColumn: React.FC<FooterSection> = ({ title, links }) => (
  <div>
    <h3 className={`text-sm font-semibold tracking-wider uppercase mb-5 ${ACCENT_COLOR}`}>
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={`text-sm ${ACCENT_COLOR} opacity-80 hover:opacity-100 hover:underline transition-opacity`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ------------------------------
// Main Footer Component
// ------------------------------
export const Footer: React.FC = () => {
  return (
    <footer className={`${FOOTER_BG_COLOR} py-12 sm:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Link Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-x-12">
          {footerData.map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}
          <div className="hidden md:block"></div> {/* Spacer for desktop */}
        </div>

        {/* Divider */}
        <hr className={`my-10 border-t ${ACCENT_COLOR} opacity-20`} />

        {/* Bottom Section: Branding & Social Icons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          
          {/* Branding */}
          <div className={`flex items-start ${ACCENT_COLOR} mb-6 md:mb-0`}>
            <Hash className={`w-6 h-6 mr-3 ${ACCENT_COLOR}`} aria-hidden="true" />
            <div>
              {/* <p className=" text-2xl font-bold text-blue-600">BuyFlow</p> */}
               <Image
                src="/images/cropped-1.png"
                alt="TripGraphy Logo"
                width={100}
                height={550}
                className="rounded-lg text-cyan-600"
              />
              
              <p>Copyright © {new Date().getFullYear()} - All right reserved by E-Commerce Website Industries Ltd</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <Twitter className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className={`w-6 h-6 ${ACCENT_COLOR} hover:text-red-600 transition-colors`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};